import { createContext, useContext, useState } from "react";
import AccountService from "../services/account";
import { cookies } from "../helpers/cookies";

type MainContextValues = {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
  isLoading: boolean;
  checkAccount: () => Promise<boolean>
  clearCookie: () => void;
};

const MainContext = createContext<MainContextValues | null>(null);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const { getCookie, deleteCookie } = cookies;

  const clearCookie = () => {
    deleteCookie("idInstance");
    deleteCookie("apiTokenInstance");
    setIsAuthorized(false);
  }

  const checkAccount = async (): Promise<boolean> => {
    setIsLoading(true);

    const idInstance = getCookie("idInstance");
    const apiTokenInstance = getCookie("apiTokenInstance");

    if (!idInstance || !apiTokenInstance) {
      clearCookie();
      setIsLoading(false);
      return false;
    }

    try {
      const { data } = await AccountService.getAccountInfo(idInstance, apiTokenInstance);
      const ok = data.stateInstance === "authorized";
      setIsAuthorized(ok);
      if (!ok) clearCookie();
      return ok;
    } catch (e) {
      console.log(e);
      clearCookie();
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return <MainContext.Provider value={{ isAuthorized, setIsAuthorized, isLoading, checkAccount, clearCookie }}>
    {children}
  </MainContext.Provider>
}

export const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext must be used inside MainContextProvider");
  }

  return context;
}

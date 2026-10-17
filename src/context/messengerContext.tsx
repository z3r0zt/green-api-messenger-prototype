import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react';
import type { ChatInfoResponse } from '../services/chats';

type MessengerContextValues = {
  chats: ChatInfoResponse;
  setChats: Dispatch<SetStateAction<ChatInfoResponse>>
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const MessengerContext = createContext<MessengerContextValues | null>(null);

export const MessengerContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<ChatInfoResponse>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <MessengerContext.Provider value={{ chats, setChats, isLoading, setIsLoading }}>
    {children}
  </MessengerContext.Provider>
}

export const useMessengerContext = () => {
  const context = useContext(MessengerContext);

  if (!context) {
    throw new Error('useMessengerContext must be used inside MessengerContextProvider');
  }

  return context;
}

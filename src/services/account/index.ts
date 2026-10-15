import type { AxiosResponse } from "axios";
import { $api } from "../../helpers/http";

type StateInstance = "notAuthorized" | "authorized" | "blocked" | "starting " | "suspended";

interface AccountInfoResponse {
  avatar: string;
  chatId: string;
  phone: string;
  historySyncProgress: number;
  stateInstance: StateInstance;
  deviceId: string;
  logoutProcess: boolean;
};

export default class AccountService {
  static async getAccountInfo(idInstance: string, apiTokenInstance: string): Promise<AxiosResponse<AccountInfoResponse>> {
    return $api.get<AccountInfoResponse>(`/waInstance${idInstance}/getWaSettings/${apiTokenInstance}`);
  };
};

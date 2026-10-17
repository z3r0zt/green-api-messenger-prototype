import type { AxiosResponse } from 'axios';
import { $api, cookies } from '@helpers';

export interface IChatInfo {
  name: string;
  phoneNumber: string;
  contactName: string;
  chatId: string;
  avatar: string;
  base64Avatar: string;
}

export type ChatInfoResponse = IChatInfo[];

const { getCookie } = cookies;

export class ChatsService {
  static async getChatInfo(chatId: string): Promise<AxiosResponse<IChatInfo>> {
    return $api.post<IChatInfo>(`/waInstance${getCookie('idInstance')}/getContactInfo/${getCookie('apiTokenInstance')}`,
      { chatId: chatId + '@c.us' }
    );
  };
};

import type { AxiosResponse } from 'axios';
import { $api, cookies } from '@helpers';

const { getCookie } = cookies;

interface SendMessageResponse {
  idMessage: string;
}

export class MessagesService {
  static async sendMessage(message: string): Promise<AxiosResponse<SendMessageResponse>> {
    return $api.post<SendMessageResponse>(`/waInstance/${getCookie('idInstance')}/sendMessage/${getCookie('apiTokenInstance')}`,
      {
        message,
        typingTime: '1000'
      }
    );
  };
};

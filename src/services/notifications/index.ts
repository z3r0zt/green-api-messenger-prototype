import type { AxiosResponse } from 'axios';
import { $api, cookies } from '@helpers';

export interface ReciveIncomingNotificationsResponse {
  receiptId: string;
  body: {
    idMessage: string;
    typeWebhook: string;
    messageData: {
      textMessageData: {
        textMessage: string;
      }
    }
  }
};

export interface DeleteNotificationResponse {
  result: boolean;
};

const { getCookie } = cookies;

export class NotificationsService {
  static async reciveIncomingNotifications(): Promise<AxiosResponse<ReciveIncomingNotificationsResponse | null>> {
    return $api.get<ReciveIncomingNotificationsResponse | null>(`/waInstance${getCookie('idInstance')}/receiveNotification/${getCookie('apiTokenInstance')}`);
  };

  static async deleteNotification(receiptId: string): Promise<AxiosResponse<DeleteNotificationResponse>> {
    return $api.delete<DeleteNotificationResponse>(`/waInstance${getCookie('idInstance')}/deleteNotification/${getCookie('apiTokenInstance')}/${receiptId}`);
  };
};

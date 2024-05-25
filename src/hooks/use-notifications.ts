import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface NotificationsInterface {
  id: string;
  name: string;
  avatar: string;
  description: string;
  isUnread: boolean;
  createdAt: Date;
}

const baseUrl = `https://c69bf612-224b-441b-bab3-8cc22f69405f.mock.pstmn.io/notifications`;

export const useNotifications = (notificationId?: string) => {
  const fetchNotifications = async (): Promise<NotificationsInterface[] | NotificationsInterface> => {
    if (notificationId) {
      const { data } = await axios.get(`${baseUrl}/${notificationId}`);
      return data as NotificationsInterface;
    } else {
      const { data } = await axios.get(baseUrl, {
        params: { limit: 20 },
      });
      return data as NotificationsInterface[];
    }
  };

  return useQuery({
    queryKey: notificationId ? ['notification', notificationId] : ['notifications'],
    queryFn: fetchNotifications,
  });
};

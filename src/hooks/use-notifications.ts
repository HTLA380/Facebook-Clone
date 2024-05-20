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

const baseUrl = `https://${process.env.NEXT_PUBLIC_API_SECRET as string}.mockapi.io/api/v1/fake/data`;

console.log(process.env.NEXT_PUBLIC_API_SECRET);

export const useNotifications = (notificationId?: string) => {
  const fetchNotifications = async (): Promise<NotificationsInterface[] | NotificationsInterface> => {
    if (notificationId) {
      const { data } = await axios.get(`${baseUrl}/${notificationId}`);
      return data as NotificationsInterface;
    } else {
      const { data } = await axios.get(baseUrl, {
        params: { page: 1, limit: 10 },
      });
      return data as NotificationsInterface[];
    }
  };

  return useQuery({
    queryKey: notificationId ? ['notification', notificationId] : ['notifications'],
    queryFn: fetchNotifications,
  });
};

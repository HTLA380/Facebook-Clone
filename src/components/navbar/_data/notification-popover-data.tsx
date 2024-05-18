export interface NotificationsInterface {
  id: string;
  name: string;
  avatar: string;
  description: string;
  isUnread: boolean;
  createdAt: Date;
}

export const getNotifications = async (): Promise<NotificationsInterface[]> => {
  const response = await fetch(`https://${process.env.API_SECRET as string}.mockapi.io/api/v1/notifications/data`, {
    headers: {},
    cache: 'no-cache',
  });
  const data = await response.json();
  return data;
};

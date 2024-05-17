export interface NotificationsType {
  _id: string;
  notificationType: string;
  name: string;
  description: string;
  date: string;
  unRead: boolean;
}

export const getNotifications = async (): Promise<NotificationsType[]> => {
  const response = await fetch('http://localhost:8080/api/notifications', { headers: {}, cache: 'no-cache' });
  const data = await response.json();
  return data?.notifications;
};

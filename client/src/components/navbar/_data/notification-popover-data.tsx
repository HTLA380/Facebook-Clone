export interface Notifications {
  _id: string;
  notificationType: string;
  name: string;
  description: string;
  date: string;
}

export const getNotifications = async (): Promise<Notifications[]> => {
  const response = await fetch("http://localhost:8080/api/notifications?limit=35", { cache: "no-cache" });
  const data = await response.json();
  return data?.notifications;
};

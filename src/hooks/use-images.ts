import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface MessagesInterface {
  id: string;
  name: string;
  avatar: string;
  description: string;
  createdAt: Date;
  isSeenLastMessage: boolean;
  isLastMessage: boolean;
  isActive: boolean;
}

const baseUrl = `https://c69bf612-224b-441b-bab3-8cc22f69405f.mock.pstmn.io/messages`;

export const useMessages = () => {
  const fetchNotifications = async (): Promise<MessagesInterface[]> => {
    const { data } = await axios.get(baseUrl, {
      params: { limit: 20 },
    });
    return data;
  };
  return useQuery({
    queryKey: ['messages'],
    queryFn: fetchNotifications,
  });
};

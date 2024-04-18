import { faker } from "@faker-js/faker";
// @ts-ignore
import { sample } from "lodash";
import { AiFillLike } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { FaShare, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

interface NotificationActionInterface {
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface NotificationPopoverDataInterface {
  id: string;
  avatarUrl: string;
  userName: string;
  notificationAction: NotificationActionInterface;
  isUnread: boolean;
  date: Date;
}

const NotificationAction = [
  {
    description: `accepted your friend request.`,
    icon: <FaUser />,
    color: "bg-primary",
  },
  {
    description: `reacted to your story. `,
    icon: <BsImages />,
    color: "bg-primary",
  },
  {
    description: `likes your comment: "That's awesome..."`,
    icon: <AiFillLike />,
    color: "bg-primary",
  },
  {
    description: `shared ${faker.person.fullName()}'s post`,
    icon: <FaShare />,
    color: "bg-primary",
  },
  {
    description: `commented on your post`,
    icon: <FaMessage />,
    color: "bg-success",
  },
  {
    description: `commented on his post`,
    icon: <FaMessage />,
    color: "bg-primary",
  },
];

export const NotificationPopoverData: NotificationPopoverDataInterface[] = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `./assets/images/avatars/avatar_${index + 1}.jpg`,
  userName: faker.person.fullName(),
  notificationAction: sample(NotificationAction) as NotificationActionInterface,
  isUnread: faker.datatype.boolean(),
  date: faker.date.recent(),
}));

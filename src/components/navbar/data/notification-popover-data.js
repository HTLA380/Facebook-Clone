import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import { AiFillLike } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { FaShare, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const notificationAction = [
  {
    description: `accepted your friend request.`,
    icon: <FaUser />,
    color: "primary",
  },
  {
    description: `reacted to your story. `,
    icon: <BsImages />,
    color: "primary",
  },
  {
    description: `likes your comment: "That's awesome..."`,
    icon: <AiFillLike />,
    color: "primary",
  },
  {
    description: `shared ${faker.person.fullName()}'s post`,
    icon: <FaShare />,
    color: "primary",
  },
  {
    description: `commented on your post`,
    icon: <FaMessage />,
    color: "destructive",
  },
  {
    description: `commented on his post`,
    icon: <FaMessage />,
    color: "destructive",
  },
];

export const NotificationPopoverData = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `./assets/images/avatars/avatar_${index + 1}.jpg`,
  userName: faker.person.fullName(),
  notificationAction: sample(notificationAction),
  isUnread: faker.datatype.boolean(),
  date: faker.date.past(),
}));

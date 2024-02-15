import { faker } from "@faker-js/faker";

export const messengerPopoverData = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `./assets/images/avatars/avatar_${index + 1}.jpg`,
  userName: faker.person.fullName(),
  message: faker.lorem.sentence(),
  isUserLastMessage: faker.datatype.boolean(),
  isSeenLastMessage: faker.datatype.boolean(),
  isOnLine: faker.datatype.boolean(),
  date: faker.date.past(),
}));

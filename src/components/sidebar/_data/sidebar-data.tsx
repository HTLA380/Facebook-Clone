import { faker } from '@faker-js/faker';

type SidebarType = {
  id: string;
  iconUrl: string;
  title: string;
  route: string;
};

export const SIDEBAR_DATA: SidebarType[] = [
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/find-friends-icon.png',
    title: 'Friends',
    route: '/friends',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/groups-icon.png',
    title: 'Groups',
    route: '/groups',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/video-icon.png',
    title: 'Video',
    route: '/watch',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/memories-icon.png',
    title: 'Memories',
    route: '/onthisday',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/saved-icon.png',
    title: 'Saved',
    route: '/saved',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/ads-manager-icon.png',
    title: 'Ads Manager',
    route: '/ad_campaign',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/birthday-icon.png',
    title: 'Birthdays',
    route: '/birthdays',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/climate-icon.png',
    title: 'Climate Science Center',
    route: '/climatescineceinfo',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/events-icon.png',
    title: 'Events',
    route: '/events',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/feeds-icon.png',
    title: 'Feeds',
    route: '/',
  },
  {
    id: faker.string.uuid(),
    iconUrl: '/assets/images/icons/fundraisers-icon.png',
    title: 'Fundraisers',
    route: '/fundraisers',
  },
  {
    id: faker.string.uuid(),
    title: 'Gaming Video',
    iconUrl: '/assets/images/icons/gaming-video-icon.png',
    route: '/gaming',
  },
  {
    id: faker.string.uuid(),
    title: 'Messenger',
    iconUrl: '/assets/images/icons/messenger-icon.png',
    route: '/messages',
  },
  {
    id: faker.string.uuid(),
    title: 'Messenger Kids',
    iconUrl: '/assets/images/icons/messenger-kids-icon.png',
    route: '/messenger_kids',
  },
  {
    id: faker.string.uuid(),
    title: 'Orders and payments',
    iconUrl: '/assets/images/icons/orders-icon.png',
    route: '/facebook_pay',
  },
  {
    id: faker.string.uuid(),
    title: 'Pages',
    iconUrl: '/assets/images/icons/pages-icon.png',
    route: '/pages',
  },
  {
    id: faker.string.uuid(),
    title: 'Play games',
    iconUrl: '/assets/images/icons/play-games-icon.png',
    route: '/gaming/play',
  },
  {
    id: faker.string.uuid(),
    title: 'Recent ad activity',
    iconUrl: '/assets/images/icons/recent-ad-icon.png',
    route: '/ads/activity',
  },
];

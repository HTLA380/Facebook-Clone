import { FaBookOpen, FaEdit, FaStar } from "react-icons/fa";
import { FaBoxArchive, FaClapperboard } from "react-icons/fa6";
import { RiFlag2Fill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { IoPeopleCircle } from "react-icons/io5";

export interface MenuPopoverData1Interface {
  group: string;
  elements: {
    title: string;
    description: string;
    iconUrl: string;
  }[];
}

export interface MenuPopoverData2Interface {
  icon: React.ReactNode;
  title: string;
}

export const menuPopoverData1: MenuPopoverData1Interface[] = [
  {
    group: "Social",
    elements: [
      {
        title: "Events",
        description: "Organize or find events and other things to do online and nearby.",
        iconUrl: "/assets/images/icons/events-icon.png",
      },
      {
        title: "Find friends",
        description: "Search for friends or people you my know.",
        iconUrl: "/assets/images/icons/find-friends-icon.png",
      },
      {
        title: "Groups",
        description: "Connect with people who share your interests.",
        iconUrl: "/assets/images/icons/groups-icon.png",
      },
      {
        title: "News Feed",
        description: "See relevant posts from people and Pages you follow.",
        iconUrl: "/assets/images/icons/news-feed-icon.png",
      },
      {
        title: "Feeds",
        description: "See the most recent posts from  your friends, groups, Pages and more.",
        iconUrl: "/assets/images/icons/feeds-icon.png",
      },
      {
        title: "Pages",
        description: "Discover and connect with business on Facebook.",
        iconUrl: "/assets/images/icons/pages-icon.png",
      },
    ],
  },
  {
    group: "Entertainment",
    elements: [
      {
        title: "Gaming Video",
        description: "Watch and connect with your favorite games and streamers.",
        iconUrl: "/assets/images/icons/gaming-video-icon.png",
      },
      {
        title: "Play games",
        description: "Play your favorite games.",
        iconUrl: "/assets/images/icons/play-games-icon.png",
      },
      {
        title: "Video",
        description: "A video destination personalized to your interests and connections.",
        iconUrl: "/assets/images/icons/video-icon.png",
      },
    ],
  },
  {
    group: "Shopping",
    elements: [
      {
        title: "Orders and payments",
        description: "A seamless, secure way to pay on the apps you already use.",
        iconUrl: "/assets/images/icons/orders-icon.png",
      },
    ],
  },
  {
    group: "Personal",
    elements: [
      {
        title: "Recent ad activity",
        description: "See all the ads you interacted with on Facebook.",
        iconUrl: "/assets/images/icons/recent-ad-icon.png",
      },
      {
        title: "Memories",
        description: "Browse your old photos, videos and posts  on Facebook.",
        iconUrl: "/assets/images/icons/memories-icon.png",
      },
      {
        title: "Saved",
        description: "Find posts, photos and videos that you saved for later.",
        iconUrl: "/assets/images/icons/saved-icon.png",
      },
    ],
  },
  {
    group: "Professional",
    elements: [
      {
        title: "Ads Manager",
        description: "Create, manage and track the performance of you ads.",
        iconUrl: "/assets/images/icons/ads-manager-icon.png",
      },
    ],
  },
  {
    group: "Community Resources",
    elements: [
      {
        title: "Climate Science Center",
        description: "Learn about climate change and its effects.",
        iconUrl: "/assets/images/icons/climate-icon.png",
      },
      {
        title: "Fundraisers",
        description: "Donate and raise money for nonprofits and  personal causes",
        iconUrl: "/assets/images/icons/fundraisers-icon.png",
      },
    ],
  },
  {
    group: "More from Meta",
    elements: [
      {
        title: "Messenger Kids",
        description: "Let kids message with close friends and family.",
        iconUrl: "/assets/images/icons/messenger-kids-icon.png",
      },
    ],
  },
];

export const menuPopoverData2:MenuPopoverData2Interface[] = [
  {
    icon: <FaEdit />,
    title: "Post",
  },
  {
    icon: <FaBookOpen />,
    title: "Story",
  },
  {
    icon: <FaClapperboard />,
    title: "Reel",
  },
  {
    icon: <FaStar />,
    title: "Life event",
  },
  {
    icon: <RiFlag2Fill />,
    title: "Page",
  },
  {
    icon: <HiSpeakerphone />,
    title: "Ad",
  },
  {
    icon: <IoPeopleCircle />,
    title: "Group",
  },
  {
    icon: <FaBoxArchive />,
    title: "Event",
  },
];

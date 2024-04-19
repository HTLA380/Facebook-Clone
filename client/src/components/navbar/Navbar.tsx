import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaFacebook, FaHome, FaUserFriends, FaVideo } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

import SearchBar from "./search/SearchBar";
import MenuPopover from "./menu-popover/MenuPopover";
import MessengerPopover from "./messenger-popover/MessengerPopover";
import NotificationsPopover from "./notifications-popover/NotificationsPopover";
import AccountPopover from "./account-popover/AccountPopover";

import { buttonVariants } from "../ui/button";
import DisplayTooltip from "../displayTooltip/DisplayTooltip";

// ==================================================

const Navbar = () => {
  // const location = usePathname();

  return (
    <header className="fixed inset-x-0 z-20 w-full px-4 py-2 bg-primary-foreground">
      <nav className="flex items-center justify-between gap-5">
        {/* ================================================== */}
        <div className="flex items-center h-full gap-3 w-full max-w-[360px]">
          <Link href={"/"}>
            <FaFacebook size={45} className="text-primary" />
          </Link>

          <SearchBar />
        </div>

        {/* ================================================== */}
        <div className="flex items-center justify-center flex-grow h-full max-w-[680px] gap-2 ">
          {/* {NAV_LINK_OPTIONS.map((eachOption) => {
            const isActive = eachOption.destination === location;
            const normalColor = "text-gray-500";
            const activeColor =
              "text-primary hover:text-primary before:absolute before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-primary hover:unset hover:bg-transparent";
            return (
              <RenderNavLink
                key={`nav-link-${eachOption.name}`}
                className={`relative w-full py-6 ${isActive ? activeColor : normalColor}`}
                destination={eachOption.destination}
                name={eachOption.name}>
                {eachOption.icon}
              </RenderNavLink>
            );
          })} */}
        </div>

        {/* ================================================== */}
        <div className="flex items-center justify-end h-full gap-2 w-full max-w-[360px]">
          <MenuPopover />

          <MessengerPopover />

          <NotificationsPopover />

          <AccountPopover />

          {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
        </div>
      </nav>
    </header>
  );
};

interface RenderNavLinkProps {
  destination: string;
  children: React.ReactNode;
  className?: string;
  name: string;
}

const RenderNavLink: React.FC<RenderNavLinkProps> = ({ destination, children, className, name }) => {
  return (
    <DisplayTooltip tooltipName={name}>
      <Link
        className={buttonVariants({
          variant: "ghost",
          className: className,
        })}
        href={destination}>
        {children}
      </Link>
    </DisplayTooltip>
  );
};

const NAV_LINK_OPTIONS = [
  { name: "home", destination: "/", icon: <FaHome size={25} /> },

  {
    name: "friends",
    destination: "/friends",
    icon: <FaUserFriends size={25} />,
  },

  { name: "watch", destination: "/watch", icon: <FaVideo size={25} /> },

  {
    name: "groups",
    destination: "/groups",
    icon: <IoPeopleCircleOutline size={25} />,
  },

  {
    name: "bookmarks",
    destination: "/bookmarks",
    icon: <IoIosMenu size={25} />,
  },
];

export default Navbar;

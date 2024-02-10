"use client";
import React from "react";
import {
  FaBell,
  FaFacebook,
  FaFacebookMessenger,
  FaHome,
  FaPlus,
  FaUser,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return;
  const location = usePathname();

  return (
    <header className="fixed inset-x-0 z-20 w-full px-4 py-2 bg-primary-foreground">
      <nav className="flex items-center justify-between gap-5">
        {/* left */}
        <div className="flex items-center h-full gap-3 w-full max-w-[360px]">
          <Link href={"/feed"}>
            <FaFacebook size={45} className="text-primary" />
          </Link>

          <div className="relative flex items-center ">
            <FiSearch className="absolute w-4 h-4 transform -translate-y-1/2 left-2 top-1/2 text-muted-foreground" />
            <Input placeholder="Your search..." className="pl-8 " />
          </div>
        </div>
        {/* middle */}
        <div className="flex items-center justify-center flex-grow h-full max-w-[680px] gap-2 ">
          {NAV_LINK_OPTIONS.map((eachOption) => {
            const isActive = eachOption.destination === location;
            const normalColor = "text-gray-500";
            const activeColor =
              "text-primary hover:text-primary before:absolute before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-primary hover:unset hover:bg-transparent";
            return (
              <RenderNavLink
                key={`nav-link-${eachOption.name}`}
                className={`relative w-full py-6 ${
                  isActive ? activeColor : normalColor
                }`}
                destination={eachOption.destination}>
                {eachOption.icon}
              </RenderNavLink>
            );
          })}
        </div>
        {/* right */}
        <div className="flex items-center justify-end h-full gap-2 w-full max-w-[360px]">
          <Popover>
            <PopoverTrigger className="p-3 text-xl rounded-full bg-accent">
              <BsFillGrid3X3GapFill />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="p-3 text-xl rounded-full bg-accent">
              <FaFacebookMessenger />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="p-3 text-xl rounded-full bg-accent">
              <FaBell />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};

const RenderNavLink = ({ destination, children, className }) => {
  return (
    <Link
      className={buttonVariants({
        variant: "ghost",
        className: className,
      })}
      href={destination}>
      {children}
    </Link>
  );
};

const NAV_LINK_OPTIONS = [
  { name: "feed", destination: "/feed", icon: <FaHome size={25} /> },

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

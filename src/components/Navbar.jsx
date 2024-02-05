"use client";
import React from "react";
import {
  FaBell,
  FaFacebook,
  FaFacebookMessenger,
  FaHome,
  FaPlus,
  FaSearch,
  FaUser,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return;
  return (
    <header className="p-2">
      <nav className="flex items-center justify-between gap-5 h-14">
        {/* left */}
        <div className="flex items-center w-40 h-full gap-3 bg-gray-200">
          <RenderNavLink destination={"/feed"}>
            <FaFacebook size={40} />
          </RenderNavLink>

          <FaSearch size={15} />
        </div>
        {/* middle */}
        <div className="flex items-center justify-between flex-grow h-full bg-gray-400">
          <RenderNavLink destination={"/feed"}>
            <FaHome size={25} />
          </RenderNavLink>
          <RenderNavLink destination={"/friends"}>
            <FaUserFriends size={25} />
          </RenderNavLink>
          <RenderNavLink destination={"watch"}>
            <FaVideo size={25} />
          </RenderNavLink>
          <RenderNavLink destination={"groups"}>
            <IoPeopleCircleOutline size={25} />
          </RenderNavLink>
          <RenderNavLink destination={"bookmarks"}>
            <IoIosMenu size={25} />
          </RenderNavLink>
        </div>
        {/* right */}
        <div className="flex items-center justify-between h-full bg-gray-200 w-52">
          <FaPlus />
          <FaFacebookMessenger />
          <FaBell />

          <FaUser />
        </div>
      </nav>
    </header>
  );
};

const RenderNavLink = ({ destination, children }) => {
  return <Link href={destination}>{children}</Link>;
};

export default Navbar;

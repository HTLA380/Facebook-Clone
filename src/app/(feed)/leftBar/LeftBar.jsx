import Link from "next/link";
import React from "react";
import {
  FaAngleDown,
  FaArrowDown,
  FaBookmark,
  FaClock,
  FaUser,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";

const LeftBar = () => {
  return (
    <div className="fixed left-0 w-full h-full px-2 pb-32 overflow-scroll bg-gray-300 top-20 max-w-[360px]">
      <div>
        <RenderLinkButton
          icon={<FaUser />}
          title={"Htet Aung Lin"}
          destination={"/profile"}
        />
        <RenderLinkButton
          icon={<FaUserFriends />}
          title={"Find friends"}
          destination={"friends"}
        />
        <RenderLinkButton
          icon={<IoPeopleCircleOutline />}
          title={"Groups"}
          destination={"/groups"}
        />
        <RenderLinkButton
          icon={<FaBookmark />}
          title={"Saved"}
          destination={"/saved"}
        />
        <RenderLinkButton
          icon={<FaClock />}
          title={"Memories"}
          destination={"/memories"}
        />
        <RenderLinkButton
          icon={<FaVideo />}
          title={"Video"}
          destination={"/watch"}
        />
        {/* see more button */}
        <button className="flex items-center w-full gap-3 px-4 py-3 bg-red-200 border border-black rounded-md">
          <FaAngleDown className="text-2xl" />
          <p>See More</p>
        </button>
      </div>

      {/* === Divider === */}
      <div className="w-full h-px my-5 bg-black " />

      {/* ========= shortcuts ======= */}
      <div>
        <RenderLinkButton
          icon={<div className="w-8 h-8 bg-gray-400 rounded-md" />}
          title={"group-1"}
          destination={"/group-1"}
        />
        <RenderLinkButton
          icon={<div className="w-8 h-8 bg-gray-200 rounded-md" />}
          title={"group-2"}
          destination={"/group-2"}
        />
        <RenderLinkButton
          icon={<div className="w-8 h-8 bg-gray-400 rounded-md" />}
          title={"group-3"}
          destination={"/group-3"}
        />
        <RenderLinkButton
          icon={<div className="w-8 h-8 bg-gray-200 rounded-md" />}
          title={"group-4"}
          destination={"/group-4"}
        />

        {/* see more button */}
        <button className="flex items-center w-full gap-3 px-4 py-3 bg-red-200 border border-black rounded-md">
          <FaAngleDown className="text-2xl" />
          <p>See More</p>
        </button>
      </div>
    </div>
  );
};

const RenderLinkButton = ({ icon, title, destination }) => {
  return (
    <Link
      href={destination}
      className="flex items-center w-full gap-3 px-4 py-3 text-2xl bg-red-200 border border-black rounded-md">
      {icon}
      <p className="text-base">{title}</p>
    </Link>
  );
};

export default LeftBar;

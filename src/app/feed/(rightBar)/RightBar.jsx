import Link from "next/link";
import React from "react";
import {
  FaAngleDown,
  FaArrowDown,
  FaBookmark,
  FaClock,
  FaUser,
  FaUserCircle,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";

const RightBar = () => {
  return (
    <div className="fixed right-0 w-full h-full px-2 pb-32 overflow-scroll bg-gray-300 top-20 max-w-96">
      {/* ===== contact ===== */}
      <div>
        <p>contact</p>
        {[...Array(15).keys()].map((number) => {
          return (
            <RenderLinkButton
              icon={<FaUserCircle />}
              title={`Htet Aung Lin ${number + 1}`}
              destination={`profile/${number}`}
            />
          );
        })}
      </div>

      {/* === Divider === */}
      <div className="w-full h-px my-5 bg-black " />

      {/* ========= group conversation ======= */}
      <div>
        <p>Group conversations</p>
        {[...Array(5).keys()].map((number) => {
          const bgColor =
            (number + 1) % 2 === 0 ? "bg-gray-200" : "bg-gray-400";

          return (
            <RenderLinkButton
              icon={<div className={`w-8 h-8  rounded-md ${bgColor}`} />}
              title={`group ${number + 1}`}
              destination={`/group${number + 1}`}
            />
          );
        })}
      </div>

      <div></div>
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

export default RightBar;

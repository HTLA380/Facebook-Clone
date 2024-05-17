import React from "react";
import { BiSolidMessage } from "react-icons/bi";
import { FaBell, FaUser, FaUsers } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { HiThumbUp } from "react-icons/hi";
import { IoIosShareAlt, IoIosTrendingUp } from "react-icons/io";
import { MdCake, MdEvent } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";

const iconMapping: { [key: string]: { icon: React.ReactNode; color: string } } = {
  Friend: {
    icon: <FaUser />,
    color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)",
  },
  Group: { icon: <FaUsers />, color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Like: { icon: <HiThumbUp />, color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Comment: { icon: <BiSolidMessage />, color: "linear-gradient(0deg, rgba(86,181,76,1) 0%, #78d36e 100%)" },
  Share: { icon: <IoIosShareAlt />, color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(108,170,240,1) 100%)" },
  Tag: { icon: <FaUser />, color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Event: { icon: <MdEvent />, color: "#2196f3" },
  Status: { icon: <IoIosTrendingUp />, color: "#2196f3" },
  Mention: { icon: <FiAtSign />, color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Message: {
    icon: <AiFillMessage />,
    color: "linear-gradient(0deg, rgba(86,181,76,1) 0%, #78d36e 100%)",
  },
  Birthday: { icon: <MdCake />, color: "linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)" },
  "Birthday Reminder": {
    icon: <MdCake />,
    color: "linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)",
  },
  Reminder: { icon: <FaBell />, color: "linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)" },
};

interface GenerateIconInterface {
  notificationType: string;
}

const GenerateIcon: React.FC<GenerateIconInterface> = ({ notificationType }) => {
  const { icon, color } = iconMapping[notificationType] || {};

  return (
    <span
      className={`block p-1.5 text-sm rounded-full text-gray-100`}
      style={{
        background: color,
      }}>
      {icon}
    </span>
  );
};

export default GenerateIcon;

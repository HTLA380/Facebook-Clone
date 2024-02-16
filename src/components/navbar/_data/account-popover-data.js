import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { TbMessageExclamation } from "react-icons/tb";
import { GiExitDoor } from "react-icons/gi";

export const accountPopoverData = [
  {
    icon: <IoSettingsSharp />,
    text: "settings & privacy",
    endIcon: <GoChevronRight />,
  },
  {
    icon: <BsFillQuestionCircleFill />,
    text: "help & support",
    endIcon: <GoChevronRight />,
  },
  {
    icon: <FaMoon />,
    text: "display & accessibility",
    endIcon: <GoChevronRight />,
  },
  {
    icon: <TbMessageExclamation />,
    text: "give feedback",
    endIcon: null,
  },
  {
    icon: <GiExitDoor />,
    text: "Log Out",
    endIcon: null,
  },
];

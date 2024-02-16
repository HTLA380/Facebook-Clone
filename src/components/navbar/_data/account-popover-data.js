import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { TbMessageExclamation } from "react-icons/tb";
import { GiExitDoor } from "react-icons/gi";
import { faker } from "@faker-js/faker";

export const accountPopoverData = [
  {
    id: faker.string.uuid(),
    icon: <IoSettingsSharp />,
    text: "settings & privacy",
    endIcon: <GoChevronRight />,
  },
  {
    id: faker.string.uuid(),
    icon: <BsFillQuestionCircleFill />,
    text: "help & support",
    endIcon: <GoChevronRight />,
  },
  {
    id: faker.string.uuid(),
    icon: <FaMoon />,
    text: "display & accessibility",
    endIcon: <GoChevronRight />,
  },
  {
    id: faker.string.uuid(),
    icon: <TbMessageExclamation />,
    text: "give feedback",
    endIcon: null,
  },
  {
    id: faker.string.uuid(),
    icon: <GiExitDoor />,
    text: "Log Out",
    endIcon: null,
  },
];

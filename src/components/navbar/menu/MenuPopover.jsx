import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const MenuPopover = () => {
  return (
    <Popover>
      <PopoverTrigger className="p-3 text-xl rounded-full bg-accent">
        <BsFillGrid3X3GapFill />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default MenuPopover;

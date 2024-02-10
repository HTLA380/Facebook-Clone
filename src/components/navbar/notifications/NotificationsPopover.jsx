import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger className="p-3 text-xl rounded-full bg-accent">
        <FaBell />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default NotificationsPopover;

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const MessengerPopover = () => {
  return (
    <Popover>
      <PopoverTrigger className="p-3 text-xl rounded-full bg-accent">
        <FaFacebookMessenger />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default MessengerPopover;

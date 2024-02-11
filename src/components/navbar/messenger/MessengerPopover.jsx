import DisplayTooltip from "@/components/DisplayTooltip";
import { Button } from "@/components/ui/button";
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
      <DisplayTooltip tooltipName="Messenger">
        <PopoverTrigger asChild>
          <Button
            variant={"accent"}
            className={"text-xl p-0 w-10 h-10 rounded-full"}>
            <FaFacebookMessenger />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      <PopoverContent className="z-50">....</PopoverContent>
    </Popover>
  );
};

export default MessengerPopover;

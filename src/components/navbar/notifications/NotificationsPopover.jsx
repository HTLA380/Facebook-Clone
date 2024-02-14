import DisplayTooltip from "@/components/DisplayTooltip";
import { Button } from "@/components/ui/button";
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
      <DisplayTooltip tooltipName="Notifications">
        <PopoverTrigger asChild>
          <Button
            variant={"accent"}
            className={"text-xl p-0 w-10 h-10 rounded-full"}>
            <FaBell />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      <PopoverContent>....</PopoverContent>
    </Popover>
  );
};

export default NotificationsPopover;

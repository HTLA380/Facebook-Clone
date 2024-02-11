import DisplayTooltip from "@/components/DisplayTooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

const AccountPopover = () => {
  return (
    <Popover>
      <DisplayTooltip tooltipName="Account">
        <PopoverTrigger asChild>
          <Button variant={"icon"} className="p-0">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      <PopoverContent className="z-50">....</PopoverContent>
    </Popover>
    // <Popover>
    //   <PopoverTrigger>
    //     <Avatar>
    //       <AvatarImage src="https://github.com/shadcn.png" />
    //       <AvatarFallback>CN</AvatarFallback>
    //     </Avatar>
    //   </PopoverTrigger>
    //   <PopoverContent>Place content for the popover here.</PopoverContent>
    // </Popover>
  );
};

export default AccountPopover;

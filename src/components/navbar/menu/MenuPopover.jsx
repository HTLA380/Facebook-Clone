import DisplayTooltip from "@/components/DisplayTooltip";
import { Button } from "@/components/ui/button";

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
      <DisplayTooltip tooltipName="Menu">
        <PopoverTrigger asChild>
          <Button
            variant={"accent"}
            className={"text-xl p-0 w-10 h-10 rounded-full"}>
            <BsFillGrid3X3GapFill />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      <PopoverContent className="z-50">....</PopoverContent>
    </Popover>
  );
};

export default MenuPopover;

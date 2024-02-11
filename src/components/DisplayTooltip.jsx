import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const DisplayTooltip = ({ children, tooltipName }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="border-0">
        <p>{tooltipName}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default DisplayTooltip;

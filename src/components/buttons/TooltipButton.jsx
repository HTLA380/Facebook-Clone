import React from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const TooltipButton = ({
  children,
  className,
  tooltipName,
  side = "bottom",
  align = "end",
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" className={className} size="icon">
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side={side} align={align} className="border-0">
        <p>{tooltipName}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipButton;

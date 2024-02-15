import DisplayTooltip from "@/components/DisplayTooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "next-auth/react";
import React from "react";

const AccountPopover = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <Popover>
      <DisplayTooltip tooltipName="Account">
        <PopoverTrigger asChild>
          <Button variant={"icon"} className="p-0">
            <Avatar>
              <AvatarImage src={session?.user?.image} />
              <AvatarFallback>{session?.user?.name}</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      <PopoverContent className="z-50">....</PopoverContent>
    </Popover>
  );
};

export default AccountPopover;

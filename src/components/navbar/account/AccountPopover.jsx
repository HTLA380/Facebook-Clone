import DisplayTooltip from "@/components/DisplayTooltip";
import LinkButton from "@/components/buttons/LinkButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { accountPopoverData } from "../data/account-popover-data";

const AccountPopover = () => {
  const { data: session } = useSession();

  const renderPopoverContent = (
    <PopoverContent className="w-[22.5rem] mr-6 px-4">
      <Card className="flex flex-col items-center w-full gap-1 p-1 mb-2 shadow-md">
        <LinkButton destination={"/me"} className="w-full px-2 py-2 rounded-md">
          <Avatar>
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
          <p className="font-semibold text-accent-foreground">Htet Aung Lin</p>
        </LinkButton>

        <Separator />
        <Button
          variant="ghost"
          className="justify-start w-full text-sm font-semibold text-primary hover:text-primary"
          size="sm">
          See all profiles
        </Button>
      </Card>

      {accountPopoverData.map((data) => {
        return (
          <Button variant="ghost" className="w-full gap-2 py-6">
            <span className="p-1.5 text-2xl rounded-full bg-accent">
              {data.icon}
            </span>
            <p className="flex-grow font-semibold capitalize text-start">
              {data.text}
            </p>
            {data.endIcon && (
              <span className="p-1.5 text-2xl rounded-full">
                {data.endIcon}
              </span>
            )}
          </Button>
        );
      })}
    </PopoverContent>
  );

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
      {renderPopoverContent}
    </Popover>
  );
};

export default AccountPopover;

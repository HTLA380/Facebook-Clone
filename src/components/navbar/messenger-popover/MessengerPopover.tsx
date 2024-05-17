import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiDragMove2Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";

import { faker } from "@faker-js/faker";
import { messengerPopoverData, MessengerPopoverDataInterface } from "../_data/messenger-popover-data";

import DisplayTooltip from "@/components/displayTooltip/DisplayTooltip";
import SearchField from "@/components/inputField/SearchField";
import TooltipButton from "@/components/buttons/TooltipButton";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { fToNow } from "@/utils/formatDate";

// ==========================================================

const MessengerPopover = () => {
  const renderPopoverContent = (
    <PopoverContent className="relative p-0 mr-10 w-[22.5rem] h-[90vh]">
      <div className="h-full pt-4 overflow-y-scroll pb-14">
        <header className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-2xl font-bold">Chats</h3>

          <div>
            {MESSENGER_OPTION_ICONS.map((data) => {
              return (
                <TooltipButton
                  key={data.id}
                  className={"text-2xl text-muted-foreground rounded-full"}
                  tooltipName={data.tooltipName}>
                  {data.icon}
                </TooltipButton>
              );
            })}
          </div>
        </header>

        <div className="px-4 mb-4">
          <SearchField />
        </div>

        <div className="flex items-center gap-3 px-4 mb-4">
          <Button variant="active" className="rounded-full" size="sm">
            Inbox
          </Button>

          <Button variant="ghost" className="rounded-full" size="sm">
            Communities
          </Button>
        </div>

        <div className="px-2">
          {messengerPopoverData.map((data) => {
            return <RenderMessageButton key={data.id} {...data} />;
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-12 bg-white border-t border-t-border">
        <Button variant="link">See all in messenger</Button>
      </div>
    </PopoverContent>
  );

  return (
    <Popover>
      <DisplayTooltip tooltipName="Messenger">
        <PopoverTrigger asChild>
          <Button variant={"accent"} className={"text-xl p-0 w-10 h-10 rounded-full"}>
            <FaFacebookMessenger />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      {renderPopoverContent}
    </Popover>
  );
};

const RenderMessageButton: React.FC<MessengerPopoverDataInterface> = ({
  avatarUrl,
  userName,
  message,
  isUserLastMessage,
  isSeenLastMessage,
  isOnLine,
  date,
}) => {
  return (
    <Button
      className="relative flex items-center justify-start w-full gap-3 px-2 overflow-hidden h-fit"
      variant="ghost">
      <div className="relative">
        <Avatar className="w-14 h-14">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>

        {/* onCline status */}
        {isOnLine && (
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border-2 rounded-full border-secondary" />
        )}
      </div>

      <div className="flex-grow text-left">
        <h5 className="font-semibold">{userName}</h5>

        <div className="flex items-start justify-start gap-1 text-xs w-full max-w-[13.5rem] text-muted-foreground font-normal">
          <p className="truncate overflow-ellipsis">
            {isUserLastMessage && "You: "}
            {message}
          </p>
          <span>{fToNow(date)}</span>
        </div>
      </div>

      {isUserLastMessage && isSeenLastMessage && (
        <Avatar className="absolute w-5 h-5 right-2 top-6">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
      )}
    </Button>
  );
};

// =============================================

const MESSENGER_OPTION_ICONS = [
  {
    id: faker.string.uuid(),
    icon: <BsThreeDots />,
    tooltipName: "Options",
  },
  {
    id: faker.string.uuid(),

    icon: <RiDragMove2Line className="rotate-45" />,
    tooltipName: "See all in Messenger",
  },
  {
    id: faker.string.uuid(),

    icon: <BiSolidEdit />,
    tooltipName: "New message",
  },
];

export default MessengerPopover;

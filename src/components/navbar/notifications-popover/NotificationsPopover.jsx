import DisplayTooltip from "@/components/DisplayTooltip";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBell, FaUser } from "react-icons/fa";
import { NotificationPopoverData } from "../_data/notification-popover-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fToNow } from "@/util/formatDate";

const NotificationsPopover = () => {
  const renderPopoverContent = (
    <PopoverContent className="w-[22.5rem] mr-10 px-2 h-[90vh] overflow-y-scroll rounded_scrollbar">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-2xl font-bold ">Notifications</h3>
        <Button
          variant="ghost"
          size="icon"
          className="text-xl rounded-full text-muted-foreground">
          <BsThreeDots />
        </Button>
      </div>

      <div className="flex items-center gap-1 px-2">
        <Button variant="active" className="rounded-full" size="icon">
          All
        </Button>
        <Button variant="ghost" className="rounded-full">
          Unread
        </Button>
      </div>

      <div className="flex items-center justify-between px-2">
        <p className="font-semibold">Earlier</p>
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "text-primary hover:text-primary text-sm",
            size: "sm",
          })}
          href={"/notifications"}>
          See All
        </Link>
      </div>

      {/* ==================== notifications ==================== */}
      <div>
        {NotificationPopoverData.map((data) => {
          return <NotificationButton key={data.id} data={data} />;
        })}
      </div>
    </PopoverContent>
  );

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
      {renderPopoverContent}
    </Popover>
  );
};

export default NotificationsPopover;

const NotificationButton = ({ data }) => {
  const { avatarUrl, userName, notificationAction, isUnread, date } = data;

  const iconBgColor = `bg-${notificationAction?.color}`;

  return (
    <Button
      className="relative flex items-center justify-start w-full gap-3 px-2 h-fit"
      variant="ghost">
      <div className="relative">
        <Avatar className="w-14 h-14">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>

        <span
          className={`absolute p-1.5 text-sm rounded-full -right-1.5 -bottom-1.5 text-gray-100 ${iconBgColor}`}>
          {notificationAction.icon}
        </span>
      </div>

      <div className="w-[70%] font-normal text-left text-accent-foreground">
        <p className="whitespace-pre-wrap text-sm/5">
          <span className="font-[500]">{userName}</span>{" "}
          {notificationAction.description}
        </p>
        <span className="text-xs">{fToNow(date)}</span>
      </div>

      {isUnread && (
        <div className="absolute w-3 h-3 rounded-full bg-primary right-3 top-5" />
      )}
    </Button>
  );
};

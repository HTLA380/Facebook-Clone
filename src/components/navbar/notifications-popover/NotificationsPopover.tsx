'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { NotificationsInterface } from '../_data/notification-popover-data';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';
import { Button, buttonVariants } from '@/components/ui/button';
import GenerateIcon from './GenerateIcon';

import { BsThreeDots } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { fDate } from '@/utils/formatDate';
import { truncateString } from '@/utils/utils';

// ==========================================================================

interface NotificationsPopoverInterface {
  notificationsData: NotificationsInterface[];
}

const NotificationsPopover: React.FC<NotificationsPopoverInterface> = ({ notificationsData }) => {
  const [notifications, setNotifications] = useState<NotificationsInterface[]>([]);
  const [showUnread, setShowUnread] = useState<boolean>(false);

  useEffect(() => {
    setNotifications(notificationsData);
  }, []);

  const filteredNotifications = showUnread
    ? notifications.filter((notification) => notification.isUnread)
    : notifications;

  const renderPopoverContent = (
    <PopoverContent className='w-[22.5rem] mr-10 px-2 h-[90vh] overflow-y-scroll rounded_scrollbar'>
      <div className='flex items-center justify-between px-2'>
        <h3 className='text-2xl font-bold '>Notifications</h3>
        <Button variant='ghost' size='icon' className='text-xl rounded-full text-muted-foreground'>
          <BsThreeDots />
        </Button>
      </div>

      <div className='flex items-center gap-1 px-2'>
        <Button
          onClick={() => setShowUnread(false)}
          variant={!showUnread ? 'active' : 'ghost'}
          className='rounded-full'
          size='icon'>
          All
        </Button>
        <Button onClick={() => setShowUnread(true)} variant={showUnread ? 'active' : 'ghost'} className='rounded-full'>
          Unread
        </Button>
      </div>

      <div className='flex items-center justify-between px-2'>
        <p className='font-semibold'>Earlier</p>
        <Link
          className={buttonVariants({
            variant: 'ghost',
            className: 'text-primary hover:text-primary text-sm',
            size: 'sm',
          })}
          href={'/notifications'}>
          See All
        </Link>
      </div>

      {/* ==================== notifications ==================== */}
      <div>
        {filteredNotifications?.map((data: NotificationsInterface) => {
          return <NotificationButton key={data.id} {...data} />;
        })}
      </div>
    </PopoverContent>
  );

  return (
    <Popover>
      <DisplayTooltip tooltipName='Notifications'>
        <PopoverTrigger asChild>
          <Button variant={'accent'} className={'text-xl p-0 w-10 h-10 rounded-full'}>
            <FaBell />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      {renderPopoverContent}
    </Popover>
  );
};

export default NotificationsPopover;

const NotificationButton: React.FC<NotificationsInterface> = ({ name, description, createdAt, isUnread }) => {
  const randomNumber = Math.floor(Math.random() * 24) + 1;

  const avatarUrl = `/assets/images/avatars/avatar_${randomNumber}.jpg`;

  return (
    <Button className='relative flex items-center justify-start w-full gap-3 px-2 h-fit' variant='ghost'>
      <div className='relative'>
        <Avatar className='w-14 h-14'>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{'Image Fallback Name'}</AvatarFallback>
        </Avatar>

        <div className={`absolute -right-1.5 -bottom-1.5`}>
          <GenerateIcon />
        </div>
      </div>

      <div className='w-[70%] font-normal text-left text-accent-foreground'>
        <p className='whitespace-pre-wrap text-sm/5 font-medium'>
          {name} <span className='font-normal text-xs ml-1'>{truncateString(description, 50)}</span>
        </p>
        <span className='text-xs'>{fDate(createdAt)}</span>
      </div>

      {isUnread && <div className='absolute w-2.5 h-2.5 rounded-full bg-primary right-3 top-5' />}
    </Button>
  );
};

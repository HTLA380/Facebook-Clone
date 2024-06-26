import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useMessages, MessagesInterface } from '@/hooks/use-messages';

import { BsThreeDots } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { RiDragMove2Line } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';

import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';
import SearchField from '@/components/inputField/SearchField';
import TooltipButton from '@/components/buttons/TooltipButton';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import { fToNow } from '@/utils/formatDate';

// ==========================================================

const MessengerPopover = () => {
  const { data: messagesData, isLoading } = useMessages();

  const renderPopoverContent = (
    <PopoverContent className='relative p-0 mr-10 w-full max-w-360px h-90vh'>
      <div className='h-full pt-4 overflow-y-scroll pb-14'>
        <header className='flex items-center justify-between px-4 mb-4'>
          <h3 className='text-2xl font-bold'>Chats</h3>

          <div>
            {MESSENGER_OPTION_ICONS.map((data) => {
              return (
                <TooltipButton
                  key={data.id}
                  className={'text-2xl text-muted-foreground rounded-full'}
                  tooltipName={data.tooltipName}>
                  {data.icon}
                </TooltipButton>
              );
            })}
          </div>
        </header>

        <div className='px-4 mb-4'>
          <SearchField />
        </div>

        <div className='flex items-center gap-3 px-4 mb-4'>
          <Button variant='active' className='rounded-full' size='sm'>
            Inbox
          </Button>

          <Button variant='ghost' className='rounded-full' size='sm'>
            Communities
          </Button>
        </div>

        <div className='px-2'>
          {isLoading && (
            <div className='flex items-center justify-center pt-40'>
              <ClipLoader
                speedMultiplier={0.5}
                color={'#020817'}
                size={50}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            </div>
          )}

          {messagesData?.map((data) => {
            return <RenderMessageButton key={data.id} {...data} />;
          })}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 flex items-center justify-center w-full h-12 bg-white border-t border-t-border'>
        <Button variant='link'>See all in messenger</Button>
      </div>
    </PopoverContent>
  );

  return (
    <Popover>
      <DisplayTooltip tooltipName='Messenger'>
        <PopoverTrigger asChild>
          <Button variant={'accent'} className={'text-xl p-0 w-10 h-10 rounded-full'}>
            <FaFacebookMessenger />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      {renderPopoverContent}
    </Popover>
  );
};

const RenderMessageButton: React.FC<MessagesInterface> = ({
  name,
  avatar,
  description,
  createdAt,
  isLastMessage,
  isSeenLastMessage,
  isActive,
}) => {
  return (
    <Button
      className='relative flex items-center justify-start w-full gap-3 px-2 overflow-hidden h-fit'
      variant='ghost'>
      <div className='relative'>
        <Avatar className='w-14 h-14'>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        {/* onCline status */}
        {isActive && (
          <div className='absolute bottom-0 right-0 w-4 h-4 bg-green-600 border-2 rounded-full border-secondary' />
        )}
      </div>

      <div className='flex-grow text-left'>
        <h5 className='font-semibold'>{name}</h5>

        <div className='flex items-start justify-start gap-1 text-xs w-full max-w-[13.5rem] text-muted-foreground font-normal'>
          <p className='truncate overflow-ellipsis'>
            {isLastMessage && 'You: '}
            {description}
          </p>
          <span>{fToNow(createdAt, true)}</span>
        </div>
      </div>

      {isLastMessage && isSeenLastMessage && (
        <Avatar className='absolute w-5 h-5 right-2 top-6'>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
    </Button>
  );
};

// =============================================

const MESSENGER_OPTION_ICONS = [
  {
    id: 1,
    icon: <BsThreeDots />,
    tooltipName: 'Options',
  },
  {
    id: 2,

    icon: <RiDragMove2Line className='rotate-45' />,
    tooltipName: 'See all in Messenger',
  },
  {
    id: 3,

    icon: <BiSolidEdit />,
    tooltipName: 'New message',
  },
];

export default MessengerPopover;

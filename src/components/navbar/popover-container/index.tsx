'use client';

import React from 'react';
import { type Session } from 'next-auth';
import { useMediaQuery } from 'react-responsive';

import CreatePopover from './create-popover';
import MessengerPopover from './messenger-popover';
import NotificationsPopover from './notifications-popover';
import AccountPopover from './account-popover';
import MenuPopover from './menu-popover';

interface PopoverContainerProps {
  session: Session;
}

// ==================================================

const PopoverContainer: React.FC<PopoverContainerProps> = ({ session }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <div className='flex items-center justify-end h-full gap-2 max-w-360px relative'>
      {isDesktop ? <MenuPopover /> : <CreatePopover />}
      <MessengerPopover />
      <NotificationsPopover />
      <AccountPopover image={session.user.picture} name={session.user.name} />

      {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
    </div>
  );
};

export default PopoverContainer;

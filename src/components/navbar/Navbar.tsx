import React from 'react';

import Link from 'next/link';

import { FaFacebook } from 'react-icons/fa';

import SearchBar from './search/SearchBar';
import MenuPopover from './menu-popover/MenuPopover';
import MessengerPopover from './messenger-popover/MessengerPopover';
import NotificationsPopover from './notifications-popover/NotificationsPopover';
import AccountPopover from './account-popover/AccountPopover';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import NavLinkItems from './nav-link-items/NavLinkItems';

// ==================================================

const Navbar = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return null;
  }

  return (
    <header className='fixed inset-x-0 z-20 w-full px-4 py-2 bg-primary-foreground'>
      <nav className='flex items-center justify-between gap-5'>
        {/* ================================================== */}
        <div className='flex items-center h-full gap-3 w-full max-w-[360px]'>
          <Link href={'/'}>
            <FaFacebook size={45} className='text-primary' />
          </Link>

          <SearchBar />
        </div>

        {/* ================================================== */}
        <NavLinkItems />

        {/* ================================================== */}
        <div className='flex items-center justify-end h-full gap-2 w-full max-w-[360px]'>
          <MenuPopover />

          <MessengerPopover />

          <NotificationsPopover />

          <AccountPopover image={session.user.picture} name={session.user.name} />

          {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

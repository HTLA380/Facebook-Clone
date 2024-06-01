import React from 'react';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

import SearchBarContainer from './search-bar-container';
import NavLinkItemsContainer from './nav-link-items-container';
import PopoverContainer from './popover-container';

// ==================================================

const Navbar = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return null;
  }

  return (
    <header className='fixed inset-x-0 z-20 w-full px-4 py-2 bg-primary-foreground'>
      <nav className='flex items-center justify-between gap-5'>
        <SearchBarContainer />
        <NavLinkItemsContainer />
        <PopoverContainer session={session} />
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';

import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

import { FaFacebook } from 'react-icons/fa';

import SearchBar from './search/SearchBar';
import NavLinkItems from './nav-link-items';
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
        <div className='flex items-center h-full gap-3 w-full max-w-[360px]'>
          <Link href={'/'}>
            <FaFacebook size={45} className='text-primary' />
          </Link>
          <SearchBar />
        </div>
        <NavLinkItems />
        <PopoverContainer session={session} />
      </nav>
    </header>
  );
};

export default Navbar;

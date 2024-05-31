'use client';

import SearchField from '@/components/inputField/SearchField';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

// ======================================================================

const SearchBarContainer = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <div className='flex items-center h-full gap-3 max-w-200px xl:max-w-360px'>
      <Link href={'/'}>
        <FaFacebook size={45} className='text-primary' />
      </Link>
      {isDesktop ? (
        <SearchField />
      ) : (
        <Button variant={'accent'} size={'icon'} className='rounded-full'>
          <FiSearch className='w-4 h-4 text-muted-foreground' />
        </Button>
      )}
    </div>
  );
};

export default SearchBarContainer;

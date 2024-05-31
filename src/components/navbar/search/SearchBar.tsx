'use client';

import SearchField from '@/components/inputField/SearchField';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

const SearchBar = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  if (isDesktop) {
    return <SearchField />;
  }

  return (
    <Button variant={'accent'} size={'icon'} className='rounded-full'>
      <FiSearch className='w-4 h-4 text-muted-foreground' />
    </Button>
  );
};

export default SearchBar;

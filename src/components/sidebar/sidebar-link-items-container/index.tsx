'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SIDEBAR_DATA } from '../_data/sidebar-data';
import ExpendButton from '@/components/buttons/ExpendButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LinkButton from '@/components/buttons/LinkButton';

interface SidebarLinkItemsContainerProps {
  name?: string | null;
  image?: string | null;
}

const SidebarLinkItemsContainer: React.FC<SidebarLinkItemsContainerProps> = ({ name, image }) => {
  const [isExpended, setIsExpended] = useState<boolean>(false);

  const data = isExpended ? SIDEBAR_DATA : SIDEBAR_DATA.slice(0, 5);

  return (
    <React.Fragment>
      <Link
        href={'/me'}
        className={'flex w-full items-center gap-3 px-2 py-1.5 rounded-md cursor-pointer hover:bg-accent'}>
        <Avatar className='w-8 h-8'>
          <AvatarImage src={image || 'https://placehold.co/25x25'} />
          <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className='text-sm'>{name}</p>
      </Link>

      {data.map((element) => (
        <LinkButton
          key={element.id}
          title={element.title}
          imageUrl={element.iconUrl}
          imageAlt={element.title}
          route={element.route}
        />
      ))}
      <ExpendButton isActive={isExpended} onClick={() => setIsExpended((prev) => !prev)} />
    </React.Fragment>
  );
};

export default SidebarLinkItemsContainer;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import ExpendButton from '../buttons/ExpendButton';
import { SIDEBAR_DATA } from './_data/sidebar-data';
import { Separator } from '../ui/separator';

const Sidebar = () => {
  const [isExpended, setIsExpended] = useState<boolean>(false);

  const data = isExpended ? SIDEBAR_DATA : SIDEBAR_DATA.slice(0, 5);

  return (
    <aside className='w-full max-w-360px h-screen fixed top-0 pt-20 left-0 px-3'>
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
      <Separator className='my-4' />
    </aside>
  );
};

interface LinkButtonProps {
  title: string;
  route: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, route, imageUrl, imageAlt, className }) => {
  return (
    <Link
      href={route}
      className={cn('flex w-full items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-accent', className)}>
      <Image width={20} height={20} src={imageUrl} alt={imageAlt} className='w-9' />

      <p className='text-sm/5'>{title}</p>
    </Link>
  );
};

export default Sidebar;

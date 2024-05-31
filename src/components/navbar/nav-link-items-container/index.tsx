'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUserFriends, FaVideo } from 'react-icons/fa';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { CgGames } from 'react-icons/cg';

import { buttonVariants } from '@/components/ui/button';
import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';

// ======================================================================

const NAV_LINK_OPTIONS = [
  { name: 'home', destination: '/', icon: <FaHome size={25} /> },

  {
    name: 'friends',
    destination: '/friends',
    icon: <FaUserFriends size={25} />,
  },

  { name: 'watch', destination: '/watch', icon: <FaVideo size={25} /> },

  {
    name: 'groups',
    destination: '/groups',
    icon: <IoPeopleCircleOutline size={25} />,
  },

  {
    name: 'bookmarks',
    destination: '/bookmarks',
    icon: <CgGames size={25} />,
  },
];

const NavLinkItemsContainer = () => {
  const location = usePathname();

  return (
    <div className='w-full flex items-center justify-center flex-grow h-full max-w-[450px] xl:max-w-[680px] gap-2 '>
      {NAV_LINK_OPTIONS.map((eachOption) => {
        const isActive = eachOption.destination === location;
        const normalColor = 'text-gray-500';
        const activeColor =
          'text-primary hover:text-primary before:absolute before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-primary hover:unset hover:bg-transparent';
        return (
          <RenderNavLink
            key={`nav-link-${eachOption.name}`}
            className={`relative w-full py-6 ${isActive ? activeColor : normalColor}`}
            destination={eachOption.destination}
            name={eachOption.name}>
            {eachOption.icon}
          </RenderNavLink>
        );
      })}
    </div>
  );
};

interface RenderNavLinkProps {
  destination: string;
  children: React.ReactNode;
  className?: string;
  name: string;
}

const RenderNavLink: React.FC<RenderNavLinkProps> = ({ destination, children, className, name }) => {
  return (
    <DisplayTooltip tooltipName={name}>
      <Link
        className={buttonVariants({
          variant: 'ghost',
          className: className,
        })}
        href={destination}>
        {children}
      </Link>
    </DisplayTooltip>
  );
};

export default NavLinkItemsContainer;

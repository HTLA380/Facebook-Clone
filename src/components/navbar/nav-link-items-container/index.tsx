'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUserFriends, FaVideo } from 'react-icons/fa';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { CgGames } from 'react-icons/cg';

import { buttonVariants } from '@/components/ui/button';
import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';
import { AiOutlineMenu } from 'react-icons/ai';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-mediaquery';

// ======================================================================

type NavLinkOptionType = {
  name: string;
  route: string;
  icon: React.ReactNode;
};

const NAV_LINK_OPTIONS: NavLinkOptionType[] = [
  { name: 'home', route: '/', icon: <FaHome size={25} /> },

  {
    name: 'friends',
    route: '/friends',
    icon: <FaUserFriends size={25} />,
  },

  { name: 'watch', route: '/watch', icon: <FaVideo size={25} /> },

  {
    name: 'groups',
    route: '/groups',
    icon: <IoPeopleCircleOutline size={25} />,
  },
];

const NavLinkItemsContainer: React.FC = () => {
  const location = usePathname();
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const isLargeScreen = useMediaQuery('(min-width: 680px)');

  const normalColor = 'text-gray-500';
  const activeColor =
    'text-primary hover:text-primary before:absolute before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-primary hover:unset hover:bg-transparent';
  return (
    <div className='w-full flex items-center flex-grow h-full max-w-450px lg:max-w-680px gap-2 '>
      {isLargeScreen &&
        NAV_LINK_OPTIONS.map((eachOption, index) => {
          const isActive = eachOption.route === location;

          return (
            <RenderNavLink
              key={index}
              className={cn('relative w-full py-6', isActive ? activeColor : normalColor)}
              route={eachOption.route}
              name={eachOption.name}>
              {eachOption.icon}
            </RenderNavLink>
          );
        })}

      <RenderNavLink
        className={cn(
          'relative w-full py-6 max-w-24 md:max-w-none',
          location === '/bookmarks' ? activeColor : normalColor
        )}
        route={'/bookmarks'}
        name={'bookmarks'}>
        {isDesktop ? <CgGames size={25} /> : <AiOutlineMenu size={25} />}
      </RenderNavLink>
    </div>
  );
};

interface RenderNavLinkProps {
  route: string;
  children: React.ReactNode;
  className?: string;
  name: string;
}

const RenderNavLink: React.FC<RenderNavLinkProps> = ({ route, children, className, name }) => {
  return (
    <DisplayTooltip tooltipName={name}>
      <Link
        className={buttonVariants({
          variant: 'ghost',
          className: className,
        })}
        href={route}>
        {children}
      </Link>
    </DisplayTooltip>
  );
};

export default NavLinkItemsContainer;

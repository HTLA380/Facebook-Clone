import React from 'react';
import SidebarLinkItemsContainer from './sidebar-link-items-container';
import { Separator } from '../ui/separator';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const Sidebar = async () => {
  const session = await getServerSession(options);

  return (
    <aside className='overflow-auto rounded_scrollbar w-full max-w-360px h-screen fixed top-0 pt-20 left-0 px-3'>
      <SidebarLinkItemsContainer name={session?.user?.name} image={session?.user?.picture} />
      <Separator className='my-4' />
    </aside>
  );
};

export default Sidebar;

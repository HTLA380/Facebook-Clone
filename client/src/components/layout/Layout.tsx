'use client';

import React from 'react';
import Navbar from '../navbar/Navbar';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const excludedRoutes = ['/login', '/register'];

  console.log(pathname);

  if (excludedRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

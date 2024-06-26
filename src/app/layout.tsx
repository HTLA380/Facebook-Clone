import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import Sidebar from '@/components/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Facebook Clone',
  description: 'Facebook Clone using Nextjs, ShadCN',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReactQueryProvider>
        <TooltipProvider>
          <body className={inter.className}>
            <Navbar />
            <Sidebar />
            {children}
          </body>
        </TooltipProvider>
      </ReactQueryProvider>
    </html>
  );
}

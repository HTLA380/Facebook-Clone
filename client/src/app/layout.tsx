import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facebook Clone",
  description: "Facebook Clone using Nextjs, ShadCN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </TooltipProvider>
    </html>
  );
}

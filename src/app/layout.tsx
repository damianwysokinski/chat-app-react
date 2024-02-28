import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { getUsers } from '@/utils/dataUtils';

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUserId = 1;
  const users = await getUsers();

  const filteredUsers = users.filter(user => user.id !== loggedInUserId);

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

'use client';

import { FC, ReactNode, useState } from 'react';
import { getChatrooms, Chatroom } from '@/utils/dataUtils';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';

interface ChatLayoutProps {
  children?: ReactNode;
}

const ChatLayout: FC<ChatLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const chatRooms: Chatroom[] = getChatrooms();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="bg-gray-50 antialiased dark:bg-gray-900">
        <Navbar toggleDrawer={toggleDrawer} />
        <Sidebar chatRooms={chatRooms} isDrawerOpen={isDrawerOpen} />

        <main className="min-h-screen p-4 pt-40 md:ml-80">
          <div className="flex flex-col justify-between">{children}</div>
        </main>
      </div>
    </>
  );
};

export default ChatLayout;

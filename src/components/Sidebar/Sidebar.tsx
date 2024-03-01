'use client';

import { FC, useState } from 'react';
import { Chatroom } from '@/utils/dataUtils';
import SidebarSearchBar from './SidebarSearchBar';
import SidebarUserList from './SidebarUserList';

interface SidebarProps {
  chatRooms: Chatroom[];
  isDrawerOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ chatRooms, isDrawerOpen }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredUsers = chatRooms.filter((chatRoom) =>
    chatRoom.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-80 pt-14 transition-transform ${isDrawerOpen ? '' : '-translate-x-full'} border-r border-gray-200 bg-white md:translate-x-0 dark:border-gray-700 dark:bg-gray-800`}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="h-full overflow-y-auto bg-white px-2.5 py-5 dark:bg-gray-800">
        <div className="mb-2 text-2xl font-bold">Messages</div>
        <SidebarSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SidebarUserList users={filteredUsers} />
      </div>
    </aside>
  );
};

export default Sidebar;

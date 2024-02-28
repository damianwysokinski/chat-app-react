"use client";

import { FC, useState } from 'react';
import { User } from '@/utils/dataUtils';
import SidebarSearchBar from './SidebarSearchBar';
import SidebarUserList from './SidebarUserList';

interface SidebarProps {
    users: User[];
    isDrawerOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ users, isDrawerOpen }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredUsers = users?.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <aside
        className={`fixed top-0 left-0 z-40 w-80 h-screen pt-14 transition-transform ${isDrawerOpen ? '' : '-translate-x-full'} bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-2 h-full bg-white dark:bg-gray-800">
          <SidebarSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SidebarUserList users={filteredUsers} />
        </div>
      </aside>
  );
}

export default Sidebar;
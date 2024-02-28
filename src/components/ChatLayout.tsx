"use client";

import { FC, ReactNode, useState } from 'react'
import { getUsers } from '@/utils/dataUtils';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

interface ChatLayoutProps {
    children?: ReactNode;
}

const ChatLayout: FC<ChatLayoutProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const loggedInUserId = 1;
    const users = getUsers();
    const filteredUsers = users.filter(user => user.id !== loggedInUserId);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                <Navbar toggleDrawer={toggleDrawer} />
                <Sidebar users={filteredUsers} isDrawerOpen={isDrawerOpen} />

                <main className="p-4 md:ml-80 min-h-screen pt-20">
                <div className="flex flex-col justify-between">
                    {children}
                </div>
                </main>
            </div>
        </>
    )
}

export default ChatLayout;
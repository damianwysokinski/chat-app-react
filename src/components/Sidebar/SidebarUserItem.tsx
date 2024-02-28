import { FC } from 'react'
import Link from 'next/link'
import { User } from '@/utils/dataUtils';

interface UserItemProps {
    user: User;
}  

const SidebarUserItem: FC<UserItemProps> = ({ user }) => {
    return (
        <li key={user.id}>
            <Link href={`/chat/${user.id}`} className="cursor-pointer flex items-center gap-4 px-2 py-2.5 rounded-lg dark:hover:bg-gray-700">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="font-medium dark:text-white">
                <div>{user.name}</div>
                </div>
            </Link>
        </li>
    );
}

export default SidebarUserItem;
import { FC } from 'react';
import Link from 'next/link';
import { Chatroom } from '@/utils/dataUtils';
import { usePathname } from 'next/navigation';

interface UserItemProps {
  user: Chatroom;
}

const SidebarUserItem: FC<UserItemProps> = ({ user }) => {
  const pathname = usePathname();
  const isLinkActive = pathname === `/chat/${user.id}`;

  return (
    <li key={user.id}>
      <Link
        href={`/chat/${user.id}`}
        className={`flex cursor-pointer items-center gap-4 rounded-lg px-2 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 ${isLinkActive ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
      >
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          {user.name.charAt(0)}
        </div>
        <div className="font-medium dark:text-white">
          <div>{user.name}</div>
        </div>
      </Link>
    </li>
  );
};

export default SidebarUserItem;

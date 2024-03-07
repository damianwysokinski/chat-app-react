import { FC } from 'react';
import Link from 'next/link';
import { Chatroom, ChatMessage } from '@/utils/dataUtils';
import { usePathname } from 'next/navigation';

interface SidebarUserItemProps {
  user: Chatroom;
}

const SidebarUserItem: FC<SidebarUserItemProps> = ({ user }) => {
  const pathname = usePathname();
  const isLinkActive = pathname === `/chat/${user.id}`;

  const getLastMessage = () => {
    return user.messages?.[user.messages.length - 1]?.message || '';
  };

  const lastMessage = getLastMessage();

  return (
    <li key={user.id}>
      <Link
        href={`/chat/${user.id}`}
        className={`flex cursor-pointer items-center gap-4 rounded-lg px-2 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 ${isLinkActive ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
      >
        <div className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-gray-300">
          {user.name.charAt(0)}
        </div>
        <div className="flex flex-col font-medium truncate">
          <div className="dark:text-white">{user.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{lastMessage}</div>
        </div>
      </Link>
    </li>
  );
};

export default SidebarUserItem;

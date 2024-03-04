import { FC } from 'react';
import { Chatroom } from '@/utils/dataUtils';

interface ChatHeaderProps {
  user: Chatroom;
}

const ChatHeader: FC<ChatHeaderProps> = ({ user }) => {
  return (
    <div className="fixed left-0 right-0 top-0 border-b border-gray-200 bg-white pt-16 md:ml-80 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-4 p-2.5">
        <div className="relative">
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          {user.name.charAt(0)}
        </div>
          <span className="absolute left-7 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
        </div>
        <div className="font-medium dark:text-white">
          <div>{user.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Active</div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

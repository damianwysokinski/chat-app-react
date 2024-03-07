import { FC } from 'react';
import { ChatMessage, User } from '@/utils/dataUtils';

interface ChatMessagesProps {
  messages: ChatMessage[];
  users: User[];
}

const ChatMessages: FC<ChatMessagesProps> = ({ messages, users }) => {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const options = {
      month: 'short' as const,
      day: 'numeric' as const,
      hour: 'numeric' as const,
      minute: 'numeric' as const,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <>
      {messages.map(({ senderId, message, timestamp }, index) => {
        const loggedInUserId = 1;
        const user = users.find((user) => user.id === senderId);
        const senderName = user ? user.name : 'Unknown User';
        const formattedTimestamp = formatDate(timestamp);

        return (
          <div className="flex items-start gap-2.5" key={index}>
            <div
              className={`leading-1.5 mb-4 flex w-full max-w-[320px] flex-col rounded-lg border-gray-200 p-4 ${loggedInUserId === senderId ? 'ml-auto bg-blue-100 dark:bg-blue-700' : 'bg-gray-100 dark:bg-gray-700'}`}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {senderName}
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {formattedTimestamp}
                </span>
              </div>
              <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
                {message}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChatMessages;

'use client';

import { FC, useState } from 'react';

import { getChatroomById, ChatMessage, getUsers } from '@/utils/dataUtils';

import ChatHeader from '@/components/Chat/ChatHeader';
import ChatInput from '@/components/Chat/ChatInput';
import ChatMessages from '@/components/Chat/ChatMessages';
import ChatLayout from '@/components/ChatLayout';

interface PageProps {
  params: {
    chatId: string;
  };
}

const ChatPage: FC<PageProps> = ({ params }) => {
  const { chatId } = params;
  const chatroom = getChatroomById(Number(chatId));
  const users = getUsers();

  const [messages, setMessages] = useState<ChatMessage[]>(
    chatroom?.messages || [],
  );

  const handleSendMessage = (messageContent: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      senderId: 1,
      message: messageContent,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  if (!chatroom) {
    return (
      <ChatLayout>
        <div className="flex h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            Conversation not found
          </div>
        </div>
      </ChatLayout>
    );
  }

  return (
    <ChatLayout>
      <div className="pb-20">
        <ChatHeader user={chatroom} />
        <ChatMessages messages={messages} users={users} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </ChatLayout>
  );
};

export default ChatPage;

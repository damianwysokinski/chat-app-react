"use client";

import { FC, useState } from 'react'
import { getUsers, getChatRooms, ChatMessage } from '@/utils/dataUtils';
import ChatInput from "@/components/ChatInput";
import ChatMessages from '@/components/ChatMessages';
import ChatLayout from '@/components/ChatLayout';

interface PageProps {
    params: {
        chatId: string
    }
}

const getChatMessages = (chatId: string) => {
    try {
        const chatRooms = getChatRooms();
        return chatRooms.find(room => room.id === parseInt(chatId));
    } catch (error) {
        console.error(error);
    }
}

const ChatPage: FC<PageProps> = ({ params }) => {
    const { chatId } = params;
    const users = getUsers();
    const initialChatRoom = getChatMessages(chatId);
    const [messages, setMessages] = useState<ChatMessage[]>(initialChatRoom?.messages || []);

    const handleSendMessage = (messageContent: string) => {
        const newMessage: ChatMessage = {
          id: messages.length + 1,
          senderId: 1,
          message: messageContent,
          timestamp: new Date().toISOString(),
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <ChatLayout>
            <div className="pb-20">
                <ChatMessages messages={messages} users={users} />
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
        </ChatLayout>
    );
}

export default ChatPage;
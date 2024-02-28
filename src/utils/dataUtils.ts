import usersData from '@/data/users.json';
import chatRoomsData from '@/data/chatRooms.json';

export interface User {
  id: number;
  username: string;
  name: string;
}

export interface ChatMessage {
  id: number;
  senderId: number;
  message: string;
  timestamp: string;
}

export interface ChatRoom {
  id: number;
  messages: ChatMessage[];
}

export function getUsers(): User[] {
    return usersData as User[];
}
  
export function getChatRooms(): ChatRoom[] {
    return chatRoomsData as ChatRoom[];
}
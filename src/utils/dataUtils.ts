import usersData from '@/data/users.json';
import chatroomsData from '@/data/chatRooms.json';

export interface User {
  id: number;
  username: string;
  name?: string;
}

export interface Chatroom {
  id: number;
  name: string;
  users: number[];
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: number;
  senderId: number;
  message: string;
  timestamp: string;
}

export function getUsers(): User[] {
  return usersData as User[];
}

export function getChatrooms(): Chatroom[] {
  return chatroomsData as Chatroom[];
}

export function getChatroomById(id: number): Chatroom | undefined {
  const chatrooms = getChatrooms();
  return chatrooms.find((chatroom) => chatroom.id === id);
}

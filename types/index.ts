export interface User {
  id: string;
  username: string;
  email: string;
  avatarColor: string;
  status: 'online' | 'offline' | 'typing';
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
  isRead: boolean;
}

export interface ChatSummary {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
}

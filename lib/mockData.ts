import type { ChatSummary, Message, User } from '@/types';

export const currentUser: User = {
  id: 'me',
  username: 'Siz',
  email: 'siz@example.com',
  avatarColor: '#0EA5E9',
  status: 'online',
};

export const mockChats: ChatSummary[] = [
  {
    id: 'c1',
    user: {
      id: 'u1',
      username: 'Aziza Karimova',
      email: 'aziza@example.com',
      avatarColor: '#F97316',
      status: 'online',
    },
    lastMessage: "Albatta, 15:00 da bo'laman 👋",
    lastMessageAt: '10:24',
    unreadCount: 0,
  },
  {
    id: 'c2',
    user: {
      id: 'u2',
      username: 'Jasur Toshmatov',
      email: 'jasur@example.com',
      avatarColor: '#10B981',
      status: 'typing',
    },
    lastMessage: 'Loyihani ko\u2018rib chiqdingizmi?',
    lastMessageAt: '09:58',
    unreadCount: 3,
  },
  {
    id: 'c3',
    user: {
      id: 'u3',
      username: 'Malika Yusupova',
      email: 'malika@example.com',
      avatarColor: '#0EA5E9',
      status: 'offline',
    },
    lastMessage: 'Rahmat, ko\u2018rishguncha!',
    lastMessageAt: 'Kecha',
    unreadCount: 0,
  },
  {
    id: 'c4',
    user: {
      id: 'u4',
      username: 'Sardor Aliyev',
      email: 'sardor@example.com',
      avatarColor: '#F97316',
      status: 'offline',
    },
    lastMessage: 'Fayllarni yubordim.',
    lastMessageAt: 'Dushanba',
    unreadCount: 0,
  },
];

export const mockMessages: Record<string, Message[]> = {
  c1: [
    {
      id: 'm1',
      chatId: 'c1',
      senderId: 'u1',
      text: 'Salom! Bugun uchrashuvga qatnashasizmi?',
      createdAt: '10:20',
      isRead: true,
    },
    {
      id: 'm2',
      chatId: 'c1',
      senderId: 'me',
      text: 'Albatta, 15:00 da bo\u2018laman 👋',
      createdAt: '10:24',
      isRead: true,
    },
    {
      id: 'm3',
      chatId: 'c1',
      senderId: 'u1',
      text: 'Zo\u2018r, Zoom havolasini yuboraman.',
      createdAt: '10:25',
      isRead: false,
    },
  ],
  c2: [
    {
      id: 'm4',
      chatId: 'c2',
      senderId: 'u2',
      text: 'Loyihani ko\u2018rib chiqdingizmi?',
      createdAt: '09:58',
      isRead: false,
    },
  ],
  c3: [
    {
      id: 'm5',
      chatId: 'c3',
      senderId: 'me',
      text: 'Yordamingiz uchun rahmat!',
      createdAt: 'Kecha',
      isRead: true,
    },
    {
      id: 'm6',
      chatId: 'c3',
      senderId: 'u3',
      text: 'Rahmat, ko\u2018rishguncha!',
      createdAt: 'Kecha',
      isRead: true,
    },
  ],
  c4: [
    {
      id: 'm7',
      chatId: 'c4',
      senderId: 'u4',
      text: 'Fayllarni yubordim.',
      createdAt: 'Dushanba',
      isRead: true,
    },
  ],
};

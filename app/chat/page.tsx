'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/chat/Sidebar';
import ChatHeader from '@/components/chat/ChatHeader';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import RightPanel from '@/components/chat/RightPanel';
import { currentUser, mockChats, mockMessages } from '@/lib/mockData';
import type { Message } from '@/types';
// import { getSocket } from '@/lib/socket';

export default function ChatPage() {
  const [chats] = useState(mockChats);
  const [activeChatId, setActiveChatId] = useState(mockChats[0].id);
  const [messagesByChat, setMessagesByChat] = useState(mockMessages);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [showSidebarMobile, setShowSidebarMobile] = useState(true);

  const activeChat = chats.find((c) => c.id === activeChatId) ?? chats[0];
  const activeMessages = messagesByChat[activeChatId] ?? [];

  // Backendga ulanganda: socket.io orqali real vaqtli xabarlarni tinglash.
  // useEffect(() => {
  //   const socket = getSocket();
  //   socket.connect();
  //   socket.emit('join_chat', activeChatId);
  //   socket.on('message:new', (message: Message) => {
  //     setMessagesByChat((prev) => ({
  //       ...prev,
  //       [message.chatId]: [...(prev[message.chatId] ?? []), message],
  //     }));
  //   });
  //   return () => {
  //     socket.off('message:new');
  //     socket.disconnect();
  //   };
  // }, [activeChatId]);

  function handleSend(text: string) {
    const newMessage: Message = {
      id: `local-${Date.now()}`,
      chatId: activeChatId,
      senderId: currentUser.id,
      text,
      createdAt: new Date().toLocaleTimeString('uz-UZ', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isRead: false,
    };

    setMessagesByChat((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] ?? []), newMessage],
    }));

    // Backendga ulanganda: socket.emit('message:send', newMessage);
  }

  function handleSelectChat(chatId: string) {
    setActiveChatId(chatId);
    setShowSidebarMobile(false);
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-light">
      {/* Chap panel — sahifa nomi bo'yicha "orqaga" havolasi mobil uchun */}
      <div
        className={`${
          showSidebarMobile ? 'flex' : 'hidden'
        } h-full w-full md:flex md:w-auto`}
      >
        <Sidebar chats={chats} activeChatId={activeChatId} onSelectChat={handleSelectChat} />
      </div>

      {/* Markaziy panel */}
      <div
        className={`${
          showSidebarMobile ? 'hidden' : 'flex'
        } h-full flex-1 flex-col md:flex`}
      >
        <div className="flex items-center gap-2 border-b border-dark/5 bg-white px-3 py-2 md:hidden">
          <button
            onClick={() => setShowSidebarMobile(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-dark/50 hover:bg-light"
            aria-label="Suhbatlar ro'yxati"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link href="/" className="text-sm font-semibold text-dark/60">
            iChat
          </Link>
        </div>

        <ChatHeader user={activeChat.user} onToggleInfo={() => setShowRightPanel((v) => !v)} />
        <MessageList
          messages={activeMessages}
          currentUserId={currentUser.id}
          otherUser={activeChat.user}
        />
        <ChatInput onSend={handleSend} />
      </div>

      {/* O'ng panel — suhbat ma'lumoti */}
      {showRightPanel && (
        <div className="hidden h-full lg:flex">
          <RightPanel user={activeChat.user} onClose={() => setShowRightPanel(false)} />
        </div>
      )}
    </div>
  );
}

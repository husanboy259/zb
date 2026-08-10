'use client';

import { useState } from 'react';
import type { ChatSummary } from '@/types';

interface SidebarProps {
  chats: ChatSummary[];
  activeChatId: string;
  onSelectChat: (chatId: string) => void;
}

function statusDotColor(status: string) {
  if (status === 'online') return 'bg-secondary';
  if (status === 'typing') return 'bg-accent';
  return 'bg-dark/20';
}

export default function Sidebar({ chats, activeChatId, onSelectChat }: SidebarProps) {
  const [query, setQuery] = useState('');

  const filteredChats = chats.filter((chat) =>
    chat.user.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className="flex h-full w-full max-w-xs flex-col border-r border-dark/5 bg-white">
      <div className="border-b border-dark/5 px-5 py-4">
        <h2 className="font-display text-lg font-semibold text-dark">Suhbatlar</h2>
        <div className="relative mt-3">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark/30"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
            <path d="m20 20-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Qidirish..."
            className="w-full rounded-xl border border-dark/10 bg-light py-2 pl-9 pr-3 text-sm outline-none transition placeholder:text-dark/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <ul className="scroll-thin flex-1 overflow-y-auto">
        {filteredChats.map((chat) => {
          const isActive = chat.id === activeChatId;
          return (
            <li key={chat.id}>
              <button
                onClick={() => onSelectChat(chat.id)}
                className={`flex w-full items-center gap-3 border-l-2 px-5 py-3.5 text-left transition ${
                  isActive
                    ? 'border-primary bg-primary/5'
                    : 'border-transparent hover:bg-light'
                }`}
              >
                <div className="relative shrink-0">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                    style={{ backgroundColor: chat.user.avatarColor }}
                  >
                    {chat.user.username.charAt(0)}
                  </div>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${statusDotColor(
                      chat.user.status
                    )}`}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-semibold text-dark">
                      {chat.user.username}
                    </span>
                    <span className="shrink-0 text-xs text-dark/40">{chat.lastMessageAt}</span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <span className="truncate text-xs text-dark/50">
                      {chat.user.status === 'typing' ? (
                        <span className="font-medium text-accent">yozmoqda...</span>
                      ) : (
                        chat.lastMessage
                      )}
                    </span>
                    {chat.unreadCount > 0 && (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-white">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </li>
          );
        })}

        {filteredChats.length === 0 && (
          <li className="px-5 py-8 text-center text-sm text-dark/40">
            Hech narsa topilmadi
          </li>
        )}
      </ul>
    </aside>
  );
}

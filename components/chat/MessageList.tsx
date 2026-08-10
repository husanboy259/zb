'use client';

import { useEffect, useRef } from 'react';
import type { Message, User } from '@/types';
import MessageBubble from './MessageBubble';

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
  otherUser: User;
}

export default function MessageList({ messages, currentUserId, otherUser }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, otherUser.status]);

  return (
    <div className="scroll-thin flex-1 space-y-3 overflow-y-auto px-6 py-6">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          isOwn={message.senderId === currentUserId}
        />
      ))}

      {otherUser.status === 'typing' && (
        <div className="flex justify-start">
          <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-dark/5 bg-white px-4 py-3 shadow-bubble">
            <span className="h-1.5 w-1.5 animate-typing rounded-full bg-dark/40" />
            <span
              className="h-1.5 w-1.5 animate-typing rounded-full bg-dark/40"
              style={{ animationDelay: '150ms' }}
            />
            <span
              className="h-1.5 w-1.5 animate-typing rounded-full bg-dark/40"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

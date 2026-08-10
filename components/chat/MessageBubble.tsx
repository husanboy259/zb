import type { Message } from '@/types';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

function ReadReceipt({ isRead }: { isRead: boolean }) {
  return (
    <svg width="15" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path
        d="M1 5.5 4 8.5 9 2"
        stroke={isRead ? '#0EA5E9' : 'currentColor'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5.5 9 8.5 15 1.5"
        stroke={isRead ? '#0EA5E9' : 'currentColor'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2.5 shadow-bubble ${
          isOwn
            ? 'rounded-tr-sm bg-primary text-white'
            : 'rounded-tl-sm border border-dark/5 bg-white text-dark'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <div
          className={`mt-1 flex items-center justify-end gap-1 text-[11px] ${
            isOwn ? 'text-white/70' : 'text-dark/35'
          }`}
        >
          <span>{message.createdAt}</span>
          {isOwn && <ReadReceipt isRead={message.isRead} />}
        </div>
      </div>
    </div>
  );
}

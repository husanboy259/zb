'use client';

import { useState } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
}

const EMOJIS = ['😀', '😂', '😍', '👍', '🙏', '🎉', '🔥', '😢', '😮', '❤️', '👋', '🤝'];

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
    setShowEmoji(false);
  }

  return (
    <div className="relative border-t border-dark/5 bg-white px-6 py-4">
      {showEmoji && (
        <div className="absolute bottom-full left-6 mb-2 grid grid-cols-6 gap-1 rounded-2xl border border-dark/5 bg-white p-3 shadow-xl shadow-dark/10">
          {EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => {
                setText((prev) => prev + emoji);
                setShowEmoji(false);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-lg transition hover:bg-light"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <button
          type="button"
          onClick={() => setShowEmoji((v) => !v)}
          aria-label="Emoji tanlash"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl transition ${
            showEmoji ? 'bg-primary/10 text-primary' : 'text-dark/40 hover:bg-light'
          }`}
        >
          🙂
        </button>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Xabar yozing..."
          className="flex-1 rounded-full border border-dark/10 bg-light px-5 py-2.5 text-sm outline-none transition placeholder:text-dark/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />

        <button
          type="submit"
          disabled={!text.trim()}
          aria-label="Yuborish"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 12 20 4l-6.5 16-3-6.5L4 12Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

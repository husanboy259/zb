import type { User } from '@/types';

interface RightPanelProps {
  user: User;
  onClose: () => void;
}

export default function RightPanel({ user, onClose }: RightPanelProps) {
  return (
    <aside className="flex h-full w-full max-w-xs flex-col border-l border-dark/5 bg-white">
      <div className="flex items-center justify-between border-b border-dark/5 px-5 py-4">
        <h3 className="font-display text-sm font-semibold text-dark">Suhbat ma&apos;lumoti</h3>
        <button
          onClick={onClose}
          aria-label="Yopish"
          className="flex h-8 w-8 items-center justify-center rounded-full text-dark/40 transition hover:bg-light hover:text-dark"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center px-6 py-8 text-center">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full font-display text-2xl font-semibold text-white"
          style={{ backgroundColor: user.avatarColor }}
        >
          {user.username.charAt(0)}
        </div>
        <p className="mt-4 font-display text-lg font-semibold text-dark">{user.username}</p>
        <p className="mt-1 text-sm text-dark/40">{user.email}</p>
        <span
          className={`mt-3 rounded-full px-3 py-1 text-xs font-semibold ${
            user.status === 'online'
              ? 'bg-secondary/10 text-secondary'
              : user.status === 'typing'
                ? 'bg-accent/10 text-accent'
                : 'bg-dark/5 text-dark/40'
          }`}
        >
          {user.status === 'online' ? 'Onlayn' : user.status === 'typing' ? "Yozmoqda" : 'Oflayn'}
        </span>
      </div>

      <div className="space-y-1 border-t border-dark/5 px-3 py-3">
        {[
          { label: 'Bildirishnomalarni o\u2018chirish', icon: '🔕' },
          { label: 'Suhbatni izlash', icon: '🔍' },
          { label: 'Umumiy fayllar', icon: '📎' },
          { label: 'Foydalanuvchini bloklash', icon: '🚫' },
        ].map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-dark/70 transition hover:bg-light"
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}

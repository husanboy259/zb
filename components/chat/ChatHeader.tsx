import type { User } from '@/types';

interface ChatHeaderProps {
  user: User;
  onToggleInfo: () => void;
}

const statusLabel: Record<User['status'], string> = {
  online: 'Onlayn',
  typing: 'yozmoqda...',
  offline: 'Oxirgi marta ko\u2018rilgan bugun',
};

export default function ChatHeader({ user, onToggleInfo }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-3 border-b border-dark/5 bg-white px-6 py-3.5">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
        style={{ backgroundColor: user.avatarColor }}
      >
        {user.username.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-dark">{user.username}</p>
        <p
          className={`text-xs ${
            user.status === 'typing'
              ? 'font-medium text-accent'
              : user.status === 'online'
                ? 'text-secondary'
                : 'text-dark/40'
          }`}
        >
          {statusLabel[user.status]}
        </p>
      </div>

      <button
        onClick={onToggleInfo}
        aria-label="Suhbat ma'lumotini ko'rsatish"
        className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-dark/40 transition hover:bg-light hover:text-dark"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 11v5.5M12 8v.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

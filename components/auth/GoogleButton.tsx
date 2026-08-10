interface GoogleButtonProps {
  label: string;
  onClick?: () => void;
}

export default function GoogleButton({ label, onClick }: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-dark/10 bg-white py-3 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:border-dark/20 hover:shadow-sm"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.78-2.4 3.63v3.02h3.88c2.27-2.09 3.57-5.17 3.57-8.84Z"
          fill="#4285F4"
        />
        <path
          d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3.02c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.12A11.998 11.998 0 0 0 12 24Z"
          fill="#34A853"
        />
        <path
          d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.61H1.26a12 12 0 0 0 0 10.78l4.01-3.12Z"
          fill="#FBBC05"
        />
        <path
          d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.61l4.01 3.12C6.22 6.88 8.87 4.77 12 4.77Z"
          fill="#EA4335"
        />
      </svg>
      {label}
    </button>
  );
}

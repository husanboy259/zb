import { ReactNode } from 'react';

interface AuthInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  icon?: ReactNode;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric';
}

export default function AuthInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  icon,
  inputMode,
}: AuthInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-dark/80">
        {label}
      </label>
      <div className="relative mt-1.5">
        {icon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-dark/30">
            {icon}
          </span>
        )}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
          inputMode={inputMode}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border bg-white py-2.5 text-sm text-dark outline-none transition placeholder:text-dark/30 focus:ring-2 ${
            icon ? 'pl-10 pr-4' : 'px-4'
          } ${
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
              : 'border-dark/10 focus:border-primary focus:ring-primary/20'
          }`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

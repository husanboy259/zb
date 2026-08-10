'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthInput from './AuthInput';
import GoogleButton from './GoogleButton';
import AuthDivider from './AuthDivider';
import { registerUser } from '@/lib/api';
import { formatPhoneNumber, isValidPhoneNumber } from '@/lib/phone';

interface FormState {
  username: string;
  phone: string;
  password: string;
}

interface FormErrors {
  username?: string;
  phone?: string;
  password?: string;
  form?: string;
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (values.username.trim().length < 3) {
    errors.username = "Username kamida 3 ta belgidan iborat bo'lishi kerak";
  }

  if (!isValidPhoneNumber(values.phone)) {
    errors.phone = "Telefon raqam to'liq emas. Masalan: +998 90 123 45 67";
  }

  if (values.password.length < 6) {
    errors.password = "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
  }

  return errors;
}

export default function RegisterForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>({
    username: '',
    phone: '+998 ',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }));
  }

  function handlePhoneChange(value: string) {
    handleChange('phone', formatPhoneNumber(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const data = await registerUser(values);
      localStorage.setItem('ichat_token', data.token);
      document.cookie = `ichat_token=${data.token}; path=/; max-age=604800`;
      router.push('/chat');
    } catch (err: any) {
      setErrors({
        form:
          err?.response?.data?.message ||
          "Ro'yxatdan o'tishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleGoogleSignUp() {
    // TODO: backend tayyor bo'lganda Google OAuth oqimini ulash
    setErrors({ form: 'Google orqali ro\u2018yxatdan o\u2018tish tez orada qo\u2018shiladi.' });
  }

  return (
    <div>
      <GoogleButton label="Google orqali ro'yxatdan o'tish" onClick={handleGoogleSignUp} />
      <AuthDivider />

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {errors.form && (
          <div className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
            {errors.form}
          </div>
        )}

        <AuthInput
          id="username"
          label="Username"
          value={values.username}
          onChange={(v) => handleChange('username', v)}
          placeholder="aziza_dev"
          autoComplete="username"
          error={errors.username}
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M12 12c2.49 0 4.5-2.01 4.5-4.5S14.49 3 12 3 7.5 5.01 7.5 7.5 9.51 12 12 12Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M4 20.5c0-3.87 3.58-7 8-7s8 3.13 8 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          }
        />
        <AuthInput
          id="phone"
          label="Telefon raqam"
          type="tel"
          inputMode="tel"
          value={values.phone}
          onChange={handlePhoneChange}
          placeholder="+998 90 123 45 67"
          autoComplete="tel"
          error={errors.phone}
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.9 3.7 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <AuthInput
          id="password"
          label="Parol"
          type="password"
          value={values.password}
          onChange={(v) => handleChange('password', v)}
          placeholder="Kamida 6 ta belgi"
          autoComplete="new-password"
          error={errors.password}
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <rect
                x="5"
                y="10.5"
                width="14"
                height="9.5"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M8 10.5V7.5a4 4 0 1 1 8 0v3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          }
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
        </button>
      </form>
    </div>
  );
}

import AuthCard from '@/components/auth/AuthCard';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Kirish — iChat',
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Xush kelibsiz"
      subtitle="Suhbatlaringizni davom ettirish uchun kiring"
      footerText="Hisobingiz yo'qmi?"
      footerLinkLabel="Ro'yxatdan o'tish"
      footerLinkHref="/register"
    >
      <LoginForm />
    </AuthCard>
  );
}

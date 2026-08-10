import AuthCard from '@/components/auth/AuthCard';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
  title: "Ro'yxatdan o'tish — iChat",
};

export default function RegisterPage() {
  return (
    <AuthCard
      title="Hisob yarating"
      subtitle="Bir necha soniyada iChat jamoasiga qo'shiling"
      footerText="Hisobingiz bormi?"
      footerLinkLabel="Kirish"
      footerLinkHref="/login"
    >
      <RegisterForm />
    </AuthCard>
  );
}

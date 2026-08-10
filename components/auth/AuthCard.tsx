import Link from 'next/link';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
}

export default function AuthCard({
  title,
  subtitle,
  children,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-grid-glow bg-light px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-white">
            iC
          </span>
          <span className="font-display text-xl font-semibold text-dark">iChat</span>
        </Link>

        <div className="rounded-2xl border border-dark/5 bg-white p-8 shadow-xl shadow-dark/5">
          <h1 className="font-display text-2xl font-bold text-dark">{title}</h1>
          <p className="mt-1.5 text-sm text-dark/50">{subtitle}</p>

          <div className="mt-8">{children}</div>
        </div>

        <p className="mt-6 text-center text-sm text-dark/50">
          {footerText}{' '}
          <Link href={footerLinkHref} className="font-semibold text-primary hover:underline">
            {footerLinkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark/5 bg-light/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-white">
            iC
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-dark">
            iChat
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-dark/70 md:flex">
          <Link href="/#xususiyatlar" className="transition hover:text-dark">
            Xususiyatlar
          </Link>
          <Link href="/#demo" className="transition hover:text-dark">
            Demo
          </Link>
        </div>

        <Link
          href="/login"
          className="rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary"
        >
          Kirish
        </Link>
      </nav>
    </header>
  );
}

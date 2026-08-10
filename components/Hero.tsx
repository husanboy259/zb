import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid-glow">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center md:pt-28">
        <span className="animate-fade-up rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          150+ tilda real vaqtda muloqot
        </span>

        <h1
          className="mt-6 animate-fade-up font-display text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          Dunyo bilan{' '}
          <span className="relative whitespace-nowrap text-primary">
            bir tilda
            <svg
              className="absolute -bottom-1 left-0 w-full text-secondary"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 9C60 3 240 3 298 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          gaplashing
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-balance text-base text-dark/60 sm:text-lg"
          style={{ animationDelay: '160ms' }}
        >
          iChat orqali istalgan tilda yozing — suhbatdoshingiz o&apos;z tilida o&apos;qiydi.
          Tezkor, xavfsiz va aqlli xabar almashish tajribasi.
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
          style={{ animationDelay: '240ms' }}
        >
          <Link
            href="/register"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl hover:shadow-primary/30"
          >
            Boshlash
          </Link>
          <Link
            href="#demo"
            className="rounded-full border border-dark/10 bg-white px-8 py-3.5 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:border-dark/20"
          >
            Demo ko&apos;rish
          </Link>
        </div>

        <div
          className="mt-16 grid w-full max-w-2xl animate-fade-up grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ animationDelay: '320ms' }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-dark/5 bg-white/60 px-4 py-3.5 text-left shadow-sm shadow-dark/5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.4 5.6 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.6-3.4-9s1.2-6.6 3.4-9Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="font-display text-sm font-bold text-dark">150+ til</p>
              <p className="text-xs text-dark/50">Real vaqtda tarjima</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-dark/5 bg-white/60 px-4 py-3.5 text-left shadow-sm shadow-dark/5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 3 4 6.5v5c0 4.7 3.2 8.9 8 10 4.8-1.1 8-5.3 8-10v-5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2.2 2.2L15.5 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="font-display text-sm font-bold text-dark">Uchtan-uchgacha</p>
              <p className="text-xs text-dark/50">Shifrlangan xabarlar</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-dark/5 bg-white/60 px-4 py-3.5 text-left shadow-sm shadow-dark/5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="font-display text-sm font-bold text-dark">Millisoniyalarda</p>
              <p className="text-xs text-dark/50">Tezkor yetkazish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

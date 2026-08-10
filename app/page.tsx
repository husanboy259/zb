import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    title: 'Real vaqtda xabarlar',
    description:
      "Socket.io asosida millisekundlarda yetib boradigan xabarlar, yozayotganini ko'rish va onlayn holat.",
    accentColor: '#0EA5E9',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9l-4 4v-4H5.5C4.67 15 4 14.33 4 13.5v-8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
        <circle cx="12" cy="9.5" r="1" fill="currentColor" />
        <circle cx="15.5" cy="9.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI tarjima",
    description:
      "Har bir xabar avtomatik ravishda suhbatdoshingiz tiliga tarjima qilinadi — til to'sig'isiz muloqot.",
    accentColor: '#F97316',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h8M8 4v2.2C8 9.5 5.8 12 3 13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M5 9c1 1.8 3 3 5.5 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path
          d="m13.5 20 3.8-9.5L21 20M14.6 17h5.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Xavfsizlik',
    description:
      'End-to-end shifrlash va zamonaviy autentifikatsiya orqali suhbatlaringiz doim maxfiy qoladi.',
    accentColor: '#10B981',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5 5 6.3v5.4c0 4.4 3 8.1 7 9.3 4-1.2 7-4.9 7-9.3V6.3L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <>
      <Hero />

      <section id="xususiyatlar" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Nega iChat
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Muloqot uchun kerak bo&apos;lgan hammasi
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} index={index} {...feature} />
          ))}
        </div>
      </section>

      <section id="demo" className="bg-dark py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Demo
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Bir necha soniyada sinab ko&apos;ring
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Ro&apos;yxatdan o&apos;tmasdan turib iChat qanday ishlashini ko&apos;ring.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-white/80">Aziza</span>
              <span className="ml-auto text-xs text-secondary">online</span>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2 text-sm">
                Salom! Bugun uchrashuvga qatnashasizmi?
              </div>
              <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2 text-sm">
                Albatta, 15:00 da bo&apos;laman 👋
              </div>
            </div>
            <a
              href="/register"
              className="mt-2 block rounded-full bg-primary py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Demo suhbatni boshlash
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

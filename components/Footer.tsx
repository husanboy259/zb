import Link from 'next/link';

const columns = [
  {
    title: 'Mahsulot',
    links: [
      { label: 'Xususiyatlar', href: '/#xususiyatlar' },
      { label: 'Demo', href: '/#demo' },
      { label: 'Narxlar', href: '#' },
    ],
  },
  {
    title: 'Kompaniya',
    links: [
      { label: 'Biz haqimizda', href: '#' },
      { label: 'Karyera', href: '#' },
      { label: 'Aloqa', href: '#' },
    ],
  },
  {
    title: 'Huquqiy',
    links: [
      { label: 'Maxfiylik siyosati', href: '#' },
      { label: 'Foydalanish shartlari', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark/5 bg-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-white">
              iC
            </span>
            <span className="font-display text-lg font-semibold">iChat</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Dunyo bilan bir tilda gaplashing — real vaqtda xabar almashish va AI tarjima
            bitta joyda.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-white/90">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} iChat. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  index: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  accentColor,
  index,
}: FeatureCardProps) {
  return (
    <div
      className="group animate-fade-up rounded-2xl border border-dark/5 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark/5"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110"
        style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
      >
        {icon}
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-dark">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-dark/60">{description}</p>
    </div>
  );
}

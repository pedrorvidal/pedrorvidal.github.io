interface SectionHeadingProps {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  color?: 'cyan' | 'magenta' | 'yellow';
}

const colors = {
  cyan: 'text-neon-cyan',
  magenta: 'text-neon-magenta',
  yellow: 'text-neon-yellow',
};

export default function SectionHeading({ id, kicker, title, subtitle, color = 'cyan' }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{kicker}</p>
      <h2 id={id} className={`font-arcade text-xl sm:text-2xl md:text-3xl uppercase text-glow ${colors[color]}`}>
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

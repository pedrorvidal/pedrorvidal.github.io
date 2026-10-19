import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/i18n/useLanguage';
import SectionHeading from './SectionHeading';

export default function About() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="py-24">
      <div className="container" ref={ref}>
        <SectionHeading id="about-title" kicker={t.about.kicker} title={t.about.title} color="magenta" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-start">
          <p
            className="reveal md:col-span-3 text-lg text-muted-foreground leading-relaxed"
            data-inview={inView}
          >
            {t.about.bio}
          </p>

          <dl
            className="reveal md:col-span-2 rounded-xl border-2 border-neon-magenta/40 bg-card p-5 space-y-3"
            data-inview={inView}
            style={{ transitionDelay: '0.15s' }}
          >
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-2 last:border-0 last:pb-0"
              >
                <dt className="font-arcade text-[0.625rem] uppercase text-neon-magenta shrink-0">{stat.label}</dt>
                <dd className="text-sm font-semibold text-right">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

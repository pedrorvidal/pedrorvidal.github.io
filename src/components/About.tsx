import { GraduationCap, Languages } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: "Bachelor's Degree in Computer Science",
    detail: 'URI — Frederico Westphalen Campus, 2005',
  },
  {
    icon: Languages,
    label: 'Language',
    value: 'Fluent English',
    detail: 'Portuguese (native)',
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <p
            className="text-muted-foreground leading-relaxed"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            Full-Stack Developer with 20+ years of experience in PHP,
            WordPress, and Laravel, with strong hands-on work in requirements
            gathering and data modeling for complex integrations. Proven
            track record managing multiple simultaneous projects for
            international brands such as Merz Aesthetics, Torrent Pharma, and
            Medtronic, with a consistent history of diagnosing and fixing
            performance/SEO issues, responding to security incidents, and
            standardizing maintenance processes at scale.
          </p>

          {/* Quick facts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${0.2 + i * 0.1}s`,
                }}
              >
                <fact.icon size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="font-semibold text-sm mt-0.5">{fact.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {fact.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

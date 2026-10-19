import { Bot, Code2, Database, GitBranch, LayoutTemplate, Plug } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/i18n/useLanguage';
import SectionHeading from './SectionHeading';

const skillGroups = [
  {
    icon: Code2,
    color: 'cyan',
    category: { en: 'Languages & Frameworks', pt: 'Linguagens & Frameworks' },
    skills: ['PHP 8', 'WordPress', 'Multisite', 'WooCommerce', 'ACF Pro', 'Bedrock', 'WP-CLI', 'Laravel', 'CodeIgniter', 'Symfony'],
  },
  {
    icon: LayoutTemplate,
    color: 'magenta',
    category: { en: 'Frontend', pt: 'Frontend' },
    skills: ['Gutenberg', 'Interactivity API', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Sass', 'Vite'],
  },
  {
    icon: Database,
    color: 'yellow',
    category: { en: 'Data & Performance', pt: 'Dados & Performance' },
    skills: ['MySQL tuning', 'PostgreSQL', 'Redis', 'Core Web Vitals', 'Technical SEO', 'Cloudflare', 'REST APIs', 'JWT'],
  },
  {
    icon: GitBranch,
    color: 'green',
    category: { en: 'Testing & CI/CD', pt: 'Testes & CI/CD' },
    skills: ['PHPUnit', 'Jest', 'Vitest', 'PHPStan', 'WPCS', 'Docker', 'GitHub Actions', 'Bitbucket Pipelines', 'Jenkins'],
  },
  {
    icon: Bot,
    color: 'cyan',
    category: { en: 'AI & Ways of working', pt: 'IA & Forma de trabalho' },
    skills: ['Claude Code', 'MCP', 'Playwright', 'AI-assisted workflows', 'Scrum', 'Kanban'],
  },
  {
    icon: Plug,
    color: 'magenta',
    category: { en: 'Integrations', pt: 'Integrações' },
    skills: ['RD Station', 'Mailchimp', 'Salesforce', 'SFMC', 'Google Tag Manager', 'Google Places API'],
  },
] as const;

const tone = {
  cyan: { text: 'text-neon-cyan', border: 'hover:border-neon-cyan', glow: 'hover:shadow-[0_0_24px_-6px_hsl(var(--neon-cyan)/0.7)]' },
  magenta: { text: 'text-neon-magenta', border: 'hover:border-neon-magenta', glow: 'hover:shadow-[0_0_24px_-6px_hsl(var(--neon-magenta)/0.7)]' },
  yellow: { text: 'text-neon-yellow', border: 'hover:border-neon-yellow', glow: 'hover:shadow-[0_0_24px_-6px_hsl(var(--neon-yellow)/0.7)]' },
  green: { text: 'text-neon-green', border: 'hover:border-neon-green', glow: 'hover:shadow-[0_0_24px_-6px_hsl(var(--neon-green)/0.7)]' },
};

export default function Skills() {
  const { ref, inView } = useInView();
  const { lang, t } = useLanguage();

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container" ref={ref}>
        <SectionHeading
          id="skills-title"
          kicker={t.skills.kicker}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          color="magenta"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, gi) => {
            const c = tone[group.color];
            return (
              <div
                key={group.category.en}
                data-inview={inView}
                style={{ transitionDelay: `${gi * 0.08}s` }}
                className={`reveal group pixel-card border-2 border-border p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 ${c.border} ${c.glow}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded border-2 border-current ${c.text} transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
                  >
                    <group.icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-lg">{group.category[lang]}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-border bg-secondary px-2.5 py-1 text-sm transition-colors hover:border-current hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

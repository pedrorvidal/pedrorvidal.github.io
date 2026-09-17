import { useInView } from '@/hooks/useInView';

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  context?: string;
  description?: string;
  achievements?: string[];
}

const experience: ExperienceEntry[] = [
  {
    company: 'F2F Digital',
    role: 'WordPress / Full-Stack Developer',
    period: 'March 2023 – August 2026',
    context:
      'Development and maintenance lead across multiple simultaneous projects, including sole technical point of reference for the entire Merz Pharma network (Ultherapy, Confidence to Be Me, Merz Aesthetics) — multi-country sites in Argentina, Brazil, Colombia, and Mexico, integrated with Salesforce, Salesforce Marketing Cloud, and Crisalix — in addition to Medtronic, GLP, Alares, DiversiHub, Abrafati, Tinta de Qualidade, and Torrent Pharma.',
    achievements: [
      "Led the migration and performance/SEO turnaround of GLP's ~900-page investor-facing corporate site: found the root cause of ~390 broken links, cut mobile render-blocking time by 70–75%, and removed ~900 orphan pages.",
      'Responded to a security incident (possible malware) across a 5-site Ultherapy network, then standardized an AI-assisted WordPress core/Composer update routine across 10 repositories — cutting the update cycle from 1 week to 1 day.',
      "Built Alares' first e-commerce store, integrating every purchase attempt with RD Station as a lead — including sales lost to regional signal coverage — expanding the client's digital sales channel.",
      'Implemented 5 continuous integrations between multi-country landing pages and RD Station for Medtronic, normalizing divergent form fields across countries into a single CRM record and reaching 100% error-free lead capture.',
      'Fixed conversion-event failures distorting campaign data across a 5-site Merz Aesthetics network, restoring reliable analytics (Google Tag Manager/DataLayer) for the marketing team.',
      'Restored critical clinic-search functionality on the Confidence to Be Me platform by replacing a fragile in-house integration with the Google Places API + ViaCEP.',
      'Sped up delivery across multi-site WordPress/Bedrock codebases with AI-assisted development workflows (Claude Code) — technical planning, standardized execution, and diagnostic runbooks verified via WP-CLI and MySQL.',
    ],
  },
  {
    company: 'DEXA',
    role: 'WordPress Developer',
    period: 'January 2022 – March 2023',
    description:
      "Built WordPress sites and portals from Figma layouts, with automated deployments via Jenkins/GitHub Actions and custom ACF Pro plugins/blocks. Team contributor on Coty's international site; individually led the international Perch project with direct client contact. Built MinervaFoods' PEC data-management module — replacing Excel-based tracking — and contributed to the corporate portal rebuild, migrating from Divi to a custom theme with custom blocks.",
  },
  {
    company: 'PluralWeb',
    role: 'Full-Stack Developer',
    period: 'November 2016 – August 2017',
    description:
      'Built and maintained websites in WordPress, PHP, and CodeIgniter, including legacy AngularJS systems.',
  },
  {
    company: 'N49',
    role: 'Frontend Developer',
    period: 'June 2016 – October 2016',
    description:
      "Frontend development for internal systems and N49's proprietary e-commerce tool.",
  },
  {
    company: 'Join Tecnologia',
    role: 'PHP Developer',
    period: 'September 2015 – May 2016',
    description:
      'Built systems for the federal government using PHP OO, Symfony, Silex, and Doctrine on MySQL, PostgreSQL, and SQL Server — including a nationwide occupational health reporting system for SESI, integrated with a legacy Java/SQL Server system.',
  },
  {
    company: 'Rage Comunicação',
    role: 'Full-Stack Developer',
    period: 'October 2011 – August 2015',
    description:
      "Built websites, e-commerce stores (WooCommerce), and systems in WordPress and CodeIgniter. Sole developer responsible for the complete migration of a high-volume financial auction system from ASP/SQL Server to CodeIgniter/MySQL — with no data loss, no loss of transaction or user history, and no business downtime.",
  },
  {
    company: 'Freelancer',
    role: 'Full-Stack PHP Developer',
    period: 'November 2005 – September 2011',
    description:
      'Built websites and portals with WordPress, CodeIgniter, and MySQL, including database modeling and Linux/Apache environment setup.',
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            20+ years shipping and rescuing web platforms — from freelance
            projects to multi-country enterprise programs.
          </p>
        </div>

        <div className="relative pl-8 border-l-2 border-border space-y-12 max-w-3xl mx-auto">
          {experience.map((job, i) => (
            <div
              key={job.company + job.period}
              className="relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s ease-out ${i * 0.08}s`,
              }}
            >
              <div className="absolute -left-[2.05rem] top-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background" />

              <span className="text-xs font-mono text-primary">
                {job.period}
              </span>
              <h3 className="font-semibold text-lg mt-0.5">
                {job.role} — {job.company}
              </h3>

              {job.context && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {job.context}
                </p>
              )}

              {job.description && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {job.description}
                </p>
              )}

              {job.achievements && job.achievements.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {job.achievements.map((a, ai) => (
                    <li
                      key={ai}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

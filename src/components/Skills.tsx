import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    skills: [
      'PHP',
      'WordPress',
      'Laravel',
      'CodeIgniter',
      'Symfony',
      'Silex',
      'Doctrine',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'GraphQL'],
  },
  {
    category: 'Data & Infrastructure',
    skills: [
      'MySQL/MariaDB',
      'PostgreSQL',
      'SQL Server',
      'Docker',
      'REST APIs',
      'Git/GitHub/GitLab/Bitbucket',
    ],
  },
  {
    category: 'CI/CD & Tools',
    skills: [
      'GitHub Actions',
      'Bitbucket Pipelines',
      'Jenkins',
      'Vercel',
      'Figma',
      'Linux',
      'Drupal',
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      'Claude Code',
      'MCP',
      'Playwright',
      'Workflow Orchestration',
      'QA Automation',
    ],
  },
  {
    category: 'Methodologies & Soft Skills',
    skills: ['Scrum', 'Kanban', 'Communication', 'Problem Solving'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Stack</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="space-y-3"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${gi * 0.1}s`,
              }}
            >
              <h3 className="font-semibold text-lg">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

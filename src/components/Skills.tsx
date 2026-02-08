import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'HTML/CSS',
      'Vite',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'CI/CD', 'Vercel', 'AWS', 'Figma'],
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Problem Solving', 'Agile/Scrum', 'Mentoring'],
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

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

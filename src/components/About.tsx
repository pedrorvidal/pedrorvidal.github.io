import { useInView } from '@/hooks/useInView';

const timeline = [
  {
    year: '2023 - Present',
    title: 'Senior Developer',
    desc: 'WordPress/Laravel/React development at F2FDigital, leading projects and mentoring junior developers',
  },
  {
    year: '2011-2023',
    title: 'Senior Developer',
    desc: 'Worked at various companies, including startups and agencies, using WordPress, Node.js, Codeigniter, Drupal to build web applications',
  },
  {
    year: '2010',
    title: 'Full-stack Developer',
    desc: 'Started career at Digital Agency, using Wodpress & Codeigniter for web solutions',
  },
  {
    year: '2006',
    title: 'Junior Developer',
    desc: 'Started freelancing career, working with PHP & MySQL for local businesses',
  },
  {
    year: '2005',
    title: 'BSc Computer Science',
    desc: 'Graduated, focus on algorithms, binary trees & web technologies',
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

        <div className="max-w-2xl mx-auto space-y-6">
          <p
            className="text-muted-foreground leading-relaxed"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            I'm a developer passionate about creating clean, performant, and
            user-friendly web applications. I enjoy turning complex problems
            into simple, elegant solutions. When I'm not coding, you'll find me
            reading about design systems or experimenting with new technologies.
          </p>

          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-border space-y-8 mt-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.5s ease-out ${0.2 + i * 0.1}s`,
                }}
              >
                <div className="absolute -left-[1.3rem] top-1 h-3 w-3 rounded-full bg-primary" />
                <span className="text-xs font-mono text-primary">
                  {item.year}
                </span>
                <h4 className="font-semibold mt-0.5">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

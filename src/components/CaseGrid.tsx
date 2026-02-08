import { useState } from 'react';
import { cases } from '@/data/cases';
import type { Case } from '@/data/cases';
import CaseCard from './CaseCard';
import CaseModal from './CaseModal';
import { useInView } from '@/hooks/useInView';

export default function CaseGrid() {
  const [selected, setSelected] = useState<Case | null>(null);
  const { ref, inView } = useInView(0.05);

  return (
    <section id="cases" className="py-24">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Cases</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            A curated selection of projects I've worked on recently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard
              key={c.id}
              caseData={c}
              onSelect={setSelected}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease-out ${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <CaseModal
        caseData={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

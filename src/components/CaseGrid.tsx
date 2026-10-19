import { useMemo, useState } from 'react';
import { cases, localizeCase } from '@/data/cases';
import type { Case } from '@/data/cases';
import CaseCard from './CaseCard';
import CaseModal from './CaseModal';
import SectionHeading from './SectionHeading';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/i18n/useLanguage';
import { useCheat } from '@/cheat/context';

type Filter = 'all' | Case['kind'];

export default function CaseGrid() {
  const { lang, t } = useLanguage();
  const { cheat } = useCheat();
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { ref, inView } = useInView(0.05);

  const available = useMemo(
    () => cases.filter((c) => !c.secret || cheat).map((c) => localizeCase(c, lang)),
    [lang, cheat],
  );

  const visible = available.filter((c) => filter === 'all' || c.kind === filter);
  const featured = visible.filter((c) => c.featured);
  const regular = visible.filter((c) => !c.featured);
  // Modal navigation follows the on-screen order: boss stages first.
  const ordered = [...featured, ...regular];
  const stageOf = (c: Case) => ordered.indexOf(c) + 1;

  const selectedIndex = ordered.findIndex((c) => c.id === selectedId);
  const selected = selectedIndex >= 0 ? ordered[selectedIndex] : null;

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t.cases.filters.all },
    { key: 'client', label: t.cases.filters.client },
    { key: 'personal', label: t.cases.filters.personal },
  ];

  const count = (key: Filter) => available.filter((c) => key === 'all' || c.kind === key).length;

  return (
    <section id="cases" aria-labelledby="cases-title" className="py-24">
      <div className="container" ref={ref}>
        <SectionHeading id="cases-title" kicker={t.cases.kicker} title={t.cases.title} subtitle={t.cases.subtitle} />

        <div role="group" aria-label={t.cases.filterLabel} className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={`rounded border-2 px-4 py-2.5 font-arcade text-[0.625rem] uppercase transition-all ${
                  active
                    ? 'border-neon-cyan bg-neon-cyan text-primary-foreground shadow-[0_0_16px_hsl(var(--neon-cyan)/0.5)]'
                    : 'border-border text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan'
                }`}
              >
                {f.label} <span className="opacity-70">({count(f.key)})</span>
              </button>
            );
          })}
        </div>

        {visible.length === 0 && <p className="text-center text-muted-foreground">{t.cases.empty}</p>}

        {featured.length > 0 && (
          <>
            <h3 className="font-arcade text-xs uppercase text-neon-magenta mb-6">★ {t.cases.boss}</h3>
            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              {featured.map((c, i) => (
                <CaseCard
                  key={c.id}
                  caseData={c}
                  stageNumber={stageOf(c)}
                  onSelect={(sel) => setSelectedId(sel.id)}
                  featured
                  inView={inView}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </>
        )}

        {regular.length > 0 && (
          <>
            {featured.length > 0 && (
              <h3 className="font-arcade text-xs uppercase text-neon-cyan mb-6">▸ {t.cases.more}</h3>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((c, i) => (
                <CaseCard
                  key={c.id}
                  caseData={c}
                  stageNumber={stageOf(c)}
                  onSelect={(sel) => setSelectedId(sel.id)}
                  inView={inView}
                  delay={Math.min(i, 8) * 0.07}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <CaseModal
        caseData={selected}
        stageNumber={selectedIndex + 1}
        onClose={() => setSelectedId(null)}
        onPrev={selectedIndex > 0 ? () => setSelectedId(ordered[selectedIndex - 1].id) : undefined}
        onNext={
          selectedIndex >= 0 && selectedIndex < ordered.length - 1
            ? () => setSelectedId(ordered[selectedIndex + 1].id)
            : undefined
        }
      />
    </section>
  );
}

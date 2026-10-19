import { ChevronRight, Star } from 'lucide-react';
import type { Case } from '@/data/cases';
import { useLanguage } from '@/i18n/useLanguage';
import CaseCover from './CaseCover';

interface CaseCardProps {
  caseData: Case;
  stageNumber: number;
  onSelect: (c: Case) => void;
  featured?: boolean;
  inView: boolean;
  delay: number;
}

export default function CaseCard({ caseData, stageNumber, onSelect, featured, inView, delay }: CaseCardProps) {
  const { t } = useLanguage();
  const stage = `${t.cases.stage} ${String(stageNumber).padStart(2, '0')}`;
  const metric = caseData.metrics?.[0];
  const stackShown = caseData.stack.slice(0, featured ? 5 : 3);
  const titleId = `case-title-${caseData.id}`;

  return (
    <article
      aria-labelledby={titleId}
      data-featured={featured}
      data-inview={inView}
      style={{ transitionDelay: `${delay}s` }}
      className={`reveal neon-border group relative flex pixel-card border-border transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_hsl(var(--neon-cyan)/0.5)] ${
        featured ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      <div
        className={`relative overflow-hidden bg-secondary ${
          featured ? 'aspect-video lg:aspect-auto lg:w-1/2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none' : 'aspect-video rounded-t-xl'
        }`}
      >
        <CaseCover caseData={caseData} stage={stage} />
        <span className="absolute top-3 left-3 px-2 py-1 rounded bg-background/85 font-arcade text-[0.625rem] uppercase text-neon-cyan">
          {stage}
        </span>
        {featured && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded bg-neon-magenta font-arcade text-[0.625rem] text-white">
            BOSS
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col gap-3 p-5 ${featured ? 'lg:p-6' : ''}`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {caseData.clientOrProject} · {caseData.period}
        </p>

        <h3 id={titleId} className={`font-semibold leading-snug ${featured ? 'text-xl' : 'text-lg'}`}>
          {caseData.title}
        </h3>

        <p className={`text-muted-foreground ${featured ? '' : 'text-sm line-clamp-3'}`}>{caseData.summary}</p>

        {metric && (
          <p className="flex items-start gap-2 text-sm font-semibold text-neon-yellow">
            <Star size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            {metric}
          </p>
        )}

        <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Stack">
          {stackShown.map((tech) => (
            <li key={tech} className="text-xs px-2 py-0.5 rounded-sm border border-border bg-secondary">
              {tech}
            </li>
          ))}
          {caseData.stack.length > stackShown.length && (
            <li className="text-xs px-1 py-0.5 text-muted-foreground">+{caseData.stack.length - stackShown.length}</li>
          )}
        </ul>

        <button
          type="button"
          onClick={() => onSelect(caseData)}
          className="mt-auto pt-3 self-start inline-flex items-center gap-1 font-arcade text-[0.625rem] uppercase text-neon-cyan after:absolute after:inset-0 after:rounded-xl after:content-['']"
        >
          {t.cases.inspect}
          <span className="sr-only">: {caseData.title}</span>
          <ChevronRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

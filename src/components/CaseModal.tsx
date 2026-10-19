import { ExternalLink, Calendar, User, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import type { Case } from '@/data/cases';
import { useLanguage } from '@/i18n/useLanguage';
import CaseCover from './CaseCover';

interface CaseModalProps {
  caseData: Case | null;
  stageNumber: number;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const headingClass = 'font-arcade text-[0.625rem] uppercase text-neon-cyan mb-2';

export default function CaseModal({ caseData, stageNumber, onClose, onPrev, onNext }: CaseModalProps) {
  const { t } = useLanguage();
  if (!caseData) return null;

  const stage = `${t.cases.stage} ${String(stageNumber).padStart(2, '0')}`;

  return (
    <Dialog open onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-3xl max-h-[88vh] overflow-y-auto border-2 border-neon-cyan bg-card neon-box p-0 data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft' && onPrev) onPrev();
          if (e.key === 'ArrowRight' && onNext) onNext();
        }}
      >
        <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-secondary">
          <CaseCover caseData={caseData} stage={stage} className="group-hover:scale-100" />
          <span className="absolute top-3 left-3 px-2 py-1 rounded bg-background/85 font-arcade text-[0.625rem] uppercase text-neon-cyan">
            {stage}
          </span>
          <DialogClose
            aria-label={t.modal.close}
            className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded border-2 border-border bg-background/90 hover:border-neon-magenta hover:text-neon-magenta"
          >
            <X size={18} aria-hidden="true" />
          </DialogClose>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold leading-snug">{caseData.title}</DialogTitle>
            <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <User size={14} aria-hidden="true" /> {caseData.role}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} aria-hidden="true" /> {caseData.period}
              </span>
              <span>{caseData.clientOrProject}</span>
            </DialogDescription>
          </DialogHeader>

          <ul className="flex flex-wrap gap-2">
            {caseData.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-neon-magenta/50 bg-neon-magenta/10 px-3 py-1 text-xs font-semibold text-neon-magenta"
              >
                {tag}
              </li>
            ))}
          </ul>

          {caseData.metrics && caseData.metrics.length > 0 && (
            <div>
              <h3 className={headingClass}>{t.modal.results}</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {caseData.metrics.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-2 rounded-md border border-neon-yellow/40 bg-neon-yellow/10 px-3 py-2 text-sm font-semibold"
                  >
                    <Star size={14} className="mt-0.5 shrink-0 text-neon-yellow" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid gap-6 leading-relaxed">
            <div>
              <h3 className={headingClass}>{t.modal.problem}</h3>
              <p className="text-muted-foreground">{caseData.problem}</p>
            </div>
            <div>
              <h3 className={headingClass}>{t.modal.solution}</h3>
              <p className="text-muted-foreground">{caseData.solution}</p>
            </div>
          </div>

          {caseData.highlights.length > 0 && (
            <div>
              <h3 className={headingClass}>{t.modal.highlights}</h3>
              <ul className="space-y-1.5">
                {caseData.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-neon-cyan" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className={headingClass}>{t.modal.stack}</h3>
            <ul className="flex flex-wrap gap-2">
              {caseData.stack.map((tech) => (
                <li key={tech} className="text-sm px-2.5 py-1 rounded border border-border bg-secondary">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {caseData.links && caseData.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {caseData.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn border-2 border-neon-cyan text-neon-cyan bg-background py-2.5"
                >
                  {link.label} <ExternalLink size={12} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}

          <nav className="flex items-center justify-between gap-3 border-t border-border pt-5" aria-label={t.cases.stage}>
            <button
              type="button"
              onClick={onPrev}
              disabled={!onPrev}
              className="inline-flex items-center gap-1 font-arcade text-[0.625rem] uppercase text-muted-foreground hover:text-neon-cyan disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft size={14} aria-hidden="true" /> {t.modal.prev}
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!onNext}
              className="inline-flex items-center gap-1 font-arcade text-[0.625rem] uppercase text-muted-foreground hover:text-neon-cyan disabled:opacity-30 disabled:pointer-events-none"
            >
              {t.modal.next} <ChevronRight size={14} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}

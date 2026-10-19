import type { Case } from '@/data/cases';

interface CaseCoverProps {
  caseData: Case;
  stage: string;
  className?: string;
}

/** Case screenshot, or a generated pixel "stage" panel when there is no cover. */
export default function CaseCover({ caseData, stage, className = '' }: CaseCoverProps) {
  if (caseData.coverImage) {
    return (
      <img
        src={caseData.coverImage}
        alt=""
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
        className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${className}`}
      />
    );
  }

  const label =
    caseData.kind === 'personal'
      ? caseData.title.split(' — ')[0]
      : caseData.clientOrProject.replace(/\s*\(.*\)$/, '');

  return (
    <div
      aria-hidden="true"
      className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-secondary ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--neon-cyan) / 0.12) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan) / 0.12) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    >
      <span className="px-4 text-center font-arcade text-sm uppercase text-neon-cyan text-glow">
        {caseData.secret ? '???' : label}
      </span>
      <span className="font-arcade text-[0.625rem] text-neon-yellow">{caseData.secret ? stage : '</>'}</span>
    </div>
  );
}

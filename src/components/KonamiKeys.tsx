import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';

const KEYS: (LucideIcon | string)[] = [ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, 'B', 'A'];

/** The Konami code drawn as tiny keycaps (the pixel font has no ← → glyphs). */
export default function KonamiKeys({ className = '' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <kbd
      aria-label={t.cheat.keysLabel}
      className={`inline-flex flex-wrap items-center justify-center gap-1 font-arcade text-[0.5rem] not-italic ${className}`}
    >
      {KEYS.map((Key, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-current"
        >
          {typeof Key === 'string' ? Key : <Key size={10} strokeWidth={3} />}
        </span>
      ))}
    </kbd>
  );
}

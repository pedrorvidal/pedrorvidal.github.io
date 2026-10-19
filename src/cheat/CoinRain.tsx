import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const COINS = 36;

/** One-shot shower of pixel coins. Decorative only, skipped with reduced motion. */
export default function CoinRain() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  const coins = useMemo(
    () =>
      Array.from({ length: COINS }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        duration: 1.8 + Math.random() * 1.6,
        size: 12 + Math.round(Math.random() * 3) * 4,
      })),
    [],
  );

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 4800);
    return () => clearTimeout(id);
  }, []);

  if (reduced || done) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70] overflow-hidden">
      {coins.map((c) => (
        <span
          key={c.id}
          className="absolute top-0 animate-coin-fall rounded-sm border-2 border-yellow-700 bg-yellow-300"
          style={{
            left: `${c.left}%`,
            width: c.size,
            height: c.size,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            boxShadow: 'inset -3px -3px 0 0 rgb(202 138 4)',
          }}
        />
      ))}
    </div>
  );
}

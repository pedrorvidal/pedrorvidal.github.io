import { useEffect, useState } from 'react';

const HI_KEY = 'pv-hi-score';
const MAX_SCORE = 99999;

function readHi() {
  try {
    return Number(localStorage.getItem(HI_KEY)) || 0;
  } catch {
    return 0;
  }
}

/** Arcade-style score: how far down the page you've scrolled, plus a persisted high score. */
export function useScrollScore() {
  const [score, setScore] = useState(0);
  const [hi, setHi] = useState(readHi);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.round((window.scrollY / max) * MAX_SCORE) : 0;
      setScore(next);
      setHi((prev) => {
        if (next <= prev) return prev;
        try {
          localStorage.setItem(HI_KEY, String(next));
        } catch {
          // Ignore: high score just won't persist.
        }
        return next;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { score, hi };
}

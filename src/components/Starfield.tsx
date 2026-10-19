import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Star {
  x: number;
  y: number;
  z: number;
}

const COLORS = ['#00f0ff', '#ff3399', '#ffe600', '#ffffff'];

/** Fixed pixel starfield behind the page. Static when reduced motion is on. */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let stars: Star[] = [];
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.round((canvas.width * canvas.height) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 3 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const light = document.documentElement.classList.contains('light');
      ctx.globalAlpha = light ? 0.25 : 0.7;
      const scroll = window.scrollY;
      stars.forEach((s, i) => {
        // Parallax: closer stars (higher z) drift faster with scroll and time.
        const y = (s.y - scroll * s.z * 0.05 + canvas.height * 10) % canvas.height;
        ctx.fillStyle = light ? '#334155' : COLORS[i % COLORS.length];
        const size = s.z > 3 ? 3 : 2;
        ctx.fillRect(Math.round(s.x), Math.round(y), size, size);
        if (!reduced) s.x = (s.x + s.z * 0.08) % canvas.width;
      });
      if (!reduced) frame = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      if (reduced) draw();
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

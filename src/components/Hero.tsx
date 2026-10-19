import { useRef, useState, type PointerEvent } from 'react';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import KonamiKeys from './KonamiKeys';
import ImgAvatar from '@/assets/images/vidal-pixel-art.webp';
import ImgAvatarCheat from '@/assets/images/vidal-final-boss.webp';
import { useLanguage } from '@/i18n/useLanguage';
import { useCheat } from '@/cheat/context';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const resumeFiles = {
  en: 'Pedro-Vidal-Resume.pdf',
  pt: 'Pedro-Vidal-Curriculo.pdf',
};
const TAPS_TO_UNLOCK = 7;

export default function Hero() {
  const { lang, t } = useLanguage();
  const resumeFile = resumeFiles[lang];
  const { cheat, toggleCheat } = useCheat();
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const taps = useRef<number[]>([]);
  const [glitch, setGlitch] = useState(0);

  // Subtle 3D tilt that follows the pointer.
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };
  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  // Touch-friendly cheat: tap the avatar 7 times within 3 seconds.
  const onAvatarTap = () => {
    setGlitch((g) => g + 1);
    const now = Date.now();
    taps.current = [...taps.current.filter((ts) => now - ts < 3000), now];
    if (taps.current.length >= TAPS_TO_UNLOCK) {
      taps.current = [];
      toggleCheat();
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      <div className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-up">
            <p className="inline-block px-3 py-1.5 font-arcade text-[0.625rem] uppercase rounded-full border border-neon-magenta bg-neon-magenta/10 text-neon-magenta">
              <span className="motion-safe:animate-blink">▶</span> {t.hero.badge}
            </p>

            <h1 className="space-y-4">
              <span className="block font-arcade text-3xl sm:text-4xl lg:text-5xl text-foreground">
                Pedro <span className="text-neon-cyan text-glow">Vidal</span>
              </span>
              <span className="block text-2xl sm:text-3xl font-semibold text-foreground/90">
                {t.hero.role}
                <span aria-hidden="true" className="ml-1 text-neon-magenta motion-safe:animate-blink">
                  _
                </span>
              </span>
            </h1>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
              {t.hero.specialty.split(' · ').map((item) => (
                <li
                  key={item}
                  className="rounded border border-neon-yellow/50 bg-neon-yellow/10 px-2.5 py-1.5 font-arcade text-[0.625rem] text-neon-yellow"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.intro}
            </p>

            <p className="flex items-center justify-center lg:justify-start gap-1.5 text-muted-foreground">
              <MapPin size={16} aria-hidden="true" /> {t.hero.location}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#cases" className="pixel-btn bg-neon-cyan text-primary-foreground">
                {t.hero.ctaCases} <ArrowDown size={14} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="pixel-btn border-2 border-neon-magenta text-neon-magenta bg-background"
              >
                {t.hero.ctaContact}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}${resumeFile}`}
                download={resumeFile}
                className="pixel-btn border-2 border-border text-foreground bg-background"
              >
                <Download size={14} aria-hidden="true" /> {t.hero.ctaCv}
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 flex justify-center animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="w-full max-w-sm motion-safe:animate-float">
              <div
                ref={cardRef}
                onPointerMove={onPointerMove}
                onPointerLeave={resetTilt}
                className="relative p-3 border-2 border-neon-cyan rounded-xl bg-card neon-box transition-transform duration-150 ease-out"
              >
                <span className="absolute -top-3 left-6 px-2 bg-background font-arcade text-[0.625rem] uppercase text-neon-cyan">
                  {t.hero.player}
                </span>
                <button
                  type="button"
                  onClick={onAvatarTap}
                  aria-label={t.hero.avatarAlt}
                  className="block w-full overflow-hidden rounded border border-border"
                >
                  <img
                    key={glitch}
                    src={cheat ? ImgAvatarCheat : ImgAvatar}
                    alt={cheat ? t.hero.avatarAltCheat : t.hero.avatarAlt}
                    width={768}
                    height={768}
                    className={`w-full h-auto aspect-square object-cover hover:animate-glitch ${
                      glitch ? 'animate-glitch' : ''
                    }`}
                  />
                </button>
                <div
                  aria-hidden="true"
                  className="mt-4 flex justify-between items-center px-2 font-arcade text-[0.625rem] uppercase text-muted-foreground"
                >
                  <span>{cheat ? 'LIVES ×30' : 'SCORE 99999'}</span>
                  <span className="text-neon-yellow motion-safe:animate-blink">{t.hero.ready}</span>
                </div>
                {!cheat && (
                  <p className="mt-3 text-center font-arcade text-[0.625rem] uppercase text-neon-cyan/80 motion-safe:animate-pulse">
                    <span className="inline-flex flex-wrap items-center justify-center gap-2 touch:hidden">
                      {t.hero.codeHint} <KonamiKeys />
                    </span>
                    <span className="hidden touch:inline">{t.hero.tapHint}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

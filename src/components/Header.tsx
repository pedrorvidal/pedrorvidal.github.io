import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';
import { useCheat } from '@/cheat/context';
import { useScrollScore } from '@/hooks/useScrollScore';

const pad = (n: number) => String(n).padStart(5, '0');

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const { cheat } = useCheat();
  const { score, hi } = useScrollScore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // index.html applies the saved theme before first paint; start from it.
  const [dark, setDark] = useState(() => !document.documentElement.classList.contains('light'));

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.cases, href: '#cases' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
    try {
      localStorage.setItem('pv-theme', dark ? 'dark' : 'light');
    } catch {
      // Ignore: the choice just won't persist.
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconBtn =
    'inline-flex h-10 min-w-10 items-center justify-center rounded border px-2.5 font-arcade text-[0.625rem] transition-colors';

  const controls = (
    <>
      <button
        type="button"
        onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
        aria-label={t.nav.switchLang}
        lang={lang === 'en' ? 'pt-BR' : 'en'}
        className={`${iconBtn} border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10`}
      >
        {lang === 'en' ? 'PT' : 'EN'}
      </button>
      <button
        type="button"
        onClick={() => setDark(!dark)}
        aria-label={dark ? t.nav.toggleTheme : t.nav.toggleThemeLight}
        className={`${iconBtn} border-neon-yellow text-neon-yellow hover:bg-neon-yellow/10`}
      >
        {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
      </button>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/90 backdrop-blur-md border-b border-neon-cyan/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 gap-4">
        <a
          href="#home"
          className="flex items-center gap-2.5 whitespace-nowrap font-arcade text-[0.625rem] sm:text-xs text-neon-cyan text-glow"
        >
          <span aria-hidden="true" className="inline-block w-3 h-3 bg-neon-magenta animate-pulse" />
          1P · PEDRO VIDAL
        </a>

        {/* HUD: purely decorative scoreboard */}
        <div
          aria-hidden="true"
          className="hidden xl:flex items-center gap-5 whitespace-nowrap font-arcade text-[0.625rem] uppercase text-muted-foreground"
        >
          <span>
            {t.hud.score} <span className="text-foreground tabular-nums">{pad(score)}</span>
          </span>
          <span>
            {t.hud.hiScore} <span className="text-neon-yellow tabular-nums">{pad(hi)}</span>
          </span>
          <span>
            {t.hud.lives} <span className="text-neon-magenta">{cheat ? '♥ ×30' : '♥ ×3'}</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1" aria-label={t.nav.main}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap px-2.5 py-2 font-arcade text-[0.625rem] uppercase text-muted-foreground hover:text-neon-cyan transition-colors rounded"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3 flex items-center gap-2">{controls}</div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {controls}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={`${iconBtn} border-border text-foreground`}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-card/95 backdrop-blur-md border-b border-neon-cyan/30"
          aria-label={t.nav.mobile}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 font-arcade text-xs uppercase text-muted-foreground hover:text-neon-cyan transition-colors rounded"
              >
                ▸ {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

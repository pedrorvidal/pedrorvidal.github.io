import { useLanguage } from '@/i18n/useLanguage';
import KonamiKeys from './KonamiKeys';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 border-t border-border bg-card/60">
      <div className="container text-center space-y-2 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {t.footer.rights} {t.footer.built}
        </p>
        <p className="font-arcade text-[0.625rem] text-neon-cyan/80">{t.footer.hint}</p>
        <p className="font-arcade text-[0.625rem] text-neon-yellow/80">
          <KonamiKeys className="touch:hidden" />
          <span className="hidden touch:inline">{t.footer.tapHint}</span>
        </p>
      </div>
    </footer>
  );
}

import { useLanguage } from '@/i18n/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 border-t border-border bg-card/60">
      <div className="container text-center space-y-2 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {t.footer.rights} {t.footer.built}
        </p>
        <p className="font-arcade text-[0.625rem] text-neon-cyan/80" title="↑ ↑ ↓ ↓ ← → ← → B A">
          {t.footer.hint}
        </p>
      </div>
    </footer>
  );
}

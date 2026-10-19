import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import { CheatContext } from './context';
import { playPowerUp } from './sound';
import CoinRain from './CoinRain';
import { useKonami } from '@/hooks/useKonami';
import { useLanguage } from '@/i18n/useLanguage';

export function CheatProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [cheat, setCheat] = useState(false);
  const [rain, setRain] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.cheat = String(cheat);
  }, [cheat]);

  const toggleCheat = useCallback(() => {
    setCheat((on) => {
      const next = !on;
      playPowerUp(next);
      if (next) {
        setRain((n) => n + 1);
        toast.success(t.cheat.title, { description: t.cheat.body });
      } else {
        toast(t.cheat.off);
      }
      return next;
    });
  }, [t]);

  useKonami(toggleCheat);

  return (
    <CheatContext.Provider value={{ cheat, toggleCheat }}>
      {children}
      {rain > 0 && <CoinRain key={rain} />}
    </CheatContext.Provider>
  );
}

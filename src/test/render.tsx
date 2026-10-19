import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { CheatProvider } from '@/cheat/CheatProvider';

export function renderWithProviders(ui: ReactNode) {
  return render(
    <LanguageProvider>
      <CheatProvider>{ui}</CheatProvider>
    </LanguageProvider>,
  );
}

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { CheatProvider } from '@/cheat/CheatProvider';
import Index from './pages/Index';

const App = () => (
  <LanguageProvider>
    <CheatProvider>
      <TooltipProvider>
        <Toaster position="bottom-center" />
        <Index />
      </TooltipProvider>
    </CheatProvider>
  </LanguageProvider>
);

export default App;

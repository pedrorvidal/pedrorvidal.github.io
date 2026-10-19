import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseGrid from '@/components/CaseGrid';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import { useLanguage } from '@/i18n/useLanguage';

const Index = () => {
  const { lang } = useLanguage();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded focus:bg-neon-yellow focus:px-4 focus:py-2 focus:text-black"
      >
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>
      <Starfield />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <CaseGrid />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;

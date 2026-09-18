import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseGrid from '@/components/CaseGrid';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <CaseGrid />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;

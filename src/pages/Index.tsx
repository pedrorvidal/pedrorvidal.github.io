import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CaseGrid from '@/components/CaseGrid';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <CaseGrid />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;

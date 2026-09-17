import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
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
      <Experience />
      <CaseGrid />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;

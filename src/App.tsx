import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Education } from '@/sections/Education';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Certifications } from '@/sections/Certifications';
import { Volunteering } from '@/sections/Volunteering';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="drg-atmospheric-background" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;

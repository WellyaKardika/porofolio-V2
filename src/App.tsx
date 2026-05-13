import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;

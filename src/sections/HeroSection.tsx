import React from 'react';
import RevealText from '../components/RevealText';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-[100dvh] flex flex-col relative"
      style={{ overflowX: 'clip', backgroundColor: '#0C0C0C' }}
    >
      {/* Hero Heading */}
      <div className="overflow-hidden relative z-20 pt-28">
        <RevealText delay={0.15} duration={0.8}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[12vw] mt-6 sm:mt-4 md:-mt-5 px-2"
          >
            Hi, i&apos;m
          </h1>
        </RevealText>
        <RevealText delay={0.15} duration={0.8}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[12vw] px-2 pb-4"
          >
            Wellya
          </h1>
        </RevealText>
      </div>



      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-16 sm:pb-8 md:pb-10 relative z-20">
        {/* Left: tagline */}
        <RevealText delay={0.5} duration={0.8}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            wordpress by craft, frontend by passion <br /> one clean site at a time
          </p>
        </RevealText>

        {/* Right: Contact button */}
        <RevealText delay={0.5} duration={0.8}>
            <img 
              src="logo-about.png" 
              alt="Contact" 
              className="w-[100px] sm:w-[120px] md:w-[140px] select-none"
              draggable={false}
            />
        </RevealText>
      </div>
    </section>
  );
};

export default HeroSection;

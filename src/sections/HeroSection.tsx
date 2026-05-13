import React from 'react';
import RevealText from '../components/RevealText';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip', backgroundColor: '#0C0C0C' }}
    >
      {/* Hero Heading */}
      <div className="overflow-hidden relative z-20 pt-28">
        <RevealText delay={0.15} duration={0.8}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[12vw] mt-6 sm:mt-4 md:-mt-5 px-2 pb-4"
          >
            Hi, i&apos;m <br />Wellya
          </h1>
        </RevealText>
      </div>



      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        {/* Left: tagline */}
        <RevealText delay={0.35} duration={0.8}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            fresh eyes, sharp code — building the web one pixel at a time
          </p>
        </RevealText>

        {/* Right: Contact button */}
        <RevealText delay={0.5} duration={0.8}>
          <Button href="#contact">Contact Me</Button>
        </RevealText>
      </div>
    </section>
  );
};

export default HeroSection;

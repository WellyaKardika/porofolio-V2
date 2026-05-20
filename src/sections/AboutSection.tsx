import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import RevealText from '../components/RevealText';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 mt-30"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <RevealText delay={0.3} duration={0.8} margin="0px 0px -100px 0px">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight pb-2"
            style={{ fontSize: 'clamp(3rem, 12vw, 130px)' }}
          >
            About me
          </h2>
        </RevealText>

        {/* Text block + button */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <RevealText delay={0.25} duration={0.8}>
            <AnimatedText
              text={`I'm Wellya Kardika, **Web Developer** with experience building and maintaining responsive websites across real industries. **Skilled in WordPress, PHP, Laravel, and React** — with a strong eye for clean CSS and frontend detail. I've successfully deployed 3+ production websites, maintained 5+ outlet sites, and worked across teams to deliver solutions that actually work. \n\n Passionate about turning designs into functional, user-friendly experiences. Committed to writing clean, maintainable code that solves real problems.`}
              className="text-white font-normal text-center leading-relaxed max-w-[700px]"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
            />
          </RevealText>

          <RevealText delay={0.3} duration={0.8}>
            <Button href="#contact">Contact Me</Button>
          </RevealText>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import Button from '../components/Button';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const totalCards = projects.length;

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(
    scrollYProgress,
    [index / totalCards, 1],
    [1, targetScale]
  );

  return (
    <div
      className="sticky top-16 md:top-20 h-screen flex items-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="w-full"
        style={{
          scale,
          transformOrigin: 'top center',
          marginTop: `${index * 24}px`,
        }}
      >
        <div
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
          style={{ backgroundColor: '#0C0C0C' }}
        >
          {/* Top row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
            <div className="flex items-center gap-4 md:gap-6">
              {/* Number */}
              <span
                className="hero-heading font-black leading-none pb-2"
                style={{ fontSize: 'clamp(3rem, 8vw, 120px)' }}
              >
                {project.number}
              </span>
              {/* Category + Name */}
              <div className="flex flex-col">
                <span
                  className="text-[#D7E2EA] uppercase tracking-wider font-medium"
                  style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)', opacity: 0.6 }}
                >
                  {project.category}
                </span>
                <span
                  className="hero-heading font-black uppercase leading-tight pb-1"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
                >
                  {project.name}
                </span>
              </div>
            </div>
            <Button>Live Project</Button>
          </div>

          {/* Image grid */}
          <div className="flex gap-3 sm:gap-4">
            {/* Left column — 40% width, 2 stacked images */}
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>

            {/* Right column — 60% width, 1 tall image */}
            <div style={{ width: '60%' }}>
              <img
                src={project.col2Image}
                alt={`${project.name} main`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ minHeight: 'clamp(290px, 38vw, 570px)' }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Heading */}
      <RevealText delay={0} duration={0.8} margin="0px 0px -100px 0px">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28 pb-2"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </RevealText>

      {/* Sticky card stack container — needs enough height for all cards to scroll through */}
      <div ref={containerRef} className="pb-[50vh]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useTransition } from '../components/TransitionContext';
import RevealText from '../components/RevealText';
import { projects, ProjectData } from '../data/projects';
import Button from '../components/Button';

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({ project, index }) => {
  const { navigateWithTransition } = useTransition();

  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition(`/project/${project.id}`);
  };

  return (
    <RevealText delay={0.3} className="mb-24 md:mb-[calc(50%)]">
      <div 
        className="group cursor-pointer flex flex-col"
        onClick={handleProjectClick}
      >
        <div className="relative overflow-hidden mb-6 md:mb-8 bg-zinc-900 aspect-[4/2]">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex flex-col px-2">
          {/* Main Row: Title --- Logos & Button */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 sm:gap-6">
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase text-[#fff] tracking-tight leading-none">
              {project.name}
            </h3>

            {/* Right: Logos & Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                {project.techLogos.slice(0, 3).map((logo, i) => (
                  <img 
                    key={i} 
                    src={logo} 
                    alt="Tech Logo" 
                    className="h-6 sm:h-7 md:h-8 w-auto object-contain  opacity-60 group-hover:opacity-100 transition-opacity" 
                  />
                ))}
              </div>
              
              <Button onClick={handleProjectClick} className="whitespace-nowrap">
                See Detail
              </Button>
            </div>
          </div>

          {/* Bottom Row: Year (Independent, won't break title alignment) */}
          <div className="mt-2 sm:mt-3">
            <p className="text-white/50 text-xs sm:text-sm">{project.year}</p>
          </div>
        </div>
      </div>
    </RevealText>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14"
    >
      {/* Heading */}
      <RevealText delay={0} duration={0.8} margin="0px 0px -50px 0px">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-24 md:mb-32"
          style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
        >
          Project
        </h2>
      </RevealText>

      {/* 2-Column Grid Layout */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
        {/* Left Column (Even Indexes) */}
        <div className="flex flex-col">
          {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index * 2} />
          ))}
        </div>

        {/* Right Column (Odd Indexes) */}
        <div className="flex flex-col md:mt-[calc(50%)] lg:mt-[calc(50%)]">
          {projects.filter((_, i) => i % 2 !== 0).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index * 2 + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

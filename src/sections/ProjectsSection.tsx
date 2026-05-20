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
    <RevealText delay={0.3} className="w-full">
      <div 
        className="group cursor-pointer flex flex-col"
        onClick={handleProjectClick}
      >
        <div className="relative overflow-hidden mb-6 md:mb-8 bg-zinc-900 aspect-[16/9]">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex flex-col px-2">
          {/* Top Row: Title & Button */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase text-[#fff] tracking-tight leading-none">
              {project.name}
            </h3>
            <Button onClick={handleProjectClick} className="whitespace-nowrap shrink-0">
              See Detail
            </Button>
          </div>

          {/* Middle Row: Tech Logos */}
          <div className="mt-4 flex items-center gap-3">
            {project.techLogos.slice(0, 3).map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Tech Logo" 
                className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity" 
              />
            ))}
          </div>

          {/* Bottom Row: Year */}
          <div className="mt-2">
            <p className="text-white/50 text-xs sm:text-sm font-medium">{project.year}</p>
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
          style={{ fontSize: 'clamp(3rem, 12vw, 130px)' }}
        >
          Project
        </h2>
      </RevealText>

      {/* 2-Column Grid Layout */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-24 md:gap-y-0">
        {/* Left Column (Even Indexes) */}
        <div className="contents md:flex md:flex-col">
          {projects.filter((_, i) => i % 2 === 0).map((project, index, arr) => {
            const originalIndex = index * 2;
            const isLast = index === arr.length - 1;
            return (
              <div key={project.id} className={`flex flex-col ${isLast ? '' : 'md:mb-[calc(50%)]'}`} style={{ order: originalIndex }}>
                <ProjectCard project={project} index={originalIndex} />
              </div>
            );
          })}
        </div>

        {/* Right Column (Odd Indexes) */}
        <div className="contents md:flex md:flex-col md:mt-[calc(60%)] lg:mt-[calc(60%)]">
          {projects.filter((_, i) => i % 2 !== 0).map((project, index, arr) => {
            const originalIndex = index * 2 + 1;
            const isLast = index === arr.length - 1;
            return (
              <div key={project.id} className={`flex flex-col ${isLast ? '' : 'md:mb-[calc(50%)]'}`} style={{ order: originalIndex }}>
                <ProjectCard project={project} index={originalIndex} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

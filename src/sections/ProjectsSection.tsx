import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTransition } from '../components/TransitionContext';
import RevealText from '../components/RevealText';
import { projects, ProjectData } from '../data/projects';
import Button from '../components/Button';

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({ project, index }) => {
  const { navigateWithTransition } = useTransition();
  const [cursorVisible, setCursorVisible] = useState(false);
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  // Detect desktop (mouse device + min-width 1024px)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Only run RAF loop on desktop
  useEffect(() => {
    if (!isDesktop) return;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.1);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.1);
      setDisplayPos({ x: posRef.current.x, y: posRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDesktop]);

  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition(`/project/${project.id}`);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    targetRef.current = { x: e.clientX, y: e.clientY };
    setCursorVisible(true);
  }, [isDesktop]);

  const handleMouseLeave = useCallback(() => {
    if (!isDesktop) return;
    setCursorVisible(false);
  }, [isDesktop]);

  return (
    <RevealText delay={0.3} className="w-full">
      {/* Custom cursor — only rendered on desktop (pointer:fine + ≥1024px) */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none z-[9990] flex items-center justify-center rounded-full bg-white text-[#0C0C0C] font-semibold uppercase tracking-widest text-xs"
          style={{
            width: 90,
            height: 90,
            left: displayPos.x,
            top: displayPos.y,
            transform: `translate(-50%, -50%) scale(${cursorVisible ? 1 : 0})`,
            opacity: cursorVisible ? 1 : 0,
            transition: 'opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          View
        </div>
      )}

      <div
        className="group cursor-pointer flex flex-col"
        onClick={handleProjectClick}
      >
        <div
          className="relative overflow-hidden mb-6 md:mb-8 bg-zinc-900 aspect-[16/9]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex flex-col px-2">
          {/* Title Row */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase text-[#fff] tracking-tight leading-none">
              {project.name}
            </h3>
          </div>

          {/* Middle Row: Tech Logos */}
          <div className="mt-4 flex items-center gap-3">
            {project.techLogos.slice(0, 3).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Tech Logo"
                loading="lazy"
                decoding="async"
                className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          {/* Bottom Row: Year */}
          <div className="mt-2">
            <p className="text-white/50 text-xs sm:text-sm font-medium">{project.year}</p>
          </div>

          {/* Button: visible on mobile & tablet only, hidden on desktop */}
          <div className="mt-4 lg:hidden">
            <Button onClick={handleProjectClick}>
              See Detail
            </Button>
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
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Button from '../components/Button';
import { useTransition } from '../components/TransitionContext';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { navigateWithTransition } = useTransition();
  const project = projects.find((p) => p.id === id);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // 2 second delay before content shows up
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  // Find next project for the "Other Project" link
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div style={{ backgroundColor: '#0C0C0C', minHeight: '100vh', color: '#fff' }}>
      {showContent && (
        <>
          <Navbar />

          <main className="pt-24 pb-20 px-5 sm:px-8 md:px-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Back Button */}
              <div className="mb-10">
                <button
                  onClick={() => navigateWithTransition('/project')}
                  className="group inline-flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <img 
                      src="/icon/left-arrow.svg" 
                      alt="Back" 
                      className="w-5 h-5 object-contain invert group-hover:invert-0 transition-all duration-300" 
                    />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors duration-300">
                    Back to Projects
                  </span>
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative mb-16 md:mb-24">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto max-h-[70vh] object-contain md:object-cover rounded-3xl"
                />
                <div className="mt-8">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-tight">
                    {project.name}
                  </h1>
                  <div className="mt-6">
                    <Button href={project.liveUrl}>
                      Live Project
                    </Button>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-25 md:mb-32">
                <div className="md:col-span-7">
                  <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="md:col-span-5 grid grid-cols-3 gap-6 mb-12">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Year</h3>
                    <p className="text-white/70">{project.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Role</h3>
                    <p className="text-white/70">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Tech & Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techLogos.map((logo, i) => (
                        <img key={i} src={logo} alt="Tech Logo" className="h-6 md:h-7 w-auto object-contain" />
                      ))}
                      {project.techLogos.length === 0 && <span className="text-white/70">N/A</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Gallery Grid */}
              {project.gallery.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-24 md:mb-32">
                  {project.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      className={`rounded-3xl overflow-hidden ${
                        i === 0 ? 'md:col-span-1 md:row-span-2' : ''
                      } ${
                        i === 1 ? 'md:col-span-1 md:row-span-1' : ''
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${project.name} detail ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Next Project Link */}
              <div className="flex justify-end border-t border-white/10 pt-10">
                <div className="text-right">
                  <p className="text-sm text-white/50 mb-4">Other Project</p>
                  <Button
                    onClick={() => navigateWithTransition(`/project/${nextProject.id}`)}
                    className="inline-flex items-center gap-4 group"
                  >
                    {nextProject.name}
                    <span className="transform group-hover:translate-x-1 transition-transform inline-block ml-2">
                      <img 
                        src="/icon/up-right-arrow.png" 
                        alt="Arrow" 
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain invert group-hover:invert-0 transition-all duration-300" 
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default ProjectDetail;

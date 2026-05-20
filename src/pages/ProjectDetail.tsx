import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryCursorVisible, setGalleryCursorVisible] = useState(false);
  const [galleryDisplayPos, setGalleryDisplayPos] = useState({ x: 0, y: 0 });
  const galleryTargetRef = useRef({ x: 0, y: 0 });
  const galleryPosRef = useRef({ x: 0, y: 0 });
  const galleryRafRef = useRef<number>(0);
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      galleryPosRef.current.x = lerp(galleryPosRef.current.x, galleryTargetRef.current.x, 0.1);
      galleryPosRef.current.y = lerp(galleryPosRef.current.y, galleryTargetRef.current.y, 0.1);
      setGalleryDisplayPos({ x: galleryPosRef.current.x, y: galleryPosRef.current.y });
      galleryRafRef.current = requestAnimationFrame(animate);
    };
    galleryRafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(galleryRafRef.current);
  }, []);

  const handleGalleryMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    galleryTargetRef.current = { x: e.clientX, y: e.clientY };
    setGalleryCursorVisible(true);
  }, []);

  const handleGalleryMouseLeave = useCallback(() => {
    setGalleryCursorVisible(false);
  }, []);

  const getLogoName = (path: string) => {
    const filename = path.split('/').pop() ?? '';
    return filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? (i + 1) % (project?.gallery.length ?? 1) : null);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? (i - 1 + (project?.gallery.length ?? 1)) % (project?.gallery.length ?? 1) : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, project?.gallery.length]);

  if (!project) {
    return <Navigate to="/" />;
  }

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
                  onClick={() => {
                    sessionStorage.setItem('scrollTo', 'projects');
                    navigateWithTransition('/');
                  }}
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
                        <div key={i} className="relative group/logo flex flex-col items-center gap-2">
                          <img
                            src={logo}
                            alt={getLogoName(logo)}
                            loading="lazy"
                            decoding="async"
                            className="h-6 md:h-7 w-auto object-contain transition-opacity duration-300 group-hover/logo:opacity-100 opacity-70"
                          />
                          <span className="absolute top-full mt-1 text-[10px] font-medium uppercase tracking-wider text-white/60 whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 capitalize">
                            {getLogoName(logo)}
                          </span>
                        </div>
                      ))}
                      {project.techLogos.length === 0 && <span className="text-white/70">N/A</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Gallery — masonry columns agar tinggi tiap gambar natural */}
              {project.gallery.length > 0 && (
                <div className="columns-1 md:columns-2 gap-4 md:gap-6 mb-24 md:mb-32">
                  {/* Shared cursor */}
                  <div
                    className="fixed pointer-events-none z-[9990] flex items-center justify-center rounded-full bg-white text-[#0C0C0C] font-semibold uppercase tracking-widest text-xs"
                    style={{
                      width: 90,
                      height: 90,
                      left: galleryDisplayPos.x,
                      top: galleryDisplayPos.y,
                      transform: `translate(-50%, -50%) scale(${galleryCursorVisible ? 1 : 0})`,
                      opacity: galleryCursorVisible ? 1 : 0,
                      transition: 'opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    View
                  </div>

                  {project.gallery.map((img, i) => (
                    // break-inside-avoid: cegah gambar terpotong antar kolom
                    <div
                      key={i}
                      className="break-inside-avoid mb-4 md:mb-6 rounded-3xl overflow-hidden"
                    >
                      <div
                        ref={el => { galleryRefs.current[i] = el; }}
                        className="relative cursor-pointer group/img"
                        onClick={() => setLightboxIndex(i)}
                        onMouseMove={handleGalleryMouseMove}
                        onMouseLeave={handleGalleryMouseLeave}
                      >
                        {/* h-auto: tinggi mengikuti aspect ratio asli gambar */}
                        <img
                          src={img}
                          alt={`${project.name} detail ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto block transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Lightbox Modal */}
              <AnimatePresence>
                {lightboxIndex !== null && (
                  <motion.div
                    key="lightbox"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center"
                    onClick={() => setLightboxIndex(null)}
                  >
                    {/* Close */}
                    <button
                      className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest border border-white/20 hover:border-white px-4 py-2 rounded-full"
                      onClick={() => setLightboxIndex(null)}
                    >
                      Close
                    </button>

                    {/* Counter */}
                    <span className="absolute top-7 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                      {lightboxIndex + 1} / {project.gallery.length}
                    </span>

                    {/* Prev */}
                    {project.gallery.length > 1 && (
                      <button
                        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors p-3 rounded-full border border-white/20 hover:border-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
                        }}
                      >
                        <img src="/icon/left-arrow.svg" alt="Prev" className="w-5 h-5 invert" />
                      </button>
                    )}

                    {/* Image */}
                    <motion.img
                      key={lightboxIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      src={project.gallery[lightboxIndex]}
                      alt={`${project.name} detail ${lightboxIndex + 1}`}
                      className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />

                    {/* Next */}
                    {project.gallery.length > 1 && (
                      <button
                        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors p-3 rounded-full border border-white/20 hover:border-white rotate-180"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
                        }}
                      >
                        <img src="/icon/left-arrow.svg" alt="Next" className="w-5 h-5 invert" />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

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
                        src="/icon/up-right-arrow.svg"
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
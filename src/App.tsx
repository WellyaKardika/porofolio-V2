import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top or section on route change
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (location.pathname === '/') {
      const scrollTarget = sessionStorage.getItem('scrollTo');
      if (scrollTarget) {
        sessionStorage.removeItem('scrollTo');
        setTimeout(() => {
          const element = document.getElementById(scrollTarget);
          if (element) lenis.scrollTo(element, { offset: -80 });
        }, 100);
      }
    } else if (location.pathname === '/project') {
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) lenis.scrollTo(element, { offset: -80 });
      }, 100);
    } else if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) lenis.scrollTo(element, { offset: -80 });
      }, 100);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }

    return () => {
      lenis.destroy();
    };
  }, [location.pathname, location.hash]);

  return (
    <div style={{ backgroundColor: '#0C0C0C', overflowX: 'clip', minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;

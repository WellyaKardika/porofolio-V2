import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionContextType {
  navigateWithTransition: (to: string) => void;
  isAnimating: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

export const TransitionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  // Set to true by default to show preloader on first load/reload
  const [isAnimating, setIsAnimating] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [targetPath, setTargetPath] = useState<string | null>(null);

  const navigateWithTransition = (to: string) => {
    setIsInitialLoad(false);
    setTargetPath(to);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      if (targetPath) {
        // Route transition logic
        const timer = setTimeout(() => {
          navigate(targetPath);
          setTimeout(() => {
            setIsAnimating(false);
            setTargetPath(null);
          }, 500); // 500ms delay while fully white
        }, 800); // 800ms slide-in duration
        return () => clearTimeout(timer);
      } else {
        // Initial load logic
        const timer = setTimeout(() => {
          setIsAnimating(false);
        }, 1500); // Show preloader for 1.5s on entry
        return () => clearTimeout(timer);
      }
    }
  }, [isAnimating, targetPath, navigate]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isAnimating }}>
      {children}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="global-preloader"
            // Start exactly at 0 for initial load, otherwise slide from bottom
            initial={isInitialLoad ? { y: 0 } : { y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <img src="/logo-black.webp" alt="Wk Logo" className="w-24 md:w-32 h-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};

import React, { useRef, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < radius) {
      if (!isActive.current) {
        el.style.transition = activeTransition;
        isActive.current = true;
      }
      el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      el.style.willChange = 'transform';
    } else if (isActive.current) {
      el.style.transition = inactiveTransition;
      el.style.transform = 'translate3d(0, 0, 0)';
      isActive.current = false;
    }
  }, [padding, strength, activeTransition, inactiveTransition]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = inactiveTransition;
    el.style.transform = 'translate3d(0, 0, 0)';
    isActive.current = false;
  }, [inactiveTransition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Magnet;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedChar: React.FC<{
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}> = ({ char, progress, index, total }) => {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Invisible spacer to preserve layout */}
      <span style={{ opacity: 0, userSelect: 'none' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={{ lineHeight: 'inherit', ...style }}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          progress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </p>
  );
};

export default AnimatedText;

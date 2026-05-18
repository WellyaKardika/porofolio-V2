import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedWord: React.FC<{
  text: string;
  isBold: boolean;
  progress: MotionValue<number>;
  index: number;
  total: number;
}> = ({ text, isBold, progress, index, total }) => {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);

  if (text === '\n') {
    return <br />;
  }

  // Handle spaces explicitly so they render correctly and don't collapse weirdly in absolute positioning
  if (text === ' ') {
    return (
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ opacity: 0, userSelect: 'none' }}>&nbsp;</span>
        <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
          &nbsp;
        </motion.span>
      </span>
    );
  }

  return (
    <span style={{ position: 'relative', display: 'inline-block', fontWeight: isBold ? 700 : 'inherit' }}>
      <span style={{ opacity: 0, userSelect: 'none' }}>{text}</span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.30'],
  });

  const tokens: { text: string; isBold: boolean }[] = [];
  let currentWord = '';
  let isBold = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '*' && text[i + 1] === '*') {
      if (currentWord) {
        tokens.push({ text: currentWord, isBold });
        currentWord = '';
      }
      isBold = !isBold;
      i++; // skip second *
      continue;
    }
    
    if (text[i] === '\n') {
      if (currentWord) {
        tokens.push({ text: currentWord, isBold });
        currentWord = '';
      }
      tokens.push({ text: '\n', isBold: false });
      continue;
    }

    if (text[i] === ' ') {
      if (currentWord) {
        tokens.push({ text: currentWord, isBold });
        currentWord = '';
      }
      tokens.push({ text: ' ', isBold: false });
      continue;
    }

    currentWord += text[i];
  }

  if (currentWord) {
    tokens.push({ text: currentWord, isBold });
  }

  return (
    <p ref={ref} key={text} className={className} style={{ lineHeight: 'inherit', ...style }}>
      {tokens.map((item, i) => (
        <AnimatedWord
          key={i}
          text={item.text}
          isBold={item.isBold}
          progress={scrollYProgress}
          index={i}
          total={tokens.length}
        />
      ))}
    </p>
  );
};

export default AnimatedText;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track the scroll progress of this container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');
  let charCounter = 0;

  // Pre-calculate total characters to range map correctly
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center leading-relaxed select-none ${className}`}>
      {words.map((word, wIdx) => {
        const wordChars = word.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char, cIdx) => {
              const charIndex = charCounter++;
              // Calculate specific scroll threshold for this character
              const start = charIndex / totalChars;
              const end = Math.min(start + 0.05, 1); // Subtle delay overlap
              
              return (
                <AnimatedLetter
                  key={cIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, progress, range }) => {
  // Transform scroll progress to character opacity
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span 
      style={{ opacity }} 
      className="inline-block transition-opacity duration-75 text-primary-warm"
    >
      {char}
    </motion.span>
  );
};

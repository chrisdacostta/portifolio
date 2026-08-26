import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({ text, className = '', showAsterisk = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom cinematic ease
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        return (
          <span key={index} className="inline-block overflow-hidden mr-[0.22em] pb-[0.05em] relative">
            <motion.span
              variants={wordVariants}
              className="inline-block origin-bottom"
            >
              {word}
              {isLastWord && showAsterisk && (
                <span className="absolute top-[0.15em] -right-[0.25em] text-[0.35em] font-light text-accent">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
};

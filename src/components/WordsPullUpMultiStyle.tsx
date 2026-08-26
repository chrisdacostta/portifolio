import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
  justify?: 'justify-center' | 'justify-start' | 'justify-end';
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({ 
  segments, 
  className = '',
  justify = 'justify-center'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Compile words while preserving class styling
  const wordsWithStyle: { word: string; className: string }[] = [];
  
  segments.forEach((segment) => {
    // Split by spaces, filter out empty space strings
    const words = segment.text.split(' ');
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordsWithStyle.push({
          word,
          className: segment.className || '',
        });
      }
    });
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${justify} items-baseline ${className}`}
    >
      {wordsWithStyle.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] pb-[0.05em]">
          <motion.span
            variants={wordVariants}
            className={`inline-block ${item.className}`}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: 'left' | 'right' | 'up' | 'down';
}

export const AnimatedWrapper = ({
  children,
  className,
  from = 'right',
  delay = 0,
}: AnimatedWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShouldAnimate(true);
          }, delay * 1000);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (from) {
      case 'left':
        return 'translateX(-50px)';
      case 'right':
        return 'translateX(50px)';
      case 'up':
        return 'translateY(-50px)';
      case 'down':
        return 'translateY(50px)';
      default:
        return 'translateX(50px)';
    }
  };

  return (
    <div className={`${className} overflow-hidden`}>
      <motion.div
        ref={ref}
        className={className}
        initial={{
          opacity: 0,
          transform: getInitialTransform(),
        }}
        animate={
          shouldAnimate
            ? {
                opacity: 1,
                transform: 'translate(0px, 0px)',
              }
            : {}
        }
        transition={{
          duration: 0.75,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ willChange: 'transform, opacity' }}>
        {children}
      </motion.div>
    </div>
  );
};

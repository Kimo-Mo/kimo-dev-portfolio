'use client';

import { useInView, motion } from 'motion/react';
import { easeInOut } from 'motion';
import { useRef } from 'react';

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
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const initial = {
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    up: { opacity: 0, y: -40 },
    down: { opacity: 0, y: 40 },
  }[from];
  const transition = {
    duration: 0.3,
    ease: easeInOut,
    delay,
  };
  const animate = inView
    ? { opacity: 1, x: 0, y: 0 }
    : {
        opacity: 0.2,
        ...(from === 'left'
          ? { x: -20 }
          : from === 'right'
          ? { x: 20 }
          : from === 'up'
          ? { y: -20 }
          : { y: 20 }),
      };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}>
      {children}
    </motion.div>
  );
}

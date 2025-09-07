'use client';

import { useInView, motion } from 'motion/react';
import { easeOut } from 'motion';
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
    left: { opacity: 0, x: -75 },
    right: { opacity: 0, x: 75 },
    up: { opacity: 0, y: -75 },
    down: { opacity: 0, y: 75 },
  }[from];
  const transition = {
    duration: 0.45,
    ease: easeOut,
    delay,
  };
  const animate = inView
    ? { opacity: 1, x: 0, y: 0 }
    : {
        opacity: 0,
        ...(from === 'left'
          ? { x: -75 }
          : from === 'right'
          ? { x: 75 }
          : from === 'up'
          ? { y: -75 }
          : { y: 75 }),
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

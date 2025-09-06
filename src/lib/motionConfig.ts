'use client';
import { easeInOut } from 'motion';

export const motionConfig = {
  transition: {
    duration: 0.3,
    ease: easeInOut,
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: motionConfig.transition },
};

export const slideInMinLeft = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: motionConfig.transition },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: motionConfig.transition },
};

export const slideInMinRight = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0, transition: motionConfig.transition },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: motionConfig.transition },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each child
      ...motionConfig.transition,
    },
  },
};

import React from 'react';
import * as motion from 'motion/react-client';
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/lib/motionConfig';
import { IButton } from '../shared';
const ExperienceSection = () => {
  return (
    <section className="flex flex-col !min-h-fit lg:flex-row items-center justify-between gap-10 mt-10 bg-gradient text-primary-foreground pb-[2rem] lg:pb-[3.5rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        variants={staggerContainer}
        className="flex-1 flex flex-col items-start">
        <motion.p
          variants={slideInRight}
          className="italic font-semibold capitalize">
          experience
        </motion.p>
        <motion.h2
          variants={slideInRight}
          className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
          my experience
        </motion.h2>
        <motion.p variants={slideInRight} className="mb-10">
          I Completed practical internships and built real-world projects
          deployed online. Skilled in API integration, performance optimization,
          and writing clean, maintainable code. Eager to contribute to dynamic
          teams and continuously grow in a professional environment.
        </motion.p>
        <motion.div variants={slideInRight} className="flex items-center gap-2">
          <IButton text="download my cv" />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        variants={staggerContainer}
        className="flex-1 flex justify-center flex-col gap-10 w-full">
        <motion.div
          variants={slideInLeft}
          className="border-b border-border pb-4">
          <p className="capitalize text-lg flex justify-between items-center mb-3">
            <span> - jul 2025 - present</span>
            <span> - Buguard </span>
          </p>
          <h2 className="text-2xl font-bold">Frontend Developer, Intern</h2>
        </motion.div>
        <motion.div
          variants={slideInLeft}
          className="border-b border-border pb-4">
          <p className="capitalize text-lg flex justify-between items-center mb-3">
            <span> -jul 2024 - sep 2024</span>
            <span> - ITI </span>
          </p>
          <h2 className="text-2xl font-bold">Frontend Developer, Intern</h2>
        </motion.div>
        <motion.div
          variants={slideInLeft}
          className="border-b border-border pb-4">
          <p className="capitalize text-lg flex justify-between items-center mb-3">
            <span> - 2022 - present</span>
            <span> - freelance </span>
          </p>
          <h2 className="text-2xl font-bold">Frontend Developer</h2>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;

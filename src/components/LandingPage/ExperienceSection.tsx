import { IButton } from '../shared';
import { AnimatedWrapper } from '@/components/shared';
import Link from 'next/link';

const experiences = [
  {
    date: '- jul 2025 - present',
    company: '- Buguard',
    title: 'Frontend Developer, Intern',
  },
  {
    date: '- jul 2024 - sep 2024',
    company: '- ITI',
    title: 'Frontend Developer, Intern',
  },
  {
    date: '- 2022 - present',
    company: '- freelance',
    title: 'Frontend Developer',
  },
]

const ExperienceSection = () => {
  return (
    <section className="flex flex-col !min-h-fit lg:flex-row items-center justify-between gap-10 mt-10 bg-gradient text-primary-foreground pb-[2rem] lg:pb-[3.5rem]">
      <div className="flex-1 flex flex-col items-start">
        <AnimatedWrapper from="right">
          <p className="italic font-semibold capitalize">experience</p>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <h2 className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
            my experience
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <p className="mb-10">
            I completed practical internships and built real-world projects
            deployed online. Skilled in API integration, performance
            optimization, and writing clean, maintainable code. Eager to
            contribute to dynamic teams and continuously grow in a professional
            environment.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <Link
            href="https://drive.google.com/uc?export=download&id=1VOUbQJKR343CxeQg87A773tlt8QNM9xj"
            download>
            <IButton text="download my cv" />
          </Link>
        </AnimatedWrapper>
      </div>
      <div className="flex-1 flex justify-center flex-col gap-10 w-full">
        {experiences.map((ex,i) => (
          <AnimatedWrapper from="left" delay={i * 0.15} key={i}>
            <div className="border-b border-border pb-4">
              <p className="capitalize text-lg flex justify-between items-center mb-3">
                <span> {ex.date}</span>
                <span> {ex.company}</span>
              </p>
              <h2 className="text-2xl font-bold">{ex.title}</h2>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

import { skills } from '@/services/data';
import { AnimatedWrapper } from '../shared';
import Image from 'next/image';

const SkillsSection = () => {
  return (
    <section className="!min-h-fit mt-10 bg-gradient text-primary-foreground pb-[2rem] lg:pb-[3.5rem]">
      <AnimatedWrapper from="left">
        <p className="italic font-semibold capitalize">skills</p>
      </AnimatedWrapper>
      <AnimatedWrapper from="left">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
          my skills
        </h2>
      </AnimatedWrapper>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
        {skills.map((skill) => (
          <AnimatedWrapper key={skill.id} delay={0.05 * skill.id} from="left">
            <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-2xl bg-background text-primary *:first:size-20 *:first:object-contain shadow">
              <Image
                src={skill.imgSrc}
                alt={skill.name}
                width={80}
                height={80}
                className={
                  skill.name === 'Next.js'
                    ? 'dark:bg-primary dark:rounded-full'
                    : skill.name === 'GitHub'
                    ? 'dark:bg-primary dark:rounded-full dark:p-1'
                    : skill.name === 'shadcn/ui'
                    ? 'dark:bg-primary dark:rounded-2xl'
                    : ''
                }
              />
              <span className="font-semibold uppercase text-base">
                {skill.name}
              </span>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

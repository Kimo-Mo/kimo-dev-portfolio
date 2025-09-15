import { skills } from '@/services/data';
import { AnimatedWrapper } from '../shared';

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
              {skill.img}
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

import { AnimatedWrapper, IButton } from '../shared';
import { projects } from '@/services/data';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section id="projects" className="!min-h-fit">
      <AnimatedWrapper from="left">
        <p className="italic font-semibold capitalize">projects</p>
      </AnimatedWrapper>
      <AnimatedWrapper from="left">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
          my projects
        </h2>
      </AnimatedWrapper>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <AnimatedWrapper key={project.id} from="right" delay={0.1 * idx}>
            <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center justify-center gap-8">
              <div className="flex-1 flex flex-col gap-4">
                <p className="font-semibold uppercase text-xl">
                  {project.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 *:flex-1 *:lg:flex-none">
                  <Link href={project.demoLink} target="_blank" className="*:w-full *:lg:w-auto">
                    <IButton text="view project"/>
                  </Link>
                  <Link href={project.githubLink} target="_blank" className="*:w-full *:lg:w-auto">
                    <IButton text="Source Code"/>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-auto h-auto rounded-2xl shadow-sm"
              />
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link href="https://github.com/Kimo-Mo" target="_blank">
          <IButton text="all projects" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;

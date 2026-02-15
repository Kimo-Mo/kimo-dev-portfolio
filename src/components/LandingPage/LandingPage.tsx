import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import { ServicesSection } from './ServicesSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import { ContactSection } from './ContactSection';

const LandingPage = () => {
  return (
    <main className="lg:ml-[285px] *:min-h-screen *:pt-[2rem] *:lg:pt-[3.5rem] *:px-5 *:md:px-10 *:lg:px-20">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;

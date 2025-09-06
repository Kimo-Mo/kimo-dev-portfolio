import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';

const LandingPage = () => {
  return (
    <main className="lg:ml-[285px] mb-10 *:min-h-screen *:pt-[2rem] *:lg:pt-[3.5rem] *:px-[2rem] *:lg:px-[5.5rem]">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
};

export default LandingPage;

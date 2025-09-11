import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';

const LandingPage = () => {
  return (
    <main className="lg:ml-[285px] mb-10 *:min-h-screen *:pt-[2rem] *:lg:pt-[3.5rem] *:px-5 *:lg:px-20">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
};

export default LandingPage;

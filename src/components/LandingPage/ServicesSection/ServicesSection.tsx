import { AnimatedWrapper } from '../../shared';
import ServicesAccordion from './ServicesAccordion';

const ServicesSection = () => {
  return (
    <section id="services">
      <AnimatedWrapper from="left">
        <p className="italic font-semibold capitalize">services</p>
      </AnimatedWrapper>
      <AnimatedWrapper from="left">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
          my specialties
        </h2>
      </AnimatedWrapper>
      <ServicesAccordion />
    </section>
  );
};

export default ServicesSection;

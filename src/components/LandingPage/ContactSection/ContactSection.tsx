import { personalData } from '@/services/data';
import { AnimatedWrapper } from '../../shared';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contacts" className="flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
        <article className="flex-1 flex flex-col gap-6">
          <AnimatedWrapper from="left">
            <p className="italic font-semibold capitalize">contact</p>
          </AnimatedWrapper>
          <AnimatedWrapper from="left">
            <h2 className="text-2xl lg:text-4xl font-bold uppercase mt-4 mb-10">
              get in touch
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper from="left">
            <p>
              I'm here to help! Whether you have questions, need support, or
              want to collaborate, feel free to reach out. Let's connect and
              make something great together!
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper from="left">
            <p className="font-semibold text-xl">{personalData.phone}</p>
          </AnimatedWrapper>
          <AnimatedWrapper from="left">
            <p className="font-bold text-xl">{personalData.email}</p>
          </AnimatedWrapper>
        </article>
        <article className="flex-2 w-full sm:w-3/4">
          <ContactForm />
        </article>
      </div>
    </section>
  );
};

export default ContactSection;

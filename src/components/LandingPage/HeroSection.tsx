import Image from 'next/image';
import { AnimatedWrapper, IButton } from '../shared';
import Link from 'next/link';
import { personalData } from '@/services/data';

const HeroSection = () => {
  const { firstName, lastName } = personalData;
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between"
      id="home">
      <article className="mt-16 lg:mt-0">
        <AnimatedWrapper from="right">
          <h1 className="text-3xl lg:text-5xl uppercase mb-6">
            my name <br className="hidden lg:block" /> is{' '}
            <br className="block lg:hidden" />
            <span className="font-bold bg-gradient bg-clip-text text-transparent">
              {firstName} <br className="hidden lg:block" /> {lastName}...
            </span>
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper from="left">
          <p className="text-xl font-bold capitalize mb-10">
            front end developer{' '}
            <span className="font-normal">based in Egypt</span>
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <Link href="#contacts">
            <IButton text="lets talk with me" />
          </Link>
        </AnimatedWrapper>
      </article>
      <AnimatedWrapper from="left">
        <div>
          <Image
            src="/images/hero.png"
            alt="hero"
            priority
            width={450}
            height={520}
            className="min-w-[50%] w-auto h-auto"
          />
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default HeroSection;

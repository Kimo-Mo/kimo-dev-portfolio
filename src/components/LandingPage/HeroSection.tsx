import Image from 'next/image';

import { IButton, MyInfo } from '../shared';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { personalData } from '@/services/data';
import * as motion from 'motion/react-client';
import { slideInLeft, slideInRight } from '@/lib/motionConfig';

const HeroSection = () => {
  const { firstName, lastName, phone, email } = personalData;
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between mt-16 lg:mt-0"
      id="home">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInRight}>
        <h1 className="text-3xl lg:text-5xl uppercase mb-6">
          my name <br className="hidden lg:block" /> is{' '}
          <br className="block lg:hidden" />
          <span className="font-bold bg-gradient bg-clip-text text-transparent">
            {firstName} <br className="hidden lg:block" /> {lastName}...
          </span>
        </h1>
        <p className="text-xl font-bold capitalize mb-10">
          front end developer{' '}
          <span className="font-normal">based in Egypt</span>
        </p>
        <Link href="#contact">
          <IButton text="lets talk with me" />
        </Link>
        <div className="mt-10 flex items-center gap-x-6 gap-y-2 flex-wrap">
          <MyInfo text={phone} icon={<Phone />} />
          <MyInfo text={email} icon={<Mail />} />
        </div>
      </motion.article>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInLeft}>
        <Image
          src="/images/hero.png"
          alt="hero"
          priority
          width={450}
          height={520}
          className="min-w-[50%] w-auto h-auto"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

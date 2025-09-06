import { personalData } from '@/services/data';
import Image from 'next/image';
import { IButton, MyInfo } from '../shared';
import { Mail, MapPin, Phone, SquareUserRound } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { slideInLeft, slideInRight } from '@/lib/motionConfig';
import { QuoteDown } from 'iconsax-reactjs';

const age = new Date().getFullYear() - personalData.birthYear;

const AboutSection = () => {
  const { firstName, lastName, phone, email, address } = personalData;

  return (
    <section id="about">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInLeft}
        className="italic font-semibold capitalize">
        Nice to meet you!
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInLeft}
        className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
        Welcome to...
      </motion.h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideInRight}
          className="text-center flex-2/5">
          <Image
            src="/images/about.png"
            alt="about"
            width={430}
            height={480}
            priority
            className="w-auto h-auto"
          />
          <h3 className="text-2xl lg:text-4xl font-bold capitalize bg-gradient bg-clip-text text-transparent mt-4 mb-3">
            {firstName} {lastName}
          </h3>
          <p className="text-xl font-bold capitalize mb-10">
            front end developer{' '}
            <span className="font-normal">based in Egypt</span>
          </p>
          <Link
            href="https://drive.google.com/uc?export=download&id=1VOUbQJKR343CxeQg87A773tlt8QNM9xj"
            download>
            <IButton text="download cv" />
          </Link>
        </motion.div>
        <div className="flex flex-col gap-10 flex-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-10 border-b border-border">
            <MyInfo text={phone} icon={<Phone />} />
            <MyInfo text={`${age} yrs`} icon={<SquareUserRound />} />
            <MyInfo text={email} icon={<Mail />} />
            <MyInfo text={address} icon={<MapPin />} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
            className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2 font-bold">
                <span className="font-bold text-5xl bg-gradient bg-clip-text text-transparent">
                  1+
                </span>
                <span className="italic font-bold">
                  Years <br /> experience...
                </span>
              </p>
              <p>
                Hello there! My name is{' '}
                <span className="text-gradient-start">
                  {firstName} {lastName}
                </span>
                . I am a Frontend Developer with hands-on experience building
                responsive and user-focused web applications using Next.js,
                React.js, Redux Toolkit, and modern UI libraries like Tailwind
                CSS and Bootstrap.
              </p>
            </div>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
            className="flex items-center gap-2 bg-primary text-primary-foreground p-5 italic font-semibold">
            <QuoteDown size="46" color="#555" variant="Bold" />
            &quot;Design is not just what it looks like and feels like. <br />{' '}
            Design is how it works.&quot; - Steve Jobs
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

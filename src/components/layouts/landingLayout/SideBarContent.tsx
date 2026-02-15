import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ThemeSwitch } from '@/components/ui';
import { socialLinks } from '@/services/data';
import { AnimatedWrapper } from '@/components/shared';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface SideBarContentProps {
  setOpen: (open: boolean) => void;
}

const SideBarContent = ({ setOpen }: SideBarContentProps) => {
  const [selectedLink, setSelectedLink] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedLink(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h1 className="font-serif text-3xl font-bold italic">
        <Link href="/">KM</Link>
      </h1>
      <div className="flex flex-col gap-5 text-lg">
        {sections.map((s, i) => (
          <AnimatedWrapper
            delay={0.15 * i}
            key={s.id}
            from="left">
            <Link
              className={`nav-link ${selectedLink === s.id ? 'selected' : ''}`}
              href={`#${s.id}`}
              onClick={() => {
                setSelectedLink(s.id);
                setOpen(false);
              }}>
              {s.label}
            </Link>
          </AnimatedWrapper>
        ))}
      </div>
      <div className="flex flex-col gap-7.5">
        <AnimatedWrapper from="left">
          <ThemeSwitch />
        </AnimatedWrapper>
        <AnimatedWrapper from="left" delay={0.15}>
          <div className="flex gap-3 *:p-2 *:bg-background *:dark:bg-background/10 *:rounded-full">
            {socialLinks.map((s) => (
              <Link key={s.id} target="_blank" href={s.href}>
                <Image
                  src={`/social-icons/${s.id}.svg`}
                  alt={s.id}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper from="left" delay={0.30}>
          <p>Copyright &copy;2025 Kimo Dev. All rights reserved.</p>
        </AnimatedWrapper>
      </div>
    </>
  );
};

export default SideBarContent;

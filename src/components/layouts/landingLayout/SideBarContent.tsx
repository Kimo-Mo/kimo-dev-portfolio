import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ThemeSwitch } from '@/components/ui';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
];
const socialLinks = [
  { id: 'linkedin', href: 'https://www.linkedin.com/in/kareem-dev/' },
  { id: 'github', href: 'https://github.com/kimo-mo' },
  { id: 'instagram', href: 'https://www.instagram.com/kareem_mohamed_19/' },
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
      { threshold: 0.6 } // 60% of section must be visible
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
      <ul className="flex flex-col gap-5 text-xl">
        {sections.map((s) => (
          <li key={s.id}>
            <Link
              className={`nav-link ${selectedLink === s.id ? 'selected' : ''}`}
              href={`#${s.id}`}
              onClick={() => {
                setSelectedLink(s.id);
                setOpen(false);
              }}>
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-7.5">
        <ThemeSwitch />
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
        <p>Copyright &copy;2025 Kimo Dev. All right reserved.</p>
      </div>
    </>
  );
};

export default SideBarContent;

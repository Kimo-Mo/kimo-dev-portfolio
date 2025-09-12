import { socialLinks } from '@/services/data';
import Link from 'next/link';
import Image from 'next/image';

export const SocialLinks = () => {
  return (
    <div className="fixed top-0 h-screen end-4 w-fit z-10 flex items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        {socialLinks.map((s) => (
          <Link
            key={s.id}
            target="_blank"
            href={s.href}
            className="p-3 dark:bg-primary border border-border rounded-full">
            <Image
              src={`/social-icons/${s.id}.svg`}
              alt={s.id}
              width={16}
              height={16}
            />
          </Link>
        ))}
        <span className="block w-[2px] h-20 bg-primary rounded-xl"></span>
      </div>
    </div>
  );
};

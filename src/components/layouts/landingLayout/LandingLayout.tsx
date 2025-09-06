'use client';
import SideBar from './SideBar';

import { useState } from 'react';
import Drawer from './Drawer';
import { HamburgerMenu } from 'iconsax-reactjs';
import Link from 'next/link';
import { SocialLinks } from '@/components/shared';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex relative">
      <SideBar setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <div className="flex-1">
        <div className="lg:hidden px-4 py-4 flex justify-between items-center fixed top-0 start-0 w-full z-50 bg-background border-b border-border">
          <h1 className="font-serif text-2xl font-bold italic">
            <Link href="/">KM</Link>
          </h1>
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <HamburgerMenu />
          </span>
        </div>
        {children}
      </div>
      <SocialLinks />
    </div>
  );
};

export default LandingLayout;

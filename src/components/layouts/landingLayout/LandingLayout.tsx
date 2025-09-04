'use client';
import SideBar from './SideBar';

import { useState } from 'react';
import Drawer from './Drawer';
import { HamburgerMenu } from 'iconsax-reactjs';
import Link from 'next/link';
const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <SideBar />
      <Drawer open={open} setOpen={setOpen} />
      <div className="flex-1">
        <div className="lg:hidden px-[3rem] lg:px-[9.25rem] py-4 flex justify-between items-center sticky top-0 z-50 bg-background border-b border-border">
          <h1 className="font-serif text-2xl font-bold italic">
            <Link href="/">KM</Link>
          </h1>
          <HamburgerMenu onClick={() => setOpen(!open)} />
        </div>
        <div className="px-[3rem] lg:px-[9.25rem]">{children}</div>
      </div>
    </div>
  );
};

export default LandingLayout;

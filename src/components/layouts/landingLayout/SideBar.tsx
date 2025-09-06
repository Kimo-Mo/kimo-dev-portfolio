'use client';

import SideBarContent from './SideBarContent';

interface SideBarProps {
  setOpen: (open: boolean) => void;
}

const SideBar = ({ setOpen }: SideBarProps) => {
  return (
    <div
      className="hidden lg:flex flex-col justify-between w-[285px] bg-primary text-primary-foreground h-screen fixed start-0 top-0 overflow-hidden p-12 z-50">
      <SideBarContent setOpen={setOpen} />
    </div>
  );
};

export default SideBar;

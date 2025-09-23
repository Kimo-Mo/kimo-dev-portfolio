'use client';

import SideBarContent from './SideBarContent';

interface SideBarProps {
  setOpen: (open: boolean) => void;
}

const SideBar = ({ setOpen }: SideBarProps) => {
  return (
    <div
      className="hidden lg:flex flex-col gap-y-4 justify-between w-[285px] bg-primary text-primary-foreground h-screen fixed start-0 top-0 overflow-hidden p-12 z-50 overflow-y-auto">
      <SideBarContent setOpen={setOpen} />
    </div>
  );
};

export default SideBar;

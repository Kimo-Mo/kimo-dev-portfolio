'use client';

import SideBarContent from './SideBarContent';

const SideBar = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between w-[285px] bg-primary text-primary-foreground h-screen sticky top-0 overflow-hidden p-12">
      <SideBarContent />
    </div>
  );
};

export default SideBar;

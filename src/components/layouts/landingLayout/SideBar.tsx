'use client';
import * as motion from 'motion/react-client';
import SideBarContent from './SideBarContent';

interface SideBarProps {
  setOpen: (open: boolean) => void;
}

const SideBar = ({ setOpen }: SideBarProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-col justify-between w-[285px] bg-primary text-primary-foreground h-screen fixed start-0 top-0 overflow-hidden p-12 z-50">
      <SideBarContent setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;

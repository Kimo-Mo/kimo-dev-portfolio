'use client';

import * as React from 'react';
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer as UIDrawer,
} from '@/components/ui';
import SideBarContent from './SideBarContent';
import { CloseSquare } from 'iconsax-reactjs';

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Drawer = ({ open, setOpen }: DrawerProps) => {
  return (
    <UIDrawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerContent className="lg:hidden bg-primary text-primary-foreground h-screen fixed top-0 left-0 outline-none w-3/4 max-w-xs">
        <div className="hidden">
          <DrawerHeader>
            <DrawerTitle />
            <DrawerDescription />
          </DrawerHeader>
        </div>
        <DrawerTrigger className='p-5 cursor-pointer w-fit'>
          <CloseSquare />
        </DrawerTrigger>
        <div
          className="flex flex-col gap-y-4 justify-between w-full bg-primary text-primary-foreground h-screen sticky top-0 overflow-hidden md:p-12 p-5 pt-0 overflow-y-auto">
          <SideBarContent setOpen={setOpen} />
        </div>
      </DrawerContent>
    </UIDrawer>
  );
};

export default Drawer;

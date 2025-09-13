import { MoveUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const IButton = ({ text }: { text: string }) => {
  return (
    <Button size="lg" className="group cursor-pointer capitalize rounded">
      {text}
      <MoveUpRight
        className="-me-1 w-fit transition-transform duration-150 group-hover:translate-x-1 bg-gradient size-6"
        size={24}
        color="var(--primary-foreground)"
        aria-hidden="true"
      />
    </Button>
  );
};
export { IButton };

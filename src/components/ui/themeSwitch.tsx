'use client';

import { useId } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="relative inline-grid h-8 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id={id}
          checked={theme === 'light'}
          onCheckedChange={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
          className="peer data-[state=checked]:bg-primary-foreground data-[state=unchecked]:bg-primary-foreground absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full cursor-pointer"
          aria-label="Toggle dark/light theme"
        />
        <span className="peer-data-[state=checked]:text-primary pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
          <MoonIcon size={16} aria-hidden="true" />
        </span>
        <span className="peer-data-[state=unchecked]:text-primary pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
          <SunIcon size={16} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

import { LandingLayout } from '@/components/layouts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kimo Dev Portfolio',
  description: 'Kimo Dev Portfolio',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <LandingLayout>{children}</LandingLayout>;
};

export default layout;

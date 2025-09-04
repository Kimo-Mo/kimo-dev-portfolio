import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layouts';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${ibmPlexSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

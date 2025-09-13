import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layouts';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata = {
  title: 'Kimo Mo | Developer Portfolio',
  description:
    'Portfolio website of Kimo Mo: Web Developer, Designer, and Creator.',
  openGraph: {
    title: 'Kimo Mo | Developer Portfolio',
    description:
      'Portfolio website of Kimo Mo: Web Developer, Designer, and Creator.',
    url: 'https://kimo-dev-portfolio.vercel.app/',
    siteName: 'Kimo Mo',
    images: [
      {
        url: 'https://kimo-dev-portfolio.vercel.app/images/about.png',
        width: 1200,
        height: 630,
        alt: 'Kimo Mo Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimo Mo | Developer Portfolio',
    description:
      'Portfolio website of Kimo Mo: Web Developer, Designer, and Creator.',
    images: ['https://kimo-dev-portfolio.vercel.app/images/about.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kimo Mo',
              url: 'https://kimo-dev-portfolio.vercel.app/',
              image: 'https://kimo-dev-portfolio.vercel.app/images/about.png',
              jobTitle: 'Web Developer, Designer, Creator',
              sameAs: [
                'https://github.com/Kimo-Mo',
                'https://linkedin.com/in/kareem-dev',
                'https://instagram.com/kareem_mohamed_19',
              ],
              description:
                'Portfolio website of Kimo Mo: Web Developer, Designer, and Creator.',
            }),
          }}
        />
      </head>
      <body className={`${ibmPlexSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

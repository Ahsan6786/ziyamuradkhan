
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Ziya Murad Khan | Banking & Telecom Portfolio',
  description:
    'Explore the portfolio of Ziya Murad Khan, a results-driven sales leader and banking service provider with over 12 years of experience in the banking and telecom sectors. Specializing in corporate sales, team leadership, and strategic account management.',
  keywords: ['Ziya Murad Khan', 'Ziya Khan', 'banking services', 'telecom sales', 'corporate sales', 'sales leader', 'RBL Bank', 'IndusInd Bank', 'portfolio']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400&family=Belleza&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

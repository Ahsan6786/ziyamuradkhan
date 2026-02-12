
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const title = "Ziya Murad Khan | Banking & Telecom Sales Leader";
const description = "Explore the portfolio of Ziya Murad Khan, a results-driven sales leader and banking service provider with over 12 years of experience in the banking and telecom sectors. Specializing in corporate sales, team leadership, and strategic account management.";


export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    'Ziya Murad Khan', 
    'Ziya Khan', 
    'banking services', 
    'telecom sales', 
    'corporate sales', 
    'sales leader', 
    'RBL Bank', 
    'IndusInd Bank', 
    'portfolio', 
    'best banking service provider', 
    'strategic account management', 
    'team leadership'
  ],
  creator: "Ziya Murad Khan",
  authors: [{ name: "Ziya Murad Khan" }],
  openGraph: {
    title: title,
    description: "Portfolio of Ziya Murad Khan, showcasing over 12 years of experience and achievements in the banking and telecom industries.",
    siteName: "Ziya Murad Khan Portfolio",
    images: [
      {
        url: "/image1.png?v=2",
        width: 800,
        height: 600,
        alt: "Ziya Murad Khan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: "Portfolio of Ziya Murad Khan, showcasing over 12 years of experience.",
    images: ["/image1.png?v=2"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ziya Murad Khan',
  image: '/image1.png',
  sameAs: [
    'https://www.linkedin.com/in/ziyamkhan/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    'https://twitter.com',
    'https://instagram.com',
  ],
  jobTitle: 'Sales Leader in Banking & Telecom',
  worksFor: {
    '@type': 'Organization',
    name: 'RBL Bank',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

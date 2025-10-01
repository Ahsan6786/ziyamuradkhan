import { Hero } from '@/components/landing/hero';
import { Achievements } from '@/components/landing/achievements';
import { Competencies } from '@/components/landing/competencies';
import { Experience } from '@/components/landing/experience';
import { Skills } from '@/components/landing/skills';
import { Contact } from '@/components/landing/contact';
import { Separator } from '@/components/ui/separator';
import {
  Linkedin,
  Instagram,
  Github,
  Twitter,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

function Header() {
  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { icon: <Github className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
  ];

  return (
    <header className="py-6 px-4 md:px-6 absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-headline tracking-tight text-primary font-bold">
            ZIYA
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="hover:text-primary transition-colors"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 bg-background text-foreground/60 mt-12 md:mt-24">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ziya Khan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24 mt-16 md:mt-24">
          <Achievements />
          <Separator />
          <Competencies />
          <Separator />
          <Experience />
          <Separator />
          <Skills />
          <Separator />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Experience } from '@/components/landing/experience';
import { Skills } from '@/components/landing/skills';
import { Contact } from '@/components/landing/contact';
import { Certificates } from '@/components/landing/certificates';
import { Testimonials } from '@/components/landing/testimonials';
import {
  Linkedin,
  Instagram,
  Twitter,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

function Header() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/ziyamkhan/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
  ];

  return (
    <header className="py-4 px-4 md:px-6 absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-headline tracking-tight text-primary font-bold">
            ZIYA
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-primary transition-colors"
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-16">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex items-center gap-4 mt-auto mb-6">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-background text-foreground/60">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ziya Khan. All Rights Reserved.</p>
        <p className="mt-2">
          Built with Next.js and Tailwind CSS. Hosted on Firebase.
        </p>
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
        <div className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-32 my-20 md:my-32">
          <About />
          <Experience />
          <Skills />
          <Certificates />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

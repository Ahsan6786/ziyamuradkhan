import { Hero } from '@/components/landing/hero';
import { Achievements } from '@/components/landing/achievements';
import { Competencies } from '@/components/landing/competencies';
import { Experience } from '@/components/landing/experience';
import { Skills } from '@/components/landing/skills';
import { Contact } from '@/components/landing/contact';
import { Separator } from '@/components/ui/separator';

function Header() {
  return (
    <header className="py-6 px-4 md:px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-headline tracking-tight text-primary">
          Ziya Khan
        </h1>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 bg-secondary text-secondary-foreground mt-12 md:mt-24">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ziya Khan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          <Hero />
          <Separator />
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

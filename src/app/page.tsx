import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Experience } from '@/components/landing/experience';
import { Skills } from '@/components/landing/skills';
import { Contact } from '@/components/landing/contact';
import { Testimonials } from '@/components/landing/testimonials';
import { Certificates } from '@/components/landing/certificates';
import { Header, Footer } from '@/components/layout/nav';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-40 my-20 md:my-32">
          <About />
          <Experience />
          <Skills />
          <Certificates />
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}


import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 pt-8"
    >
      <div className="md:w-2/3 space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
          Driving Growth in Banking & Telecom
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          A seasoned executive with over 15 years of experience steering digital
          transformation, P&L management, and strategic growth. Proven track
          record in launching innovative products and enhancing customer
          experiences across the financial and telecommunications sectors.
        </p>
        <div className="flex gap-4 pt-4 justify-center md:justify-start">
          <a href="#contact">
            <Button size="lg">Get in Touch</Button>
          </a>
          <a href="#experience">
            <Button size="lg" variant="secondary">
              View Experience
            </Button>
          </a>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Image
          src="/ziya.png"
          alt="Ziya Murad Khan"
          width={300}
          height={300}
          className="rounded-full object-cover shadow-2xl border-8 border-card"
        />
      </div>
    </section>
  );
}

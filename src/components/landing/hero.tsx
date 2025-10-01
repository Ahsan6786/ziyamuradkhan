import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="relative container mx-auto grid md:grid-cols-2 items-center gap-8 px-4">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-lg uppercase tracking-widest">Hello</p>
          <h1 className="text-5xl md:text-7xl font-bold">
            I am <span className="text-primary">Ziya</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            A seasoned executive with over 15 years of experience steering
            digital transformation, P&L management, and strategic growth.
          </p>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a href="#contact">
              <Button size="lg" className="font-bold">
                HIRE ME
              </Button>
            </a>
            <a href="#experience">
              <Button size="lg" variant="outline" className="font-bold">
                MY WORKS
              </Button>
            </a>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-auto flex justify-center md:justify-end items-end">
          <Image
            src="/ziya.png"
            alt="Ziya Murad Khan"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

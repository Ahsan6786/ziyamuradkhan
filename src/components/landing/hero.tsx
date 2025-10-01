import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/ziya.png"
          alt="Background"
          fill
          className="object-cover"
          data-ai-hint="office workspace"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="mb-8">
          <Image
            src="/ziya.png"
            alt="Ziya Murad Khan"
            width={180}
            height={180}
            className="rounded-full object-cover shadow-2xl border-4 border-primary/50 mx-auto"
          />
        </div>
        <p className="text-lg uppercase tracking-widest text-primary font-semibold mb-2">
          Ziya Murad Khan
        </p>
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
          Driving Growth in Banking & Telecom
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
          A seasoned executive with over 15 years of experience steering digital
          transformation, P&L management, and strategic growth.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" className="font-bold text-lg px-8 py-6">
              Get in Touch
            </Button>
          </a>
          <a href="#experience">
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-lg px-8 py-6 border-2"
            >
              View Experience
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#achievements">
          <ArrowDown className="w-8 h-8 text-white/70 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

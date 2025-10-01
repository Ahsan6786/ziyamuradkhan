import {Button} from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[800px] flex items-center bg-background"
    >
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-48 md:pt-0">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl md:text-2xl uppercase tracking-widest text-primary font-semibold mb-3">
            Ziya Murad Khan
          </p>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white">
            Driving Growth in Banking & Telecom
          </h1>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
        <Image
          src="/ziya.png"
          alt="Ziya Murad Khan"
          fill
          className="object-cover"
          data-ai-hint="professional portrait"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Mobile background */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/ziya.png"
          alt="Background"
          fill
          className="object-cover"
          data-ai-hint="professional portrait"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>
    </section>
  );
}

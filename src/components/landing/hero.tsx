import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[800px] flex items-center bg-background"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <div className="md:hidden h-full w-full">
          <Image
            src="/image1.png"
            alt="Ziya Murad Khan"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/image1.png"
            alt="Ziya Murad Khan"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
            priority
          />
           {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-56 md:pt-0">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl md:text-2xl uppercase tracking-widest text-primary font-semibold mb-3">
            Ziya Murad Khan
          </p>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white">
            Driving Growth in Banking & Telecom
          </h1>
        </div>
      </div>
    </section>
  );
}

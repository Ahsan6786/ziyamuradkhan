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
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ziya Murad Khan"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ziya Murad Khan"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
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
    </section>
  );
}

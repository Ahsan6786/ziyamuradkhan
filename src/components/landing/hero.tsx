import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export function Hero() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/ziyamkhan/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com' },
    { icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com' },
  ];

  return (
    <section
      id="hero"
      className="relative h-[80vh] min-h-[600px] max-h-[700px] md:max-h-[800px] flex items-center bg-background"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <div className="md:hidden h-full w-full">
          <Image
            src="/og-profile.png"
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
            src="/og-profile.png"
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
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-xl md:text-2xl uppercase tracking-widest text-primary font-semibold mb-3">
            Ziya Murad Khan
          </p>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white">
            Driving Growth in Banking & Telecom
          </h1>
          <div className="mt-8 flex justify-center md:justify-start gap-6">
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
        </div>
      </div>
    </section>
  );
}

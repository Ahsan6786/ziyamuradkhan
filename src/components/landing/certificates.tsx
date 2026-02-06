"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay"

const awardsData = [
    { fileName: '/a1.png', title: 'Health Insurance Excellence' },
    { fileName: '/a2.png', title: 'Certificate of Appreciation' },
    { fileName: '/a3.png', title: 'Outstanding Performance GI' },
    { fileName: '/a4.png', title: 'Business Excellence Star' },
    { fileName: '/a5.png', title: 'GI Business Performance' },
    { fileName: '/a6.png', title: 'Outstanding GI Performance' },
    { fileName: '/a7.png', title: 'Exceptional Business Performance' },
    { fileName: '/a9.png', title: 'Cluster-Level Excellence' },
    { fileName: '/a10.png', title: 'Special Recognition' },
    { fileName: '/a11.png', title: 'Best TL of the Month' },
    { fileName: '/a12.png', title: 'Top Performer Award' },
    { fileName: '/a13.png', title: 'Centurion Club' },
];


export function Certificates() {

  return (
    <section id="awards-gallery" className="space-y-12 animate-in" style={{ animationDelay: '600ms' }}>
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Awards & Recognitions
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          A gallery of my professional achievements and accolades.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {awardsData.map((award, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative bg-muted/20">
                      <Image
                        src={award.fileName}
                        alt={award.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

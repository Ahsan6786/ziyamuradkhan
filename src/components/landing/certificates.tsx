import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const certificateImages = [
  '/certificate1.jpg',
  '/certificate2.jpg',
  '/certificate3.jpg',
  '/certificate4.jpg',
  '/certificate5.jpg',
];

export function Certificates() {
  return (
    <section id="certificates" className="space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Certificates
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          A collection of my professional certifications and qualifications.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {certificateImages.map((src, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Certificate ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}

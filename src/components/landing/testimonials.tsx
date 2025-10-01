"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Asad K.',
    title:
      'Head of Solution Consulting & Delivery Ops | Helping enterprise teams achieve mobility with AI + No‑Code | Driving faster time‑to‑value and lower TCO.',
    relation: 'April 3, 2020, Asad was ZM’s client',
    testimonial:
      'Ziya is a tenacious person who dares to speak his opinions and ensures that he adds value to any team he is a part of. He has the drive to perform at the highest levels regardless of what the circumstances are. He looks to be the best at everything he does and never settles for anything less. I would highly recommend Ziya if you are looking for someone who will be diligent at his code of conduct and add value to your team through relentless effort to perform great.',
    avatar: 'https://picsum.photos/seed/asad/100/100',
  },
  {
    name: 'Arbab Omar Khan',
    title: 'Technical Section Lead-Ultraviolette Automotive',
    relation: 'May 31, 2020, Arbab Omar was ZM’s client',
    testimonial:
      'Mr. Khan is one of the true professional sales personal. Very efficient in building client relations, always eager to resolve and address queries.',
    avatar: 'https://picsum.photos/seed/arbab/100/100',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Testimonials
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          What my clients and colleagues say about me.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/1">
              <div className="p-4">
                <Card className="bg-card/50 backdrop-blur-sm border-border/20 rounded-xl">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-24 h-24 border-4 border-primary/50">
                        <AvatarImage src={item.avatar} alt={item.name} />
                        <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-lg italic text-foreground/80 border-l-4 border-primary pl-4">
                        {item.testimonial}
                      </blockquote>
                      <div className="space-y-1">
                        <p className="font-bold text-lg text-primary">
                          {item.name}
                        </p>
                        <p className="text-sm text-foreground/70">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.relation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:-left-12" />
        <CarouselNext className="right-2 md:-right-12" />
      </Carousel>
    </section>
  );
}

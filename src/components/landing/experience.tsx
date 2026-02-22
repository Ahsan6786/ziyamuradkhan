'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Building, CalendarDays, Briefcase } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    role: 'Senior Manager',
    company: 'RBL Bank',
    period: 'Sep 2023 - November 2025',
    details: [
      'Managed customer relationships and provided private banking services.',
      'Managed salary accounts and cross-selling via long-term engagement with HR/Admin/Finance heads.',
      'Collaborated with channel partners for product upsell including loans, insurance, and forex.',
      'Achieved multiple awards for service and client success.',
    ],
  },
  {
    role: 'Manager of Sales',
    company: 'IndusInd Bank',
    period: 'Oct 2021 - Aug 2023',
    details: [
      'Managed salary accounts and cross-selling via long-term engagement with HR/Admin/Finance heads.',
      'Collaborated with channel partners for product upsell including loans, insurance, and forex.',
      'Achieved multiple awards for service and client success.',
    ],
  },
  {
    role: 'Cluster Manager',
    company: 'Spectra',
    period: 'Oct 2019 - Sep 2021',
    details: [
      'Led B2B sales in Managed WiFi, ILL, SD-WAN with a team of 8 sales associates.',
      'Handled top clients including Jamia Hamdard, Hindustan Power, and Jagran Prakashan.',
      'Delivered full-cycle telecom solutions to large enterprise clients.',
    ],
  },
  {
    role: 'National Key Account Manager',
    company: 'Matrix Cellular (International) Services Ltd.',
    period: 'Mar 2019 - Oct 2019',
    details: [
      'Managed SIM, Forex, and Travel Insurance sales via SME Channel.',
      'Top performer in August 2019 with 166% of target achieved.',
      'Handled accounts including PepsiCo, Ernst & Young, GE, and SBI.',
    ],
  },
  {
    role: 'Channel Manager (SME)',
    company: 'Reliance Communications',
    period: 'Nov 2009 - Mar 2017',
    details: [
      'Managed 35–40 sales associates and channel partners in the SME vertical.',
      'Oversaw wireless data, broadband, and postpaid mobility solutions.',
      'Conducted demos and activations for IBM, Wipro, Microsoft, and Perfetti.',
      'Promoted 3 times and awarded for leadership & performance.',
    ],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="space-y-16">
      <ScrollReveal>
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            A decade-long journey of driving innovation and excellence in Sales and Leadership.
          </p>
        </div>
      </ScrollReveal>

      <div ref={containerRef} className="relative max-w-4xl mx-auto px-2">
        {/* Animated Timeline Line */}
        <div className="absolute left-6 md:left-8 top-0 h-full w-1 bg-primary/10 transform -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="h-full w-full bg-primary"
          />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-20">
              {/* Animated Marker */}
              <ScrollReveal delay={index * 0.05}>
                <div className="absolute left-6 md:left-8 top-6 h-7 w-7 md:h-8 md:w-8 bg-background border-4 border-primary rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center shadow-lg shadow-primary/20">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={index * 0.08}>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border-primary/5 bg-card/40 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 hidden md:block">
                      <Briefcase className="w-24 h-24 text-primary" />
                    </div>
                    <CardHeader className="p-5 md:p-6">
                      <CardTitle className="font-headline text-2xl md:text-3xl text-primary leading-tight">
                        {exp.role}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-muted-foreground pt-2">
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 md:p-6 pt-0 md:pt-0">
                      <ul className="grid sm:grid-cols-1 gap-2 md:gap-3">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed text-sm md:text-base">
                            <span className="text-primary font-bold mt-1.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


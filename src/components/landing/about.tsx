'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal, FadeIn, StaggerContainer } from '@/components/ui/scroll-reveal';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { motion } from 'framer-motion';

const achievements = [
  'Acquired and managed 250+ corporate clients across multiple industries',
  'Led and retained a 35+ member sales team with 0% attrition over 18 months',
  'Awarded Best Performer/Team Leader 10+ times across multiple organizations',
  'Built strategic partnerships that boosted product penetration significantly',
];

const competencies = [
  'Corporate Sales & Strategic Account Management',
  'Team Building, Coaching & Leadership',
  'Client Acquisition & Retention',
  'Cross-Selling: Insurance, Salary A/c, Forex & Telecom Products',
  'Channel Partner Management & Alliances',
  'Target Planning, Business Forecasting & Growth Strategies',
  'Excellent Negotiation, Communication & Interpersonal Skills',
];

export function About() {
  return (
    <section id="about" className="space-y-16">
      <ScrollReveal>
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
            About Ziya Murad Khan
          </h2>
          <div className="max-w-4xl mx-auto">
            <SpotlightCard>
              <Card className="bg-transparent border-none shadow-none overflow-hidden relative p-8">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-2xl text-primary">
                    Professional Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-left">
                    Dynamic and result-oriented Sales Leader with over 12 years of
                    experience across Banking and Telecommunications industries.
                    Expert in B2B & corporate sales, strategic account management,
                    and high-performance team leadership. Known for exceeding
                    targets, strengthening channel partnerships, and delivering
                    consistent sales growth.
                  </p>
                </CardContent>
              </Card>
            </SpotlightCard>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-10">
        <ScrollReveal delay={0.1}>
          <SpotlightCard className="h-full">
            <Card className="h-full bg-transparent border-none shadow-none p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </span>
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-left">
                <StaggerContainer>
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80 leading-snug">{item}</p>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </SpotlightCard>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <SpotlightCard className="h-full">
            <Card className="h-full bg-transparent border-none shadow-none p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </span>
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-left">
                <StaggerContainer>
                  {competencies.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80 leading-snug">{item}</p>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}


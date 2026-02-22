'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Handshake,
  Briefcase,
  Award,
  BarChart3,
  Presentation,
  ShieldCheck,
  Target,
  Rocket
} from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

const technicalSkills = [
  {
    name: 'Corporate Sales & B2B',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    desc: 'Acquiring and managing high-value corporate clients'
  },
  {
    name: 'Team Leadership',
    icon: <Users className="w-6 h-6 text-primary" />,
    desc: 'Leading large teams with focus on performance and culture'
  },
  {
    name: 'Strategic Management',
    icon: <Handshake className="w-6 h-6 text-primary" />,
    desc: 'Building long-term alliances and key accounts'
  },
  {
    name: 'Channel Alliances',
    icon: <Zap className="w-6 h-6 text-primary" />,
    desc: 'Developing robust external sales channels'
  },
  {
    name: 'Business Strategy',
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    desc: 'Data-driven forecasting and growth planning'
  },
  {
    name: 'Market Expansion',
    icon: <Rocket className="w-6 h-6 text-primary" />,
    desc: 'Identifying new opportunities in Banking & Telecom'
  },
];

const softSkills = [
  { name: 'Negotiation', icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Public Speaking', icon: <Presentation className="w-5 h-5" /> },
  { name: 'Mentorship', icon: <Users className="w-5 h-5" /> },
  { name: 'Client CRM', icon: <Handshake className="w-5 h-5" /> },
  { name: 'Risk Management', icon: <ShieldCheck className="w-5 h-5" /> },
  { name: 'Target Focus', icon: <Target className="w-5 h-5" /> },
];

import { SpotlightCard } from '@/components/ui/spotlight-card';

export function Skills() {
  return (
    <section id="skills" className="space-y-16">
      <ScrollReveal>
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A diverse toolkit for modern business challenges, blending technical
            sales acumen with strong visionary leadership.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-20">
        <div>
          <ScrollReveal>
            <h3 className="text-2xl font-headline font-semibold mb-8 border-l-4 border-primary pl-4">
              Core Expertise
            </h3>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="group"
                >
                  <SpotlightCard className="h-full">
                    <Card className="h-full bg-transparent border-none shadow-none p-6 space-y-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <div className="text-center md:text-left space-y-2">
                        <CardTitle className="text-xl font-headline p-0">{skill.name}</CardTitle>
                        <p className="text-foreground/70 leading-snug">{skill.desc}</p>
                      </div>
                    </Card>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>

        <div className="relative group p-1 rounded-[33px] bg-gradient-to-r from-primary/20 to-transparent">
          <div className="bg-background/80 backdrop-blur-xl rounded-[32px] p-10 md:p-16 border border-primary/10 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <ScrollReveal>
              <h3 className="text-2xl font-headline font-semibold mb-12 text-center relative z-10">
                Strategic Soft Skills
              </h3>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative z-10">
              <StaggerContainer delay={0.2}>
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,183,16,0.1)",
                      borderColor: "rgba(255,183,16,0.3)"
                    }}
                    className="flex items-center gap-3 px-8 py-4 bg-card/40 backdrop-blur-sm border border-primary/5 rounded-2xl font-bold shadow-sm transition-all group/tag"
                  >
                    <span className="text-primary group-hover/tag:scale-110 transition-transform">{skill.icon}</span>
                    <span className="text-foreground/80">{skill.name}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


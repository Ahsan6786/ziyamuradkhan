import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Building, CalendarDays } from 'lucide-react';

const experiences = [
  {
    role: 'Chief Digital Officer',
    company: 'Global Telecom Inc.',
    period: '2018 - Present',
    details: [
      'Led digital transformation initiatives, increasing digital sales by 40%.',
      'Managed a $50M P&L for the digital products division.',
      'Launched a new 5G-enabled IoT service line, capturing 15% market share in the first year.',
    ],
  },
  {
    role: 'Head of Retail Banking',
    company: 'NextGen Bank',
    period: '2014 - 2018',
    details: [
      'Oversaw 200+ retail branches and digital banking operations.',
      'Improved customer satisfaction scores by 20% through CX enhancements.',
      'Grew the retail loan portfolio by 30% while maintaining risk compliance.',
    ],
  },
  {
    role: 'Senior Product Manager',
    company: 'Innovate Finance Solutions',
    period: '2010 - 2014',
    details: [
      'Developed and launched a market-leading mobile payment application.',
      'Managed the product lifecycle from conception to launch and iteration.',
      'Collaborated with engineering, marketing, and sales teams to ensure product success.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Professional Experience
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A journey of leadership and impact across industries.
        </p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border/70 transform -translate-x-1/2"></div>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-5 top-1 h-4 w-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background"></div>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    {exp.role}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm text-muted-foreground pt-1">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

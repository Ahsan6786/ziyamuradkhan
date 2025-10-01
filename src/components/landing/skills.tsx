import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check } from 'lucide-react';

const technicalSkills = [
  { name: 'Corporate Sales & B2B', level: 95 },
  { name: 'Team Leadership & Management', level: 90 },
  { name: 'Strategic Account Management', level: 85 },
  { name: 'Channel Partner Development', level: 88 },
  { name: 'Business Development', level: 92 },
  { name: 'Sales Forecasting & Strategy', level: 80 },
];

const softSkills = [
  'Negotiation & Closing',
  'Public Speaking & Presentation',
  'Cross-functional Leadership',
  'Client Relationship Management',
  'Stakeholder Relations',
  'Mentorship & Coaching',
];

export function Skills() {
  return (
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Skills & Expertise
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          A diverse toolkit for modern business challenges, blending technical
          sales acumen with strong interpersonal abilities.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <Card className="hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">
              Technical & Sales Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <p className="font-medium text-foreground/90">
                    {skill.name}
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    {skill.level}%
                  </p>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-foreground/90">{skill}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

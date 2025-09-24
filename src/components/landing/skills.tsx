import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industryExpertise = [
  'FinTech & Digital Banking',
  'Telecommunications (5G/IoT)',
  'Enterprise SaaS',
  'Marketplace Platforms',
  'Cybersecurity Strategy',
  'Cloud Infrastructure',
];

const softSkills = [
  'Negotiation',
  'Public Speaking',
  'Cross-functional Leadership',
  'Crisis Management',
  'Stakeholder Relations',
  'Mentorship & Coaching',
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Skills & Expertise
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A diverse toolkit for modern business challenges.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Industry Expertise</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {industryExpertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, Zap, TrendingUp, Users, Handshake, Briefcase, Award } from 'lucide-react';

const technicalSkills = [
  { name: 'Corporate Sales & B2B', icon: <Briefcase className="w-5 h-5 text-primary" /> },
  { name: 'Team Leadership & Management', icon: <Users className="w-5 h-5 text-primary" /> },
  { name: 'Strategic Account Management', icon: <Handshake className="w-5 h-5 text-primary" /> },
  { name: 'Channel Partner Development', icon: <Zap className="w-5 h-5 text-primary" /> },
  { name: 'Business Development', icon: <TrendingUp className="w-5 h-5 text-primary" /> },
  { name: 'Sales Forecasting & Strategy', icon: <Award className="w-5 h-5 text-primary" /> },
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
    <section id="skills" className="space-y-12 animate-in" style={{ animationDelay: '400ms' }}>
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
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Technical & Sales Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4">
                 <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {skill.icon}
                </div>
                <p className="font-medium text-foreground/90">{skill.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/90 font-medium">{skill}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

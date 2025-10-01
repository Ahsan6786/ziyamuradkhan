import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

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
    <section id="about" className="space-y-12 animate-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          About Ziya Murad Khan
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 text-left">
                Dynamic and result-oriented Sales Leader with over 12 years of
                experience across Banking and Telecommunications industries.
                Expert in B2B & corporate sales, strategic account management,
                and high-performance team leadership. Known for exceeding
                targets, strengthening channel partnerships, and delivering
                consistent sales growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Core Competencies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {competencies.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

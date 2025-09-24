import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrendingUp, ArrowDownCircle, Users, Zap } from 'lucide-react';

const achievements = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    metric: '+25%',
    description:
      'Revenue Growth by securing strategic enterprise clients in the telecom sector.',
  },
  {
    icon: <ArrowDownCircle className="w-8 h-8 text-accent" />,
    metric: '-15%',
    description:
      'Operational Costs through process automation and digital channel adoption.',
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    metric: 'Top 5%',
    description:
      'Team Performance & Engagement by fostering a culture of ownership and innovation.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    metric: '3x',
    description:
      'Faster Product Launch cycles by implementing agile methodologies across departments.',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Key Achievements
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Quantifiable results that highlight impact and expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="items-center">
              {achievement.icon}
              <CardTitle className="text-4xl font-bold text-primary pt-2">
                {achievement.metric}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrendingUp, ArrowDownCircle, Users, Zap } from 'lucide-react';

const achievements = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    metric: '+25%',
    description:
      'Revenue Growth by securing strategic enterprise clients in the telecom sector.',
  },
  {
    icon: <ArrowDownCircle className="w-8 h-8 text-primary" />,
    metric: '-15%',
    description:
      'Operational Costs through process automation and digital channel adoption.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    metric: 'Top 5%',
    description:
      'Team Performance & Engagement by fostering a culture of ownership and innovation.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    metric: '3x',
    description:
      'Faster Product Launch cycles by implementing agile methodologies across departments.',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Key Achievements
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          Quantifiable results that highlight my impact and expertise in driving
          business success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="text-center bg-card/50 backdrop-blur-sm border-border/20 rounded-xl hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <CardHeader className="items-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                {achievement.icon}
              </div>
              <CardTitle className="text-5xl font-bold text-primary">
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

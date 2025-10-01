import {
  Target,
  IterationCw,
  AreaChart,
  Users,
  Briefcase,
  HeartHandshake,
} from 'lucide-react';

const competencies = [
  { icon: <Target className="w-10 h-10" />, name: 'Strategic Planning' },
  {
    icon: <IterationCw className="w-10 h-10" />,
    name: 'Digital Transformation',
  },
  { icon: <AreaChart className="w-10 h-10" />, name: 'P&L Management' },
  { icon: <Users className="w-10 h-10" />, name: 'Team Leadership' },
  { icon: <Briefcase className="w-10 h-10" />, name: 'Business Development' },
  {
    icon: <HeartHandshake className="w-10 h-10" />,
    name: 'Customer Experience',
  },
];

export function Competencies() {
  return (
    <section id="competencies" className="space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Core Competencies
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          A blend of strategic, financial, and leadership skills developed
          across multiple industries.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-primary">
        {competencies.map((competency) => (
          <div
            key={competency.name}
            className="flex flex-col items-center space-y-4 group"
          >
            <div className="p-5 bg-secondary rounded-full transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              {competency.icon}
            </div>
            <p className="font-semibold text-foreground text-center">
              {competency.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

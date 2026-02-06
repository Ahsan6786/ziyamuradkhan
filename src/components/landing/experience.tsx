import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Building, CalendarDays } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Manager',
    company: 'RBL Bank',
    period: 'Sep 2023 - November 2025',
    details: [
      'Managed customer relationships and provided private banking services.',
      'Managed salary accounts and cross-selling via long-term engagement with HR/Admin/Finance heads.',
      'Collaborated with channel partners for product upsell including loans, insurance, and forex.',
      'Achieved multiple awards for service and client success.',
    ],
  },
  {
    role: 'Manager of Sales',
    company: 'IndusInd Bank',
    period: 'Oct 2021 - Aug 2023',
    details: [
      'Managed salary accounts and cross-selling via long-term engagement with HR/Admin/Finance heads.',
      'Collaborated with channel partners for product upsell including loans, insurance, and forex.',
      'Achieved multiple awards for service and client success.',
    ],
  },
  {
    role: 'Cluster Manager',
    company: 'Spectra',
    period: 'Oct 2019 - Sep 2021',
    details: [
      'Led B2B sales in Managed WiFi, ILL, SD-WAN with a team of 8 sales associates.',
      'Handled top clients including Jamia Hamdard, Hindustan Power, and Jagran Prakashan.',
      'Delivered full-cycle telecom solutions to large enterprise clients.',
    ],
  },
  {
    role: 'National Key Account Manager',
    company: 'Matrix Cellular (International) Services Ltd.',
    period: 'Mar 2019 - Oct 2019',
    details: [
      'Managed SIM, Forex, and Travel Insurance sales via SME Channel.',
      'Top performer in August 2019 with 166% of target achieved.',
      'Handled accounts including PepsiCo, Ernst & Young, GE, and SBI.',
    ],
  },
  {
    role: 'Channel Manager (SME)',
    company: 'Reliance Communications',
    period: 'Nov 2009 - Mar 2017',
    details: [
      'Managed 35–40 sales associates and channel partners in the SME vertical.',
      'Oversaw wireless data, broadband, and postpaid mobility solutions.',
      'Conducted demos and activations for IBM, Wipro, Microsoft, and Perfetti.',
      'Promoted 3 times and awarded for leadership & performance.',
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="space-y-8 animate-in"
      style={{ animationDelay: '200ms' }}
    >
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

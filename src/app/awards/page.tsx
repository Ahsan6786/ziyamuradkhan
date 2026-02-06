import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const awardsData = [
    {
        fileName: '/a1.png',
        title: 'Health Insurance Excellence',
        company: 'RBL Bank',
        year: '2023–24',
        imageHint: 'award plaque'
    },
    {
        fileName: '/a2.png',
        title: 'Certificate of Appreciation',
        company: 'General Health Insurance',
        year: 'N/A',
        imageHint: 'certificate award'
    },
    {
        fileName: '/a3.png',
        title: 'Outstanding Performance GI',
        company: 'RBL Bank',
        year: 'Jan 2024',
        imageHint: 'award plaque'
    },
    {
        fileName: '/a4.png',
        title: 'Business Excellence Star',
        company: 'Team Award',
        year: 'N/A',
        imageHint: 'star trophy'
    },
    {
        fileName: '/a5.png',
        title: 'GI Business Performance',
        company: 'RBL Bank',
        year: 'N/A',
        imageHint: 'crystal trophy'
    },
    {
        fileName: '/a6.png',
        title: 'Outstanding GI Performance',
        company: 'ICICI Lombard',
        year: 'N/A',
        imageHint: 'crystal trophy'
    },
    {
        fileName: '/a7.png',
        title: 'Exceptional Business Performance',
        company: 'RBL Bank',
        year: 'N/A',
        imageHint: 'award trophy'
    },
    {
        fileName: '/a9.png',
        title: 'Cluster-Level Excellence',
        company: 'RBL Bank',
        year: 'Mar 2024',
        imageHint: 'awards display'
    },
    {
        fileName: '/a10.png',
        title: 'Special Recognition',
        company: 'RBL Bank',
        year: 'N/A',
        imageHint: 'award trophy'
    },
    {
        fileName: '/a11.png',
        title: 'Best TL of the Month',
        company: 'Leadership Award',
        year: 'N/A',
        imageHint: 'certificate'
    },
    {
        fileName: '/a12.png',
        title: 'Top Performer Award',
        company: 'RBL Bank',
        year: 'N/A',
        imageHint: 'award plaque'
    },
    {
        fileName: '/a13.png',
        title: 'Centurion Club',
        company: 'Sales Achievement',
        year: 'N/A',
        imageHint: 'club award'
    },
];

function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-background text-foreground/60">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ziya Khan. All Rights Reserved.</p>
        <p className="mt-2">
          Built with Next.js and Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
}


export default function AwardsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="py-4 px-4 md:px-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
                <div className="container mx-auto flex items-center justify-between">
                    <Button asChild variant="ghost" className="text-primary hover:text-primary">
                        <Link href="/" className='text-sm'>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <Link href="/">
                      <h1 className="text-3xl font-headline tracking-tight text-primary font-bold">
                        ZIYA
                      </h1>
                    </Link>
                    <div className="w-40 md:w-48"></div> {/* Spacer to balance the header */}
                </div>
            </header>
            <main className="flex-grow">
                <section id="awards" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center space-y-4 mb-12 animate-in">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
                                Awards & Recognition
                            </h2>
                            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                                A showcase of achievements and accolades from my professional journey.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {awardsData.map((award, index) => (
                                <Card key={index} className="overflow-hidden flex flex-col animate-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                                    <CardHeader className="p-0">
                                        <div className="aspect-[4/3] relative bg-muted/20">
                                            <Image
                                                src={award.fileName}
                                                alt={award.title}
                                                fill
                                                className="object-contain p-2"
                                                data-ai-hint={award.imageHint}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4 flex flex-col flex-grow">
                                        <CardTitle className="font-headline text-xl mb-2">{award.title}</CardTitle>
                                        <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground">
                                            {award.company} {award.year !== 'N/A' && `• ${award.year}`}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

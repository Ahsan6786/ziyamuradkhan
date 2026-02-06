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
        fileName: '/a1.jpg',
        title: 'Health Insurance Excellence',
        company: 'RBL Bank & Care Health Insurance',
        year: '2023–24',
        description: 'Golden wooden plaque awarded for outstanding performance in Health Insurance Business. Recognizes exceptional contribution and consistent sales excellence at SM – Salary Meera Bagh Branch.',
        imageHint: 'award plaque'
    },
    {
        fileName: '/a2.jpg',
        title: 'Certificate of Appreciation',
        company: 'ICICI Lombard & RBL Bank',
        year: 'N/A',
        description: 'Jointly issued certificate recognizing contribution and participation in General Insurance business. Awarded for professional performance and dedication in achieving business targets.',
        imageHint: 'certificate award'
    },
    {
        fileName: '/a3.jpg',
        title: 'Outstanding Performance GI',
        company: 'RBL Bank',
        year: 'Jan 2024',
        description: 'RBL Bank congratulatory plaque awarded for outstanding performance in General Insurance. Highlights exceptional sales achievements and business growth contribution at cluster level.',
        imageHint: 'award plaque'
    },
    {
        fileName: '/a4.jpg',
        title: 'Business Excellence Star',
        company: 'RBL Bank',
        year: 'N/A',
        description: 'Premium star-shaped trophy recognizing exceptional performance in business excellence. Symbolizes top-tier achievement and leadership performance in insurance sales.',
        imageHint: 'star trophy'
    },
    {
        fileName: '/a5.jpeg',
        title: 'GI Business Performance',
        company: 'N/A',
        year: 'N/A',
        description: 'Modern crystal-gold fusion trophy awarded for outstanding performance in General Insurance Business. The design reflects excellence, innovation, and sustained achievement in financial services.',
        imageHint: 'crystal trophy'
    },
    {
        fileName: '/a6.JPG',
        title: 'Outstanding GI Performance',
        company: 'RBL Bank',
        year: 'N/A',
        description: 'Elegant curved golden crystal trophy presented for outstanding performance in GI Business. Recognizes strategic contribution to revenue growth and client acquisition.',
        imageHint: 'crystal trophy'
    },
    {
        fileName: '/a7.JPG',
        title: 'Exceptional Business Performance',
        company: 'RBL Bank',
        year: 'N/A',
        description: 'Wooden and gold finish achievement trophy awarded for exceptional business performance. Recognizes high-impact sales performance and consistent target achievement.',
        imageHint: 'award trophy'
    },
    {
        fileName: '/a9.jpg',
        title: 'Cluster-Level Excellence',
        company: 'N/A',
        year: 'Mar 2024',
        description: 'Stage display of multiple corporate performance awards presented during recognition ceremony. Showcases cluster-level excellence awards for life and general insurance business performance.',
        imageHint: 'awards display'
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
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={award.fileName}
                                                alt={award.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={award.imageHint}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4 flex flex-col flex-grow">
                                        <CardTitle className="font-headline text-xl mb-2">{award.title}</CardTitle>
                                        <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                                            {award.company} {award.year !== 'N/A' && `• ${award.year}`}
                                        </CardDescription>
                                        <p className="text-sm text-foreground/80 flex-grow">
                                            {award.description}
                                        </p>
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

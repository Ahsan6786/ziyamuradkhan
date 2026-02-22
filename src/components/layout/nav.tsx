'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

import { Magnetic } from '@/components/ui/magnetic';

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Awards', href: '/awards' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={clsx(
                "py-4 px-4 md:px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-lg py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Magnetic>
                    <Link href="/" className="block">
                        <motion.h1
                            whileHover={{ scale: 1.05 }}
                            className="text-3xl font-headline tracking-tighter text-primary font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                        >
                            ZIYA
                        </motion.h1>
                    </Link>
                </Magnetic>
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>
                    <div className="text-white">
                        <ThemeToggle />
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6 text-white" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-primary/10">
                                <SheetHeader>
                                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col h-full">
                                    <nav className="flex flex-col gap-8 text-xl font-bold uppercase tracking-widest mt-16">
                                        {navLinks.map((link) => (
                                            <SheetClose asChild key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="hover:text-primary transition-colors inline-flex items-center gap-4"
                                                >
                                                    <span className="h-px w-4 bg-primary" />
                                                    {link.name}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}


export function Footer() {
    return (
        <footer className="py-12 px-4 md:px-6 bg-card border-t border-primary/5 text-foreground/60">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-headline font-bold text-primary">ZIYA</div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Ziya Khan. All Rights Reserved.</p>
                <div className="flex gap-6 text-xs uppercase tracking-widest font-bold">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

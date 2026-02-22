'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '@/components/ui/magnetic';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/ziyamkhan/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
  ];

  const title = "Driving Growth in";
  const subtitle = "Banking & Telecom";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-[95vh] md:h-screen min-h-[700px] flex items-center overflow-hidden bg-background"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      </motion.div>

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="md:hidden h-full w-full relative"
        >
          <Image
            src="/og-profile.png"
            alt="Ziya Murad Khan"
            fill
            className="object-cover object-top brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </motion.div>

        {/* Desktop Image with Parallax */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block absolute top-0 right-10 h-full w-[40%] overflow-hidden"
        >
          <motion.div
            className="h-full w-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/og-profile.png"
              alt="Ziya Murad Khan"
              fill
              className="object-contain object-bottom brightness-[0.9]"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-end md:items-center pb-8 md:pb-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/5 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="mb-3 md:mb-6">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">
              Ziya Murad Khan
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-8xl font-headline font-bold text-white leading-[1.1] mb-6 md:mb-8 overflow-hidden">
            <motion.span className="block" variants={containerVariants}>
              {title.split(" ").map((word, i) => (
                <motion.span key={i} className="inline-block mr-2 md:mr-4" variants={itemVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40" variants={containerVariants}>
              {subtitle.split(" ").map((word, i) => (
                <motion.div key={i} className="inline-block mr-2 md:mr-4" variants={itemVariants}>
                  {word}
                </motion.div>
              ))}
            </motion.span>
          </h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/60 max-w-xl mb-12 hidden md:block">
            Elevating business value through 12+ years of strategic leadership in high-stakes Banking & Telecom environments.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex items-center gap-3 md:gap-4 mr-0 md:mr-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <Magnetic key={index}>
                  <motion.div
                    whileHover={{ y: -5, opacity: 1, color: "var(--primary)" }}
                    className="text-white/40 hover:text-primary transition-all p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Link href={social.href} target="_blank" className="block w-5 h-5 md:w-6 md:h-6">{social.icon}</Link>
                  </motion.div>
                </Magnetic>
              ))}
            </div>

            <div className="h-px w-10 bg-primary/20 hidden md:block" />

            <Magnetic>
              <Link href="#contact" className="w-full md:w-auto block">
                <motion.button
                  whileHover={{ boxShadow: "0 20px 40px -10px rgba(255,183,16,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-primary text-primary-foreground font-bold rounded-2xl text-base md:text-lg transition-all"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

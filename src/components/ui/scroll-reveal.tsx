'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export function ScrollReveal({ children, width = '100%', delay = 0.05 }: ScrollRevealProps) {
    return (
        <div style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { clsx } from 'clsx';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [0, 400], [5, -5]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 400], [-5, 5]), { stiffness: 100, damping: 30 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={clsx(
                "relative rounded-3xl border border-white/10 bg-card/30 p-1 group overflow-hidden transition-all duration-500",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,183,16,0.1), transparent 40%)`
                    ),
                }}
            />
            <div className="relative h-full w-full rounded-[23px] bg-background/40 backdrop-blur-xl">
                {children}
            </div>
        </motion.div>
    );
}

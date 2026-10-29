'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import type { PointerEvent, ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; id?: string };

/** Seção escura com um halo de luz suave que acompanha o cursor. */
export default function Luz({ children, className, id }: Props) {
    const x = useMotionValue(70);
    const y = useMotionValue(30);
    const sx = useSpring(x, { stiffness: 60, damping: 20 });
    const sy = useSpring(y, { stiffness: 60, damping: 20 });
    const fundo = useMotionTemplate`radial-gradient(42rem circle at ${sx}% ${sy}%, rgba(184, 160, 122, 0.16), transparent 70%)`;

    const mover = (e: PointerEvent<HTMLElement>) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width) * 100);
        y.set(((e.clientY - r.top) / r.height) * 100);
    };

    return (
        <section id={id} className={className} onPointerMove={mover} style={{ position: 'relative' }}>
            <motion.div
                aria-hidden
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: fundo }}
            />
            <div style={{ position: 'relative' }}>{children}</div>
        </section>
    );
}

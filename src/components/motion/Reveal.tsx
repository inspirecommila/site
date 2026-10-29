'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const elementos = {
    div: motion.div,
    li: motion.li,
    ul: motion.ul,
    p: motion.p,
    span: motion.span,
    figure: motion.figure,
    blockquote: motion.blockquote,
};

type Props = {
    children: ReactNode;
    as?: keyof typeof elementos;
    className?: string;
    delay?: number;
    y?: number;
    duracao?: number;
};

export default function Reveal({ children, as = 'div', className, delay = 0, y = 32, duracao = 1 }: Props) {
    const reduzir = useReducedMotion();
    const Componente = elementos[as];

    return (
        <Componente
            className={className}
            initial={{ opacity: 0, y: reduzir ? 0 : y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: duracao, ease, delay }}
        >
            {children}
        </Componente>
    );
}

'use client';

import { motion, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

/** Revela uma palavra letra por letra, subindo de dentro de uma máscara. */
export default function Letras({ texto, className }: { texto: string; className?: string }) {
    const reduzir = useReducedMotion();

    return (
        <motion.span
            className={className}
            aria-label={texto}
            role="text"
            initial="oculto"
            whileInView="visivel"
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ staggerChildren: 0.07 }}
            style={{
                display: 'inline-flex',
                overflow: 'hidden',
                paddingTop: '0.22em',
                marginTop: '-0.22em',
                paddingBottom: '0.06em',
            }}
        >
            {texto.split('').map((letra, i) => (
                <motion.span
                    key={i}
                    aria-hidden
                    style={{ display: 'inline-block' }}
                    variants={{
                        oculto: { y: reduzir ? 0 : '100%', opacity: reduzir ? 0 : 1 },
                        visivel: { y: '0%', opacity: 1, transition: { duration: 1.2, ease } },
                    }}
                >
                    {letra}
                </motion.span>
            ))}
        </motion.span>
    );
}

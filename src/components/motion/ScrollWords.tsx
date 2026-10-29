'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import styles from './ScrollWords.module.scss';

function Palavra({
    texto,
    enfase,
    progresso,
    inicio,
    fim,
}: {
    texto: string;
    enfase: boolean;
    progresso: MotionValue<number>;
    inicio: number;
    fim: number;
}) {
    const opacity = useTransform(progresso, [inicio, fim], [0.16, 1]);
    return (
        <>
            <motion.span style={{ opacity }} className={enfase ? styles.enfase : undefined}>
                {texto}
            </motion.span>{' '}
        </>
    );
}

function interpretar(texto: string) {
    let enfase = false;
    return texto
        .split(' ')
        .filter(Boolean)
        .map((bruta) => {
            if (bruta.startsWith('*')) enfase = true;
            const palavra = { texto: bruta.replace(/\*/g, ''), enfase };
            if (bruta.replace(/[.,;:!?]+$/, '').endsWith('*')) enfase = false;
            return palavra;
        });
}

type Props = { texto: string; className?: string };

/** Palavras que "acendem" conforme a leitura avança com a rolagem. Use *palavra* para ênfase. */
export default function ScrollWords({ texto, className }: Props) {
    const ref = useRef<HTMLParagraphElement>(null);
    const reduzir = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
    const palavras = interpretar(texto);

    if (reduzir) {
        return (
            <p ref={ref} className={`${styles.texto} ${className ?? ''}`}>
                {texto.replace(/\*/g, '')}
            </p>
        );
    }

    return (
        <p ref={ref} className={`${styles.texto} ${className ?? ''}`}>
            {palavras.map((p, i) => (
                <Palavra
                    key={i}
                    texto={p.texto}
                    enfase={p.enfase}
                    progresso={scrollYProgress}
                    inicio={i / palavras.length}
                    fim={(i + 1) / palavras.length}
                />
            ))}
        </p>
    );
}

'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import styles from './SplitReveal.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

const elementos = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    p: motion.p,
};

type Palavra = { texto: string; enfase: boolean; indice: number };

/**
 * Texto entre *asteriscos* vira ênfase (itálico) e "\n" quebra a linha.
 */
function interpretar(texto: string): Palavra[][] {
    let enfase = false;
    let indice = 0;
    return texto.split('\n').map((linha) =>
        linha
            .split(' ')
            .filter(Boolean)
            .map((bruta) => {
                const abre = bruta.startsWith('*');
                const fecha = bruta.replace(/[.,;:!?”"]+$/, '').endsWith('*');
                if (abre) enfase = true;
                const palavra = { texto: bruta.replace(/\*/g, ''), enfase, indice: indice++ };
                if (fecha) enfase = false;
                return palavra;
            }),
    );
}

type Props = {
    texto: string;
    as?: keyof typeof elementos;
    className?: string;
    delay?: number;
    imediato?: boolean;
};

export default function SplitReveal({ texto, as = 'h2', className, delay = 0, imediato = false }: Props) {
    const reduzir = useReducedMotion();
    const Componente = elementos[as];
    const linhas = interpretar(texto);

    const gatilho = imediato
        ? { animate: 'visivel' }
        : { whileInView: 'visivel', viewport: { once: true, margin: '0px 0px -10% 0px' } };

    return (
        <Componente
            className={className}
            initial="oculto"
            {...gatilho}
            transition={{ staggerChildren: 0.045, delayChildren: delay }}
            aria-label={texto.replace(/\*/g, '').replace(/\n/g, ' ')}
        >
            {linhas.map((linha, l) => (
                <span key={l} className={styles.linha} aria-hidden>
                    {linha.map((p) => {
                        const Tag = p.enfase ? 'em' : 'span';
                        return (
                            <Fragment key={p.indice}>
                                <span className={styles.mascara}>
                                    <motion.span
                                        className={styles.palavra}
                                        variants={{
                                            oculto: { y: reduzir ? 0 : '105%', opacity: reduzir ? 0 : 1 },
                                            visivel: { y: '0%', opacity: 1, transition: { duration: 1.05, ease } },
                                        }}
                                    >
                                        <Tag>{p.texto}</Tag>
                                    </motion.span>
                                </span>{' '}
                            </Fragment>
                        );
                    })}
                </span>
            ))}
        </Componente>
    );
}

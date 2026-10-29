'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import styles from './JornadaEncontros.module.scss';

function Marco({ indice, total, progresso }: { indice: number; total: number; progresso: MotionValue<number> }) {
    const inicio = indice / total;
    const fim = (indice + 0.6) / total;
    const preenchido = useTransform(progresso, [inicio, fim], [0, 1]);
    const escala = useTransform(progresso, [inicio, fim], [0.6, 1]);
    const opacidadeRotulo = useTransform(preenchido, [0, 1], [0.35, 1]);
    const ultimo = indice === total - 1;

    return (
        <li className={styles.marco} data-ultimo={ultimo}>
            <motion.span className={styles.ponto} style={{ scale: escala }}>
                <motion.span className={styles.pontoCheio} style={{ opacity: preenchido }} />
            </motion.span>
            <motion.span className={styles.rotulo} style={{ opacity: opacidadeRotulo }}>
                {String(indice + 1).padStart(2, '0')}
            </motion.span>
        </li>
    );
}

/** Linha com os 13 encontros do acompanhamento, preenchida conforme a rolagem. */
export default function JornadaEncontros({ total = 13 }: { total?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 45%'] });
    const linha = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={ref} className={styles.jornada}>
            <div className={styles.trilha} aria-hidden>
                <motion.span style={{ scaleX: linha }} />
            </div>
            <ol className={styles.marcos} aria-label={`${total} encontros`}>
                {Array.from({ length: total }, (_, i) => (
                    <Marco key={i} indice={i} total={total} progresso={scrollYProgress} />
                ))}
            </ol>
            <div className={styles.legenda}>
                <span>Primeiro encontro</span>
                <span>Encerramento do programa</span>
            </div>
        </div>
    );
}

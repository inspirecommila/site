'use client';

import Image from 'next/image';
import { useRef, type ReactNode } from 'react';
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'motion/react';
import styles from './ImagemExpansiva.module.scss';

type Props = {
    src: string;
    alt: string;
    posicao?: string;
    children?: ReactNode;
};

/** Imagem que se abre até ocupar a largura total conforme entra na tela. */
export default function ImagemExpansiva({ src, alt, posicao = 'center', children }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const reduzir = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
    const lados = useTransform(scrollYProgress, [0, 1], [9, 0]);
    const topo = useTransform(scrollYProgress, [0, 1], [7, 0]);
    const escala = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
    const recorte = useMotionTemplate`inset(${topo}% ${lados}% ${topo}% ${lados}%)`;

    return (
        <div ref={ref} className={styles.raiz}>
            <motion.div className={styles.quadro} style={reduzir ? undefined : { clipPath: recorte }}>
                <motion.div className={styles.camada} style={reduzir ? undefined : { scale: escala }}>
                    <Image src={src} alt={alt} fill sizes="100vw" style={{ objectPosition: posicao }} />
                </motion.div>
                <div className={styles.veu} aria-hidden />
                {children ? <div className={styles.conteudo}>{children}</div> : null}
            </motion.div>
        </div>
    );
}

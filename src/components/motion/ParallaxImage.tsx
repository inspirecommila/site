'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import styles from './ParallaxImage.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
    src: string;
    alt: string;
    sizes: string;
    className?: string;
    /** Deslocamento máximo em % da altura do quadro. */
    intensidade?: number;
    /** Mostra a imagem inteira, sem o recorte do parallax. */
    inteira?: boolean;
    posicao?: string;
    priority?: boolean;
    revelar?: 'baixo' | 'cima' | 'lados' | false;
    atraso?: number;
};

const recortes = {
    baixo: 'inset(100% 0% 0% 0%)',
    cima: 'inset(0% 0% 100% 0%)',
    lados: 'inset(0% 50% 0% 50%)',
};

export default function ParallaxImage({
    src,
    alt,
    sizes,
    className,
    intensidade = 10,
    inteira = false,
    posicao = 'center',
    priority,
    revelar = 'baixo',
    atraso = 0,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const reduzir = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const deslocamento = inteira ? 0 : intensidade;
    const y = useTransform(scrollYProgress, [0, 1], [`-${deslocamento}%`, `${deslocamento}%`]);

    const animarEntrada = revelar && !reduzir;

    return (
        <motion.div
            ref={ref}
            className={`${styles.quadro} ${className ?? ''}`}
            initial={animarEntrada ? { clipPath: recortes[revelar] } : false}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 1.4, ease, delay: atraso }}
        >
            <motion.div
                className={styles.camada}
                style={{
                    y: reduzir || inteira ? 0 : y,
                    top: `-${deslocamento}%`,
                    bottom: `-${deslocamento}%`,
                }}
                initial={animarEntrada && !inteira ? { scale: 1.18 } : false}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                transition={{ duration: 1.8, ease, delay: atraso }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    priority={priority}
                    style={{ objectFit: inteira ? 'contain' : 'cover', objectPosition: posicao }}
                />
            </motion.div>
        </motion.div>
    );
}

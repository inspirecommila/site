'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import SplitReveal from '@/components/motion/SplitReveal';
import Botao from '@/components/ui/Botao';
import styles from './HeroHome.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroHome() {
    const ref = useRef<HTMLElement>(null);
    const reduzir = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const yImagem = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const yTexto = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
    const opacidade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className={`${styles.hero} dark`}>
            <motion.div
                className={styles.retrato}
                style={reduzir ? undefined : { y: yImagem }}
                initial={reduzir ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.6, ease, delay: 0.1 }}
            >
                <motion.div
                    className={styles.retratoCamada}
                    initial={reduzir ? false : { scale: 1.25 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.4, ease, delay: 0.1 }}
                >
                    <Image
                        src="/images/camila-mostarda-retrato.webp"
                        alt="Camila Meneses de blazer mostarda, em retrato de estúdio"
                        fill
                        priority
                        sizes="(max-width: 900px) 100vw, 44vw"
                    />
                </motion.div>
            </motion.div>

            <motion.div className={styles.conteudo} style={reduzir ? undefined : { y: yTexto, opacity: opacidade }}>
                <motion.p
                    className="eyebrow"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.4 }}
                >
                    Camila Meneses · Identidade, cura emocional e fé
                </motion.p>
                <SplitReveal
                    as="h1"
                    imediato
                    delay={0.5}
                    className={`display ${styles.titulo}`}
                    texto={'Suas feridas fazem parte\nda sua história, mas *não\ndefinem* sua identidade.'}
                />
                <motion.div
                    className={styles.rodape}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease, delay: 1.2 }}
                >
                    <p className={styles.lead}>
                        Uma jornada de autoconhecimento, fortalecimento emocional e restauração da identidade, à luz da
                        Palavra de Deus.
                    </p>
                    <div className={styles.acoes}>
                        <Botao href="/comunidade-lumina" tom="claro">
                            Conheça a LÚMINA
                        </Botao>
                        <Botao href="/sobre" variante="texto" tom="claro">
                            Minha história
                        </Botao>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className={styles.rolar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                aria-hidden
            >
                <span>Role</span>
                <span className={styles.rolarLinha} />
            </motion.div>
        </section>
    );
}

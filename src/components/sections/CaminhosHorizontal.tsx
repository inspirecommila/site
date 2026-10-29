'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import { CAMINHOS } from '@/content/site';
import { useMediaQuery } from '@/lib/useMediaQuery';
import styles from './CaminhosHorizontal.module.scss';

export default function CaminhosHorizontal() {
    const secaoRef = useRef<HTMLElement>(null);
    const janelaRef = useRef<HTMLDivElement>(null);
    const trilhoRef = useRef<HTMLDivElement>(null);
    const [distancia, setDistancia] = useState(0);
    const [ativo, setAtivo] = useState(0);
    const fixo = useMediaQuery('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

    useEffect(() => {
        const janela = janelaRef.current;
        const trilho = trilhoRef.current;
        if (!janela || !trilho) return;
        const ro = new ResizeObserver(() => setDistancia(Math.max(0, trilho.scrollWidth - janela.clientWidth)));
        ro.observe(janela);
        ro.observe(trilho);
        return () => ro.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({ target: secaoRef, offset: ['start start', 'end end'] });
    const x = useTransform(scrollYProgress, (v) => -v * distancia);
    const linha = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setAtivo(Math.min(CAMINHOS.length - 1, Math.floor(v * CAMINHOS.length)));
    });

    return (
        <section
            id="caminhos"
            ref={secaoRef}
            className={`${styles.secao} dark`}
            style={fixo ? { height: `calc(100vh + ${distancia}px)` } : undefined}
        >
            <div className={styles.fixador} data-fixo={fixo}>
                <div className={styles.intro}>
                    <Reveal as="p" className="eyebrow">
                        Caminhos
                    </Reveal>
                    <SplitReveal
                        texto={'Formas de *caminhar*\ncomigo'}
                        className={`display ${styles.titulo}`}
                    />
                    <Reveal as="p" className={styles.descricao} delay={0.15}>
                        Do primeiro mergulho a um ano inteiro de processo. Cada caminho une autoconhecimento,
                        cuidado emocional, ferramentas práticas e princípios bíblicos.
                    </Reveal>
                    {fixo ? (
                        <div className={styles.contador} aria-hidden>
                            <span className={styles.atual}>{CAMINHOS[ativo].numero}</span>
                            <span className={styles.trilhaContador}>
                                <motion.span style={{ scaleX: linha }} />
                            </span>
                            <span>{CAMINHOS[CAMINHOS.length - 1].numero}</span>
                        </div>
                    ) : null}
                </div>

                <div className={styles.janela} ref={janelaRef}>
                    <motion.div className={styles.trilho} ref={trilhoRef} style={{ x: fixo ? x : 0 }}>
                        {CAMINHOS.map((c) => (
                            <Link key={c.href} href={c.href} className={styles.cartao}>
                                <span className={styles.imagem}>
                                    <Image
                                        src={c.imagem}
                                        alt=""
                                        fill
                                        sizes="(max-width: 1024px) 80vw, 30vw"
                                        style={{ objectPosition: c.posicao }}
                                    />
                                </span>
                                <span className={styles.sombra} aria-hidden />
                                <span className={styles.conteudo}>
                                    <span className={styles.numero}>{c.numero}</span>
                                    <span className={styles.nome}>{c.titulo}</span>
                                    <span className={styles.resumo}>{c.resumo}</span>
                                    <span className={styles.meta}>
                                        {c.meta.map((m) => (
                                            <span key={m}>{m}</span>
                                        ))}
                                    </span>
                                    <span className={styles.conhecer}>
                                        Conhecer <span aria-hidden>→</span>
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

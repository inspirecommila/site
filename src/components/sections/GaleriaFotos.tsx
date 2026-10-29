'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState, type PointerEvent } from 'react';
import styles from './GaleriaFotos.module.scss';

type Foto = { src: string; alt: string; ratio: number };

export default function GaleriaFotos({ fotos }: { fotos: Foto[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: 'start', containScroll: 'trimSnaps' });
    const [progresso, setProgresso] = useState(0);
    const [cursorVisivel, setCursorVisivel] = useState(false);
    const [arrastando, setArrastando] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 400, damping: 40 });
    const sy = useSpring(y, { stiffness: 400, damping: 40 });

    useEffect(() => {
        if (!emblaApi) return;
        const atualizar = () => setProgresso(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
        const inicio = () => setArrastando(true);
        const fim = () => setArrastando(false);
        emblaApi.on('scroll', atualizar).on('reInit', atualizar).on('pointerDown', inicio).on('pointerUp', fim);
        return () => {
            emblaApi.off('scroll', atualizar).off('reInit', atualizar).off('pointerDown', inicio).off('pointerUp', fim);
        };
    }, [emblaApi]);

    const mover = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
    };

    return (
        <div className={styles.galeria}>
            <div
                className={styles.area}
                onPointerMove={mover}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setCursorVisivel(true)}
                onPointerLeave={() => setCursorVisivel(false)}
            >
                <div className={styles.viewport} ref={emblaRef}>
                    <div className={styles.trilho}>
                        {fotos.map((f, i) => (
                            <figure key={f.src} className={styles.slide} style={{ aspectRatio: f.ratio }}>
                                <Image
                                    src={f.src}
                                    alt={f.alt}
                                    fill
                                    sizes={`(max-width: 700px) ${Math.round(f.ratio * 60)}vw, ${Math.round(f.ratio * 40)}vw`}
                                    draggable={false}
                                />
                                <figcaption>{String(i + 1).padStart(2, '0')}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <motion.span
                    className={styles.cursor}
                    style={{ x: sx, y: sy }}
                    animate={{ scale: cursorVisivel ? (arrastando ? 0.8 : 1) : 0, opacity: cursorVisivel ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    aria-hidden
                >
                    Arraste
                </motion.span>
            </div>
            <div className={`container ${styles.barra}`} aria-hidden>
                <span>
                    <span style={{ transform: `scaleX(${0.1 + progresso * 0.9})` }} />
                </span>
            </div>
        </div>
    );
}

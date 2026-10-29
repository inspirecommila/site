'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Video } from '@/content/site';
import { useNoCliente } from '@/lib/useNoCliente';
import styles from './VideoDepoimentos.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

export type GrupoVideos = { id: string; rotulo: string; legenda: string; videos: Video[] };

function IconePlay() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
        </svg>
    );
}

function CartaoVideo({
    video,
    numero,
    legenda,
    onAbrir,
}: {
    video: Video;
    numero: number;
    legenda: string;
    onAbrir: () => void;
}) {
    const ref = useRef<HTMLVideoElement>(null);

    const iniciarPrevia = () => {
        const v = ref.current;
        if (!v || window.matchMedia('(hover: none)').matches) return;
        v.play().catch(() => {});
    };

    const pararPrevia = () => {
        const v = ref.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
    };

    return (
        <button
            type="button"
            className={styles.cartao}
            onClick={onAbrir}
            onMouseEnter={iniciarPrevia}
            onMouseLeave={pararPrevia}
            aria-label={`Assistir depoimento ${numero}: ${legenda}`}
        >
            <video ref={ref} src={video.src} poster={video.poster} muted loop playsInline preload="none" />
            <span className={styles.sombra} aria-hidden />
            <span className={styles.rodapeCartao}>
                <span className={styles.numero}>{String(numero).padStart(2, '0')}</span>
                <span className={styles.legenda}>{legenda}</span>
            </span>
            <span className={styles.play} aria-hidden>
                <IconePlay />
            </span>
        </button>
    );
}

function Carrossel({ grupo, onAbrir }: { grupo: GrupoVideos; onAbrir: (i: number) => void }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
    const [progresso, setProgresso] = useState(0);
    const [podeVoltar, setPodeVoltar] = useState(false);
    const [podeAvancar, setPodeAvancar] = useState(true);

    useEffect(() => {
        if (!emblaApi) return;
        const atualizar = () => {
            setProgresso(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
            setPodeVoltar(emblaApi.canScrollPrev());
            setPodeAvancar(emblaApi.canScrollNext());
        };
        atualizar();
        emblaApi.on('scroll', atualizar).on('reInit', atualizar).on('select', atualizar);
        return () => {
            emblaApi.off('scroll', atualizar).off('reInit', atualizar).off('select', atualizar);
        };
    }, [emblaApi]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease }}
        >
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.trilho}>
                    {grupo.videos.map((v, i) => (
                        <div className={styles.slide} key={v.src}>
                            <CartaoVideo
                                video={v}
                                numero={i + 1}
                                legenda={grupo.legenda}
                                onAbrir={() => onAbrir(i)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.controles}>
                <div className={styles.barra} aria-hidden>
                    <span style={{ transform: `scaleX(${0.12 + progresso * 0.88})` }} />
                </div>
                <div className={styles.setas}>
                    <button
                        type="button"
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!podeVoltar}
                        aria-label="Depoimentos anteriores"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        onClick={() => emblaApi?.scrollNext()}
                        disabled={!podeAvancar}
                        aria-label="Próximos depoimentos"
                    >
                        →
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function Player({
    grupo,
    indice,
    onFechar,
    onTrocar,
}: {
    grupo: GrupoVideos;
    indice: number;
    onFechar: () => void;
    onTrocar: (i: number) => void;
}) {
    const total = grupo.videos.length;
    const video = grupo.videos[indice];
    const anterior = useCallback(() => onTrocar((indice - 1 + total) % total), [indice, total, onTrocar]);
    const proximo = useCallback(() => onTrocar((indice + 1) % total), [indice, total, onTrocar]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onFechar();
            if (e.key === 'ArrowLeft') anterior();
            if (e.key === 'ArrowRight') proximo();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onFechar, anterior, proximo]);

    return (
        <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onFechar}
            role="dialog"
            aria-modal="true"
            aria-label={`Depoimento ${indice + 1} de ${total}`}
        >
            <div className={styles.playerTopo}>
                <span>
                    {grupo.legenda} · {String(indice + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <button type="button" onClick={onFechar} className={styles.fechar}>
                    Fechar
                </button>
            </div>

            <motion.div
                className={styles.playerVideo}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.55, ease }}
                onClick={(e) => e.stopPropagation()}
            >
                <video key={video.src} src={video.src} poster={video.poster} controls autoPlay playsInline />
            </motion.div>

            {total > 1 ? (
                <>
                    <button
                        type="button"
                        className={`${styles.navPlayer} ${styles.navAnterior}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            anterior();
                        }}
                        aria-label="Depoimento anterior"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className={`${styles.navPlayer} ${styles.navProximo}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            proximo();
                        }}
                        aria-label="Próximo depoimento"
                    >
                        →
                    </button>
                </>
            ) : null}
        </motion.div>
    );
}

export default function VideoDepoimentos({ grupos }: { grupos: GrupoVideos[] }) {
    const [ativo, setAtivo] = useState(grupos[0].id);
    const [aberto, setAberto] = useState<number | null>(null);
    const lenis = useLenis();
    const noCliente = useNoCliente();
    const grupo = grupos.find((g) => g.id === ativo) ?? grupos[0];

    useEffect(() => {
        if (aberto === null) return;
        lenis?.stop();
        return () => lenis?.start();
    }, [aberto, lenis]);

    const fechar = useCallback(() => setAberto(null), []);

    return (
        <div className={styles.raiz}>
            {grupos.length > 1 ? (
                <div className={styles.abas} role="tablist" aria-label="Escolha os depoimentos">
                    {grupos.map((g) => (
                        <button
                            key={g.id}
                            type="button"
                            role="tab"
                            aria-selected={g.id === ativo}
                            className={styles.aba}
                            onClick={() => setAtivo(g.id)}
                        >
                            {g.rotulo}
                            {g.id === ativo ? (
                                <motion.span layoutId="aba-depoimentos" className={styles.abaLinha} />
                            ) : null}
                        </button>
                    ))}
                </div>
            ) : null}

            <AnimatePresence mode="wait">
                <Carrossel key={grupo.id} grupo={grupo} onAbrir={setAberto} />
            </AnimatePresence>

            {noCliente
                ? createPortal(
                      <AnimatePresence>
                          {aberto !== null ? (
                              <Player grupo={grupo} indice={aberto} onFechar={fechar} onTrocar={setAberto} />
                          ) : null}
                      </AnimatePresence>,
                      document.body,
                  )
                : null}
        </div>
    );
}

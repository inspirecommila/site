import type { ReactNode } from 'react';
import ParallaxImage from '@/components/motion/ParallaxImage';
import SplitReveal from '@/components/motion/SplitReveal';
import Reveal from '@/components/motion/Reveal';
import styles from './PageHero.module.scss';

type Props = {
    eyebrow: string;
    titulo: string;
    lead: string;
    imagem: { src: string; alt: string; posicao?: string };
    meta?: string[];
    acoes?: ReactNode;
    imagemContida?: boolean;
};

export default function PageHero({ eyebrow, titulo, lead, imagem, meta, acoes, imagemContida }: Props) {
    return (
        <section className={`${styles.hero} dark`}>
            <div className={styles.midia} data-contida={imagemContida}>
                <ParallaxImage
                    src={imagem.src}
                    alt={imagem.alt}
                    sizes="(max-width: 900px) 100vw, 46vw"
                    posicao={imagem.posicao}
                    className={styles.foto}
                    intensidade={imagemContida ? 0 : 8}
                    revelar="cima"
                    priority
                />
            </div>

            <div className={styles.texto}>
                <Reveal as="p" className="eyebrow" delay={0.2}>
                    {eyebrow}
                </Reveal>
                <SplitReveal as="h1" texto={titulo} className={`display ${styles.titulo}`} imediato delay={0.3} />
                <Reveal as="p" className={`lead ${styles.lead}`} delay={0.75}>
                    {lead}
                </Reveal>
                {meta?.length ? (
                    <Reveal as="div" className={styles.meta} delay={0.9}>
                        {meta.map((m) => (
                            <span key={m}>{m}</span>
                        ))}
                    </Reveal>
                ) : null}
                {acoes ? (
                    <Reveal as="div" className={styles.acoes} delay={1}>
                        {acoes}
                    </Reveal>
                ) : null}
            </div>
        </section>
    );
}

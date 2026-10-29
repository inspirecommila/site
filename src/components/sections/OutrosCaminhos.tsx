import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import { CAMINHOS } from '@/content/site';
import styles from './OutrosCaminhos.module.scss';

export default function OutrosCaminhos({ atual }: { atual: string }) {
    const outros = CAMINHOS.filter((c) => c.href !== atual);

    return (
        <section className={`${styles.secao} section`}>
            <div className="container">
                <div className={styles.cabecalho}>
                    <Reveal as="p" className="eyebrow">
                        Outros caminhos
                    </Reveal>
                    <Reveal as="p" className={styles.chamada} delay={0.1}>
                        Cada fase pede um tipo de cuidado. Conheça as outras formas de caminhar comigo.
                    </Reveal>
                </div>
                <ul className={styles.lista}>
                    {outros.map((c, i) => (
                        <Reveal as="li" key={c.href} delay={i * 0.06}>
                            <Link href={c.href} className={styles.item}>
                                <span className={styles.numero}>{c.numero}</span>
                                <span className={styles.titulo}>{c.titulo}</span>
                                <span className={styles.resumo}>{c.resumo}</span>
                                <span className={styles.miniatura} aria-hidden>
                                    <Image
                                        src={c.imagem}
                                        alt=""
                                        fill
                                        sizes="160px"
                                        style={{ objectPosition: c.posicao }}
                                    />
                                </span>
                                <span className={styles.seta} aria-hidden>
                                    →
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}

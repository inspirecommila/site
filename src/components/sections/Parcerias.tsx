'use client';

import Image from 'next/image';
import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import { PARCERIAS } from '@/content/site';
import styles from './Parcerias.module.scss';

export default function Parcerias() {
    const [copiado, setCopiado] = useState<string | null>(null);

    const copiar = async (codigo: string) => {
        try {
            await navigator.clipboard.writeText(codigo);
            setCopiado(codigo);
            window.setTimeout(() => setCopiado(null), 2000);
        } catch {
            setCopiado(null);
        }
    };

    return (
        <section id="parcerias" className={`${styles.secao} section`}>
            <div className={`container ${styles.grade}`}>
                <div className={styles.cabecalho}>
                    <Reveal as="p" className="eyebrow">
                        Parcerias
                    </Reveal>
                    <Reveal as="p" className={`display ${styles.titulo}`} delay={0.05}>
                        Marcas que <em>uso e indico</em>
                    </Reveal>
                    <Reveal as="p" className={styles.texto} delay={0.1}>
                        Cuidar de si também passa pelo corpo e pela rotina. Use meus códigos e aproveite as condições
                        especiais.
                    </Reveal>
                </div>

                <div className={styles.cupons}>
                    {PARCERIAS.map((p, i) => (
                        <Reveal key={p.marca} className={styles.cupom} delay={0.1 + i * 0.1}>
                            <div className={styles.foto}>
                                <Image src={p.imagem} alt={`Camila com peças ${p.marca}`} fill sizes="200px" />
                            </div>
                            <div className={styles.dados}>
                                <span className={styles.segmento}>{p.segmento}</span>
                                <a href={p.site} target="_blank" rel="noopener noreferrer" className={styles.marca}>
                                    {p.marca} <span aria-hidden>↗</span>
                                </a>
                                <span className={styles.rotulo}>{p.rotulo}</span>
                                <button
                                    type="button"
                                    className={styles.codigo}
                                    onClick={() => copiar(p.codigo)}
                                    aria-label={`Copiar código ${p.codigo}`}
                                >
                                    <strong>{p.codigo}</strong>
                                    <span>{copiado === p.codigo ? 'Copiado' : 'Copiar'}</span>
                                </button>
                                <p className={styles.instrucao}>{p.instrucao}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

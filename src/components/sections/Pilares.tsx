'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import styles from './Pilares.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

export type Pilar = { titulo: string; texto: string; imagem: string; posicao?: string };

export default function Pilares({ pilares }: { pilares: Pilar[] }) {
    const [ativo, setAtivo] = useState(0);
    const atual = pilares[ativo];

    return (
        <div className={styles.grade}>
            <div className={styles.lateral}>
                <div className={styles.fixo}>
                    <div className={styles.foto}>
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={atual.imagem}
                                className={styles.camada}
                                initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                                exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.5 } }}
                                transition={{ duration: 1, ease }}
                            >
                                <Image
                                    src={atual.imagem}
                                    alt=""
                                    fill
                                    sizes="(max-width: 900px) 0px, 34vw"
                                    style={{ objectPosition: atual.posicao ?? 'center 20%' }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={styles.indice} aria-hidden>
                        <span>{String(ativo + 1).padStart(2, '0')}</span>
                        <span className={styles.indiceTrilha}>
                            <motion.span
                                animate={{ scaleX: (ativo + 1) / pilares.length }}
                                transition={{ duration: 0.8, ease }}
                            />
                        </span>
                        <span>{String(pilares.length).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>

            <ol className={styles.lista}>
                {pilares.map((p, i) => (
                    <motion.li
                        key={p.titulo}
                        className={styles.item}
                        data-ativo={i === ativo}
                        viewport={{ margin: '-45% 0px -45% 0px' }}
                        onViewportEnter={() => setAtivo(i)}
                    >
                        <span className={styles.numero}>{String(i + 1).padStart(2, '0')}</span>
                        <h3 className={styles.titulo}>{p.titulo}</h3>
                        <p className={styles.texto}>{p.texto}</p>
                    </motion.li>
                ))}
            </ol>
        </div>
    );
}

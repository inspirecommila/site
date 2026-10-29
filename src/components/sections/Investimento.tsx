import type { ReactNode } from 'react';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import styles from './Investimento.module.scss';

type Props = {
    titulo: string;
    valor: string;
    complemento?: string;
    detalhes: string[];
    acoes: ReactNode;
    nota?: string;
};

export default function Investimento({ titulo, valor, complemento, detalhes, acoes, nota }: Props) {
    return (
        <section className={`${styles.secao} section dark`}>
            <div className={`container ${styles.grade}`}>
                <div>
                    <Reveal as="p" className="eyebrow">
                        Investimento
                    </Reveal>
                    <SplitReveal texto={titulo} className={`display ${styles.titulo}`} />
                </div>
                <Reveal className={styles.cartao} delay={0.1}>
                    <div className={styles.valor}>
                        <strong>{valor}</strong>
                        {complemento ? <span>{complemento}</span> : null}
                    </div>
                    <ul className={styles.detalhes}>
                        {detalhes.map((d) => (
                            <li key={d}>{d}</li>
                        ))}
                    </ul>
                    <div className={styles.acoes}>{acoes}</div>
                    {nota ? <p className={styles.nota}>{nota}</p> : null}
                </Reveal>
            </div>
        </section>
    );
}

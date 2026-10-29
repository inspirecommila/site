import Reveal from '@/components/motion/Reveal';
import styles from './ListaNumerada.module.scss';

type Item = { titulo: string; texto?: string };

type Props = { itens: Item[]; colunas?: 1 | 2 | 3; className?: string };

export default function ListaNumerada({ itens, colunas = 2, className }: Props) {
    return (
        <ol className={`${styles.lista} ${className ?? ''}`} data-colunas={colunas}>
            {itens.map((item, i) => (
                <Reveal as="li" key={item.titulo} className={styles.item} delay={(i % 3) * 0.06}>
                    <span className={styles.numero}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                        <h3 className={styles.titulo}>{item.titulo}</h3>
                        {item.texto ? <p className={styles.texto}>{item.texto}</p> : null}
                    </div>
                </Reveal>
            ))}
        </ol>
    );
}

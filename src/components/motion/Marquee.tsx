import styles from './Marquee.module.scss';

type Props = { itens: string[]; className?: string; velocidade?: number };

export default function Marquee({ itens, className, velocidade = 38 }: Props) {
    const faixa = (
        <span className={styles.faixa}>
            {itens.map((item, i) => (
                <span key={i} className={styles.item}>
                    {item}
                    <span className={styles.separador} aria-hidden />
                </span>
            ))}
        </span>
    );

    return (
        <div className={`${styles.marquee} ${className ?? ''}`}>
            <span className="srOnly">{itens.join(', ')}</span>
            <div className={styles.trilho} style={{ animationDuration: `${velocidade}s` }} aria-hidden>
                {faixa}
                {faixa}
            </div>
        </div>
    );
}

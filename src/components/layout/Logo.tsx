import styles from './Logo.module.scss';

export default function Logo({ tamanho = 'normal' }: { tamanho?: 'normal' | 'grande' }) {
    return (
        <span className={styles.logo} data-tamanho={tamanho}>
            <span className={styles.nome}>
                <em>Camila</em> Meneses
            </span>
            <span className={styles.assinatura}>Inspire com Mila</span>
        </span>
    );
}

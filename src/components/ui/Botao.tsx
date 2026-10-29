import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './Botao.module.scss';

type Props = {
    href: string;
    children: ReactNode;
    variante?: 'solido' | 'contorno' | 'texto';
    tom?: 'claro' | 'escuro';
    className?: string;
};

function Seta() {
    return (
        <span className={styles.seta} aria-hidden>
            <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.3" />
            </svg>
        </span>
    );
}

export default function Botao({ href, children, variante = 'solido', tom = 'escuro', className }: Props) {
    const externo = /^(https?:|mailto:)/.test(href);
    const classe = `${styles.botao} ${className ?? ''}`;
    const conteudo = (
        <>
            <span className={styles.rotulo}>{children}</span>
            <Seta />
        </>
    );

    if (externo) {
        return (
            <a
                href={href}
                className={classe}
                data-variante={variante}
                data-tom={tom}
                target="_blank"
                rel="noopener noreferrer"
            >
                {conteudo}
            </a>
        );
    }

    return (
        <Link href={href} className={classe} data-variante={variante} data-tom={tom}>
            {conteudo}
        </Link>
    );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useLenis } from 'lenis/react';
import { CONTATO, NAVEGACAO } from '@/content/site';
import Logo from './Logo';
import styles from './Header.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
    const pathname = usePathname();
    const lenis = useLenis();
    const { scrollY } = useScroll();
    const [solido, setSolido] = useState(false);
    const [oculto, setOculto] = useState(false);
    const [aberto, setAberto] = useState(false);

    useMotionValueEvent(scrollY, 'change', (y) => {
        const anterior = scrollY.getPrevious() ?? 0;
        setSolido(y > 40);
        setOculto(y > 320 && y > anterior);
    });

    useEffect(() => {
        if (aberto) lenis?.stop();
        else lenis?.start();
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [aberto, lenis]);

    return (
        <>
            <header
                className={styles.header}
                data-solido={solido || aberto}
                data-oculto={oculto && !aberto}
            >
                <div className={styles.inner}>
                    <Link
                        href="/"
                        className={styles.logo}
                        aria-label="Camila Meneses, página inicial"
                        onClick={() => setAberto(false)}
                    >
                        <Logo />
                    </Link>

                    <nav className={styles.nav} aria-label="Principal">
                        {NAVEGACAO.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.link}
                                data-ativo={pathname === item.href}
                            >
                                {item.rotulo}
                            </Link>
                        ))}
                    </nav>

                    <a
                        href={CONTATO.whatsappGeral}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cta}
                    >
                        Fale comigo
                    </a>

                    <button
                        type="button"
                        className={styles.toggle}
                        aria-expanded={aberto}
                        aria-controls="menu-mobile"
                        onClick={() => setAberto((v) => !v)}
                    >
                        <span>{aberto ? 'Fechar' : 'Menu'}</span>
                        <span className={styles.toggleIcon} data-aberto={aberto} aria-hidden />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {aberto ? (
                    <motion.div
                        id="menu-mobile"
                        className={styles.menu}
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.75, ease }}
                    >
                        <nav className={styles.menuNav} aria-label="Menu">
                            {[{ href: '/', rotulo: 'Início' }, ...NAVEGACAO].map((item, i) => (
                                <div key={item.href} className={styles.menuItem}>
                                    <motion.div
                                        initial={{ y: '110%' }}
                                        animate={{ y: '0%' }}
                                        exit={{ y: '110%' }}
                                        transition={{ duration: 0.7, ease, delay: 0.18 + i * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            data-ativo={pathname === item.href}
                                            onClick={() => setAberto(false)}
                                        >
                                            <small>{String(i + 1).padStart(2, '0')}</small>
                                            {item.rotulo}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </nav>
                        <motion.div
                            className={styles.menuRodape}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.55 } }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        >
                            <a href={CONTATO.whatsappGeral} target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                            <a href={CONTATO.instagram} target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                            <a href={`mailto:${CONTATO.email}`}>E-mail</a>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}

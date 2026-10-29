import Link from 'next/link';
import { CAMINHOS, CONTATO } from '@/content/site';
import Logo from './Logo';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topo}>
                    <Logo tamanho="grande" />
                    <p className={styles.lema}>
                        Transformação que <em>começa dentro.</em>
                    </p>
                </div>

                <div className={styles.colunas}>
                    <div>
                        <h2 className={styles.titulo}>Caminhos</h2>
                        <ul>
                            {CAMINHOS.map((c) => (
                                <li key={c.href}>
                                    <Link href={c.href}>{c.titulo}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.titulo}>Navegue</h2>
                        <ul>
                            <li>
                                <Link href="/">Início</Link>
                            </li>
                            <li>
                                <Link href="/sobre">Sobre a Camila</Link>
                            </li>
                            <li>
                                <Link href="/#depoimentos">Depoimentos</Link>
                            </li>
                            <li>
                                <Link href="/#parcerias">Parcerias</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.titulo}>Contato</h2>
                        <ul>
                            <li>
                                <a href={CONTATO.whatsappGeral} target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href={CONTATO.instagram} target="_blank" rel="noopener noreferrer">
                                    {CONTATO.instagramUsuario}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>
                            </li>
                        </ul>
                    </div>
                    <blockquote className={styles.versiculo}>
                        <p>“A mulher sábia edifica a sua casa.”</p>
                        <cite>Provérbios 14:1</cite>
                    </blockquote>
                </div>

                <div className={styles.base}>
                    <p>© Camila Meneses · Comunidade LÚMINA</p>
                    <p>
                        Os acompanhamentos são voltados ao desenvolvimento pessoal e espiritual e não substituem
                        psicoterapia ou tratamentos de saúde.
                    </p>
                </div>
            </div>
        </footer>
    );
}

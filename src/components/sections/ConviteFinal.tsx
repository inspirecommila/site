import ParallaxImage from '@/components/motion/ParallaxImage';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Botao from '@/components/ui/Botao';
import { CONTATO } from '@/content/site';
import styles from './ConviteFinal.module.scss';

type Props = {
    titulo?: string;
    texto?: string;
    acao?: { href: string; rotulo: string };
};

export default function ConviteFinal({
    titulo = 'Sua história merece ser *acolhida.*\nSuas feridas merecem *cuidado.*',
    texto = 'Se algo aqui tocou você, vamos conversar. Juntas, encontramos o caminho que faz sentido para o momento que você está vivendo.',
    acao = { href: CONTATO.whatsappGeral, rotulo: 'Conversar pelo WhatsApp' },
}: Props) {
    return (
        <section className={`${styles.convite} section`}>
            <div className={`container ${styles.grade}`}>
                <div className={styles.texto}>
                    <Reveal as="p" className="eyebrow">
                        Vamos caminhar juntas
                    </Reveal>
                    <SplitReveal texto={titulo} className={`display ${styles.titulo}`} />
                    <Reveal as="p" className={`lead ${styles.lead}`} delay={0.2}>
                        {texto}
                    </Reveal>
                    <Reveal as="div" className={styles.acoes} delay={0.3}>
                        <Botao href={acao.href}>{acao.rotulo}</Botao>
                        <Botao href={CONTATO.instagram} variante="texto">
                            {CONTATO.instagramUsuario}
                        </Botao>
                    </Reveal>
                </div>
                <ParallaxImage
                    src="/images/camila-azul-sorriso.webp"
                    alt="Camila Meneses sorrindo, de vestido azul-marinho"
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.foto}
                    posicao="center 20%"
                />
            </div>
        </section>
    );
}

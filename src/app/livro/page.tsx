import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import OutrosCaminhos from '@/components/sections/OutrosCaminhos';
import ConviteFinal from '@/components/sections/ConviteFinal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import ScrollWords from '@/components/motion/ScrollWords';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Botao from '@/components/ui/Botao';
import { LINKS } from '@/content/site';
import s from '@/styles/pagina.module.scss';

export const metadata: Metadata = {
    title: 'Mulheres que se amam',
    description:
        'Livro digital com relatos sinceros e o método Os 6 Pilares da Autoestima para mulheres que desejam romper ciclos de dependência emocional e insegurança.',
};

export default function LivroPage() {
    return (
        <>
            <PageHero
                eyebrow="Livro digital"
                titulo={'Mulheres que\n*se amam*'}
                lead="Um chamado à ação para mulheres que se sentem presas em ciclos de dependência emocional, insegurança e relações disfuncionais."
                imagem={{
                    src: '/images/livro-camila.webp',
                    alt: 'Camila Meneses lendo o livro Mulheres que se amam',
                    posicao: 'center 25%',
                }}
                meta={['Livro digital', 'Os 6 Pilares da Autoestima']}
                acoes={
                    <Botao href={LINKS.checkoutLivro} tom="claro">
                        Quero o livro
                    </Botao>
                }
            />

            <section className={`${s.claro} section`}>
                <div className={`container ${s.duas} ${s.alinhaCentro}`}>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            Sobre o livro
                        </Reveal>
                        <SplitReveal texto="A mudança começa *de dentro*" className={`display ${s.tituloMenor}`} />
                        <Reveal className={`prose ${s.espacoTopo}`}>
                            <p>
                                Por meio de relatos sinceros e reveladores, cada página oferece um vislumbre de caminho
                                para a cura, o renascimento e a autoestima, mostrando que é possível romper os padrões
                                de dor e construir uma vida com mais liberdade.
                            </p>
                            <p>
                                Com o método Os 6 Pilares da Autoestima como guia, as autoras compartilham suas
                                conquistas e o impacto transformador que se amar teve em suas vidas. E, se elas
                                conseguiram, você também pode.
                            </p>
                        </Reveal>
                        <Reveal className={s.acoes} delay={0.1}>
                            <Botao href={LINKS.checkoutLivro}>Comprar o livro digital</Botao>
                        </Reveal>
                    </div>
                    <ParallaxImage
                        src="/images/livro-lancamento.webp"
                        alt="Camila autografando exemplares no lançamento do livro"
                        sizes="(max-width: 900px) 90vw, 40vw"
                        className={s.fotoArco}
                    />
                </div>
            </section>

            <section className={`${s.areia} section`}>
                <div className="container">
                    <Reveal as="p" className="eyebrow">
                        O mantra do livro
                    </Reveal>
                    <ScrollWords
                        className={s.espacoTopo}
                        texto="“Eu escolho me amar, eu escolho confiar em mim.” *Uma afirmação que ecoa ao longo da obra e pode guiar a sua própria jornada de autodescoberta.*"
                    />
                </div>
            </section>

            <OutrosCaminhos atual="/livro" />
            <ConviteFinal
                titulo={'Permita-se o amor-próprio\nque *todas* merecemos.'}
                acao={{ href: LINKS.checkoutLivro, rotulo: 'Quero o livro' }}
            />
        </>
    );
}

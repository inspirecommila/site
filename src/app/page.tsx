import HeroHome from '@/components/sections/HeroHome';
import CaminhosHorizontal from '@/components/sections/CaminhosHorizontal';
import VideoDepoimentos from '@/components/sections/VideoDepoimentos';
import GaleriaFotos from '@/components/sections/GaleriaFotos';
import Parcerias from '@/components/sections/Parcerias';
import ConviteFinal from '@/components/sections/ConviteFinal';
import Marquee from '@/components/motion/Marquee';
import ScrollWords from '@/components/motion/ScrollWords';
import ParallaxImage from '@/components/motion/ParallaxImage';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import ImagemExpansiva from '@/components/motion/ImagemExpansiva';
import Letras from '@/components/motion/Letras';
import Luz from '@/components/motion/Luz';
import Botao from '@/components/ui/Botao';
import {
    DEPOIMENTOS_ESSENCIA,
    DEPOIMENTOS_LUMINA,
    FOTOS_ESSENCIA,
    LINKS,
    LUMINA,
} from '@/content/site';
import styles from './page.module.scss';

const INCLUSO_LUMINA = [
    'Encontros semanais ao vivo',
    'Aulas gravadas na plataforma',
    'Workbooks e exercícios práticos',
    'Ferramentas de autoconhecimento',
    'Áudios e conteúdos complementares',
    'Desafios práticos',
    'Grupo exclusivo no WhatsApp',
    'Participações especiais',
];

export default function Home() {
    return (
        <>
            <HeroHome />

            <div className={`${styles.faixa} dark`}>
                <Marquee
                    itens={['Identidade', 'Cura emocional', 'Posicionamento', 'Fé', 'Autoestima', 'Relacionamentos']}
                />
            </div>

            {/* Manifesto */}
            <section className={`${styles.manifesto} section`}>
                <div className="container">
                    <Reveal as="p" className="eyebrow">
                        Talvez seja você
                    </Reveal>
                    <ScrollWords
                        className={styles.manifestoTexto}
                        texto="Talvez você tenha passado anos tentando ser suficiente, buscando aprovação e escondendo suas inseguranças. Talvez tenha aprendido a se calar para ser aceita e a agradar para ser amada. *Mas existe uma identidade que vai além de tudo isso.*"
                    />
                    <div className={styles.manifestoRodape}>
                        <ParallaxImage
                            src="/images/camila-vermelho-oracao.webp"
                            alt="Camila Meneses de olhos fechados, com as mãos unidas em oração"
                            sizes="(max-width: 900px) 100vw, 22vw"
                            className={styles.manifestoFoto}
                            posicao="center 20%"
                        />
                        <Reveal as="p" className={styles.manifestoNota}>
                            Antes das feridas, dos rótulos, das rejeições e dos papéis que você desempenha, existe uma
                            verdade que precisa ser reconhecida: <em>você é filha amada de Deus.</em>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Sobre */}
            <section className={`${styles.sobre} section`}>
                <div className={`container ${styles.sobreGrade}`}>
                    <div className={styles.sobreFotos}>
                        <ParallaxImage
                            src="/images/camila-listrado-sorriso.webp"
                            alt="Camila Meneses sorrindo, com uma xícara nas mãos"
                            sizes="(max-width: 900px) 80vw, 34vw"
                            className={styles.sobreFotoPrincipal}
                            posicao="center 25%"
                        />
                        <ParallaxImage
                            src="/images/camila-mostarda-riso.webp"
                            alt="Camila Meneses rindo, sentada, de terno mostarda"
                            sizes="(max-width: 900px) 40vw, 16vw"
                            className={styles.sobreFotoDetalhe}
                            intensidade={16}
                            revelar="lados"
                            atraso={0.3}
                        />
                    </div>
                    <div className={styles.sobreTexto}>
                        <Reveal as="p" className="eyebrow">
                            Sobre
                        </Reveal>
                        <SplitReveal texto={'Prazer, sou\nCamila *Meneses.*'} className={`display ${styles.sobreTitulo}`} />
                        <Reveal className="prose" delay={0.1}>
                            <p>
                                Especialista em Autoestima e Confiança, formada em Educação Física e em formação na
                                área de Terapia. Esposa, mãe de três filhos, cristã e fundadora da Comunidade LÚMINA.
                            </p>
                            <p>
                                Durante muitos anos, ajudei mulheres a transformar seus corpos. Mas foi através da
                                minha própria história que compreendi que existem feridas que nenhuma mudança exterior
                                consegue alcançar.
                            </p>
                        </Reveal>
                        <Reveal as="blockquote" className={styles.sobreCitacao} delay={0.15}>
                            “Antes de qualquer papel que eu desempenhasse, eu era filha. Amada, conhecida e vista por
                            Deus.”
                        </Reveal>
                        <Reveal delay={0.2}>
                            <Botao href="/sobre" variante="contorno">
                                Conheça minha história
                            </Botao>
                        </Reveal>
                    </div>
                </div>
            </section>

            <CaminhosHorizontal />

            {/* LÚMINA */}
            <Luz className={`${styles.lumina} section dark`}>
                <div className="container">
                    <div className={styles.luminaTopo}>
                        <Reveal as="p" className="eyebrow">
                            Comunidade
                        </Reveal>
                        <Letras texto="LÚMINA" className={styles.luminaMarca} />
                        <Reveal as="p" className={styles.luminaLema} delay={0.4}>
                            Transformação que <em>começa dentro.</em>
                        </Reveal>
                    </div>

                    <div className={styles.luminaGrade}>
                        <div className={styles.luminaMidia}>
                            <ParallaxImage
                                src="/images/lumina-plataforma.webp"
                                alt="Plataforma da Comunidade LÚMINA aberta em um tablet"
                                sizes="(max-width: 900px) 90vw, 40vw"
                                className={styles.luminaFoto}
                                inteira
                            />
                            <Reveal className={styles.luminaSelo} delay={0.4}>
                                <strong>12</strong>
                                <span>meses de caminhada</span>
                            </Reveal>
                        </div>

                        <div>
                            <SplitReveal
                                texto="Um lugar para voltar para si mesma e redescobrir sua identidade como *filha de Deus.*"
                                className={`display ${styles.luminaTitulo}`}
                            />
                            <Reveal as="p" className={`lead ${styles.luminaLead}`} delay={0.1}>
                                A LÚMINA não é apenas um curso ou um grupo de aulas. É uma jornada de 12 meses, com
                                encontros, conteúdos, exercícios e uma comunidade de mulheres comprometidas com seu
                                amadurecimento.
                            </Reveal>
                            <ul className={styles.luminaLista}>
                                {INCLUSO_LUMINA.map((item, i) => (
                                    <Reveal as="li" key={item} delay={0.05 * i}>
                                        <span>{String(i + 1).padStart(2, '0')}</span>
                                        {item}
                                    </Reveal>
                                ))}
                            </ul>
                            <Reveal className={styles.luminaPreco} delay={0.1}>
                                <span>Investimento</span>
                                <strong>{LUMINA.preco}</strong>
                                <small>por ano · ou {LUMINA.parcelamento}</small>
                            </Reveal>
                            <Reveal className={styles.acoes} delay={0.15}>
                                <Botao href={LINKS.checkoutLumina} tom="claro">
                                    Quero entrar na LÚMINA
                                </Botao>
                                <Botao href="/comunidade-lumina" variante="texto" tom="claro">
                                    Conhecer a comunidade
                                </Botao>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </Luz>

            {/* Depoimentos */}
            <section id="depoimentos" className={`${styles.depoimentos} section`}>
                <div className="container">
                    <div className={styles.depoimentosTopo}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Depoimentos
                            </Reveal>
                            <SplitReveal
                                texto={'Histórias de quem decidiu\nolhar para *dentro*'}
                                className={`display ${styles.depoimentosTitulo}`}
                            />
                        </div>
                        <Reveal as="p" className={styles.depoimentosTexto} delay={0.1}>
                            Mulheres que viveram a LÚMINA e o Essência do Lar contam, com as próprias palavras, o que
                            mudou na forma de se enxergar.
                        </Reveal>
                    </div>
                    <VideoDepoimentos
                        grupos={[
                            {
                                id: 'lumina',
                                rotulo: 'Comunidade LÚMINA',
                                legenda: 'Comunidade LÚMINA',
                                videos: DEPOIMENTOS_LUMINA,
                            },
                            {
                                id: 'essencia',
                                rotulo: 'Essência do Lar',
                                legenda: 'Essência do Lar',
                                videos: DEPOIMENTOS_ESSENCIA,
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Essência do Lar */}
            <ImagemExpansiva
                src="/images/essencia-mesa.webp"
                alt="Mulheres reunidas à mesa em um jardim durante o Essência do Lar"
                posicao="center 40%"
            >
                <p className="eyebrow">Essência do Lar · Encontro presencial</p>
                <SplitReveal
                    as="p"
                    texto={'“A mulher sábia\nedifica a sua *casa.*”'}
                    className={`display onDark ${styles.essenciaCitacao}`}
                />
                <p className={styles.essenciaReferencia}>Provérbios 14:1</p>
            </ImagemExpansiva>

            <section className={`${styles.essencia} section`}>
                <div className={`container ${styles.essenciaGrade}`}>
                    <SplitReveal
                        texto="Antes de falar sobre o cuidado com a casa, olhamos para a *mulher* que vive dentro dela."
                        className={`display ${styles.essenciaTitulo}`}
                    />
                    <div>
                        <Reveal className="prose">
                            <p>
                                O Essência do Lar é uma experiência presencial cristã, criada para acolher, fortalecer e
                                cuidar de mulheres que dedicam a vida aos filhos, ao casamento e à família, mas acabam
                                deixando as próprias necessidades em segundo plano.
                            </p>
                            <p>
                                Um ambiente de Palavra, comunhão, reflexão e cuidado, para lembrar que edificar sua
                                casa não significa abandonar a si mesma.
                            </p>
                        </Reveal>
                        <Reveal className={styles.acoes} delay={0.1}>
                            <Botao href="/essencia-do-lar">Conhecer o Essência do Lar</Botao>
                        </Reveal>
                    </div>
                </div>
                <div className={styles.essenciaGaleria}>
                    <GaleriaFotos fotos={FOTOS_ESSENCIA} />
                </div>
            </section>

            {/* Livro */}
            <section className={`${styles.livro} section`}>
                <div className={`container ${styles.livroGrade}`}>
                    <div className={styles.livroFotos}>
                        <ParallaxImage
                            src="/images/livro-camila.webp"
                            alt="Camila Meneses segurando o livro Mulheres que se amam"
                            sizes="(max-width: 900px) 60vw, 26vw"
                            className={styles.livroFotoA}
                            posicao="center 30%"
                        />
                        <ParallaxImage
                            src="/images/livro-lancamento.webp"
                            alt="Camila autografando livros no lançamento"
                            sizes="(max-width: 900px) 50vw, 20vw"
                            className={styles.livroFotoB}
                            intensidade={18}
                            atraso={0.25}
                        />
                    </div>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            Livro digital
                        </Reveal>
                        <SplitReveal texto={'Mulheres que\n*se amam*'} className={`display ${styles.livroTitulo}`} />
                        <Reveal as="p" className={`lead ${styles.livroLead}`} delay={0.1}>
                            Um chamado para mulheres presas em ciclos de dependência emocional, insegurança e relações
                            disfuncionais. Relatos sinceros e o método dos 6 Pilares da Autoestima como guia.
                        </Reveal>
                        <Reveal as="blockquote" className={styles.livroMantra} delay={0.15}>
                            “Eu escolho me amar, eu escolho confiar em mim.”
                        </Reveal>
                        <Reveal className={styles.acoes} delay={0.2}>
                            <Botao href={LINKS.checkoutLivro}>Quero o livro</Botao>
                            <Botao href="/livro" variante="texto">
                                Saiba mais
                            </Botao>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Parcerias />

            <ConviteFinal />
        </>
    );
}

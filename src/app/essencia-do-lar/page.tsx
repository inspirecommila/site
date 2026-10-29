import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ListaNumerada from '@/components/sections/ListaNumerada';
import GaleriaFotos from '@/components/sections/GaleriaFotos';
import VideoDepoimentos from '@/components/sections/VideoDepoimentos';
import Investimento from '@/components/sections/Investimento';
import OutrosCaminhos from '@/components/sections/OutrosCaminhos';
import ConviteFinal from '@/components/sections/ConviteFinal';
import ImagemExpansiva from '@/components/motion/ImagemExpansiva';
import Marquee from '@/components/motion/Marquee';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Botao from '@/components/ui/Botao';
import { CONTATO, DEPOIMENTOS_ESSENCIA, FOTOS_ESSENCIA, LINKS } from '@/content/site';
import s from '@/styles/pagina.module.scss';

export const metadata: Metadata = {
    title: 'Essência do Lar',
    description:
        'Experiência presencial cristã em Matozinhos (MG) para acolher, fortalecer e cuidar de mulheres que desejam amadurecer emocional e espiritualmente.',
};

const COMO_FUNCIONA = [
    { titulo: 'Encontros presenciais', texto: 'Realizados em Matozinhos, Minas Gerais, com vagas limitadas.' },
    { titulo: 'Ministrações e reflexões bíblicas', texto: 'A Palavra como fundamento para a mulher por inteiro.' },
    { titulo: 'Participação de convidadas', texto: 'Cada edição é preparada de forma especial, com vozes que somam à caminhada.' },
    { titulo: 'Oração, acolhimento e comunhão', texto: 'Um tempo fora da correria para viver a presença de Deus junto de outras mulheres.' },
    { titulo: 'Atividades de reflexão', texto: 'Momentos práticos de desenvolvimento pessoal e conversas profundas.' },
];

export default function EssenciaPage() {
    return (
        <>
            <PageHero
                eyebrow="Essência do Lar · Presencial"
                titulo={'“A mulher sábia\nedifica a sua *casa.*”'}
                lead="Uma experiência presencial cristã, criada para acolher, fortalecer e cuidar de mulheres que desejam amadurecer emocional e espiritualmente. Provérbios 14:1."
                imagem={{
                    src: '/images/essencia-participante-3.webp',
                    alt: 'Participante emocionada, com as mãos unidas, durante o Essência do Lar',
                    posicao: 'center 35%',
                }}
                meta={['Presencial', 'Matozinhos, MG', 'Vagas limitadas']}
                acoes={
                    <>
                        <Botao href={CONTATO.instagramEssencia} tom="claro">
                            Ver próximas edições
                        </Botao>
                        <Botao href={LINKS.whatsappEssencia} variante="texto" tom="claro">
                            Falar no WhatsApp
                        </Botao>
                    </>
                }
            />

            <section className={`${s.claro} section`}>
                <div className={`container ${s.duas} ${s.alinhaFim}`}>
                    <SplitReveal
                        texto="Antes de falar sobre o cuidado com a casa, precisamos olhar para a *mulher* que vive dentro dela."
                        className={`display ${s.tituloMenor}`}
                    />
                    <Reveal className="prose">
                        <p>
                            Muitas mulheres dedicam a vida aos filhos, ao casamento, à família e às responsabilidades
                            diárias, mas acabam deixando suas próprias necessidades emocionais e espirituais em segundo
                            plano.
                        </p>
                        <p>
                            O Essência do Lar proporciona um ambiente de Palavra, comunhão, reflexão e cuidado. O
                            propósito é que cada mulher reconheça seu valor, seja fortalecida em sua identidade e
                            compreenda que edificar sua casa não significa abandonar a si mesma.
                        </p>
                    </Reveal>
                </div>
            </section>

            <ImagemExpansiva
                src="/images/essencia-grupo.webp"
                alt="Participantes do Essência do Lar reunidas para uma foto"
                posicao="center 45%"
            >
                <p className="eyebrow">Falamos sobre a mulher por inteiro</p>
                <SplitReveal
                    as="p"
                    texto={'Palavra, comunhão,\nreflexão e *cuidado.*'}
                    className={`display onDark ${s.imagemTitulo}`}
                />
            </ImagemExpansiva>

            <div className={`${s.creme}`} style={{ paddingBlock: 'clamp(2rem, 4vw, 3rem)' }}>
                <Marquee
                    velocidade={46}
                    itens={[
                        'Identidade',
                        'Relacionamentos',
                        'Maternidade',
                        'Casamento',
                        'Sabedoria',
                        'Feridas emocionais',
                        'Vida com Deus',
                    ]}
                />
            </div>

            <section className={`${s.claro} section`}>
                <div className={`container ${s.duas}`}>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            Como funciona
                        </Reveal>
                        <SplitReveal
                            texto="Algumas horas fora da correria, para *viver* a presença"
                            className={`display ${s.tituloMenor}`}
                        />
                    </div>
                    <ListaNumerada itens={COMO_FUNCIONA} colunas={1} />
                </div>
                <div className={s.espacoTopo}>
                    <GaleriaFotos fotos={FOTOS_ESSENCIA} />
                </div>
            </section>

            <section className={`${s.creme} section`}>
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Depoimentos
                            </Reveal>
                            <SplitReveal texto="O que elas *levaram* para casa" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Participantes contam, com as próprias palavras, como foi viver o Essência do Lar.
                        </Reveal>
                    </div>
                    <VideoDepoimentos
                        grupos={[
                            {
                                id: 'essencia',
                                rotulo: 'Essência do Lar',
                                legenda: 'Participante',
                                videos: DEPOIMENTOS_ESSENCIA,
                            },
                        ]}
                    />
                </div>
            </section>

            <Investimento
                titulo={'Garanta seu lugar\nna próxima *edição*'}
                valor="R$ 350"
                complemento="valor de referência por participante"
                detalhes={[
                    'Encontro presencial em Matozinhos, MG',
                    'Ministrações, convidadas e momentos de oração',
                    'Vagas limitadas a cada edição',
                ]}
                acoes={
                    <>
                        <Botao href={CONTATO.instagramEssencia} tom="claro">
                            Ver próximas edições
                        </Botao>
                        <Botao href={LINKS.whatsappEssencia} variante="texto" tom="claro">
                            Falar no WhatsApp
                        </Botao>
                    </>
                }
                nota="O valor pode variar conforme a edição. Acompanhe as datas pelo Instagram do Essência do Lar."
            />

            <OutrosCaminhos atual="/essencia-do-lar" />
            <ConviteFinal acao={{ href: LINKS.whatsappEssencia, rotulo: 'Quero participar' }} />
        </>
    );
}

import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ListaNumerada from '@/components/sections/ListaNumerada';
import RaizDiagrama from '@/components/sections/RaizDiagrama';
import Investimento from '@/components/sections/Investimento';
import OutrosCaminhos from '@/components/sections/OutrosCaminhos';
import ConviteFinal from '@/components/sections/ConviteFinal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Botao from '@/components/ui/Botao';
import { LINKS, RAIZ } from '@/content/site';
import s from '@/styles/pagina.module.scss';

export const metadata: Metadata = {
    title: 'Imersão RAIZ',
    description:
        'Uma experiência on-line e ao vivo de aproximadamente quatro horas para olhar além dos comportamentos que se repetem e compreender as feridas e crenças que estão por trás deles.',
};

const COMO_FUNCIONA = [
    { titulo: 'Imersão on-line ao vivo', texto: 'Você participa de onde estiver, conduzida por Camila em tempo real.' },
    { titulo: 'Cerca de quatro horas', texto: 'Um tempo intenso e dedicado, longe da correria, para olhar para a própria história.' },
    { titulo: 'Exercícios de autorreflexão', texto: 'Não é uma aula para assistir. Você é conduzida por reflexões e exercícios práticos.' },
    { titulo: 'Workbook da experiência', texto: 'Um material para acompanhar a imersão e registrar o que for descoberto.' },
    { titulo: 'Fundamento cristão', texto: 'Princípios bíblicos e renovação da mente aplicados à vida real.' },
];

const TEMAS = [
    'Infância',
    'Experiências emocionais marcantes',
    'Identidade',
    'Crenças',
    'Máscaras de sobrevivência',
    'Padrões de comportamento',
    'Renovação da mente',
    'Reconstrução',
];

export default function RaizPage() {
    return (
        <>
            <PageHero
                eyebrow="Imersão RAIZ"
                titulo={'Comportamento é fruto.\nTransformação acontece\nna *raiz.*'}
                lead="Uma experiência on-line intensiva para mulheres que desejam olhar além dos comportamentos que se repetem e compreender as experiências, feridas e crenças que estão por trás deles."
                imagem={{ src: '/images/raiz-logo.webp', alt: 'Marca da Imersão RAIZ' }}
                imagemContida
                meta={['Ao vivo, on-line', 'Cerca de 4 horas', RAIZ.preco, `Próxima turma: ${RAIZ.proximaData}`]}
                acoes={
                    <Botao href={LINKS.whatsappRaiz} tom="claro">
                        Reservar minha vaga
                    </Botao>
                }
            />

            <section className={`${s.claro} section`}>
                <div className={`container ${s.duas} ${s.alinhaCentro}`}>
                    <ParallaxImage
                        src="/images/camila-bege-tablet.webp"
                        alt="Camila Meneses de terno bege, segurando um tablet"
                        sizes="(max-width: 900px) 90vw, 40vw"
                        className={s.foto}
                        posicao="center 25%"
                    />
                    <div>
                        <Reveal as="p" className="eyebrow">
                            Por que olhar para a raiz
                        </Reveal>
                        <SplitReveal
                            texto="Você reconhece o que sente, mas nem sempre *de onde* vem."
                            className={`display ${s.tituloMenor}`}
                        />
                        <Reveal className={`prose ${s.espacoTopo}`}>
                            <p>
                                Muitas vezes, uma mulher reconhece que é insegura, tem medo de rejeição, não consegue
                                estabelecer limites ou vive buscando aprovação, mas não compreende como esses padrões
                                foram construídos.
                            </p>
                            <p>
                                A RAIZ nasceu para proporcionar esse primeiro mergulho: ajudar você a reconhecer o que
                                precisa de cuidado, desenvolver consciência sobre a sua história e iniciar novas
                                escolhas.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="section dark">
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                O que acontece na imersão
                            </Reveal>
                            <SplitReveal texto="Do que aparece ao que *sustenta*" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Saímos do comportamento aparente e descemos até aquilo que pode estar sustentando
                            determinados padrões no presente.
                        </Reveal>
                    </div>
                    <RaizDiagrama />
                    <Reveal as="p" className={`${s.citacao} ${s.citacaoCentral} ${s.espacoTopo}`}>
                        Muitas vezes tentamos mudar o fruto enquanto a raiz continua intacta.
                    </Reveal>
                </div>
            </section>

            <section className={`${s.creme} section`}>
                <div className={`container ${s.duas}`}>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            Como funciona
                        </Reveal>
                        <SplitReveal texto="Quatro horas *intensas* e práticas" className={`display ${s.tituloMenor}`} />
                        <Reveal as="ul" className={s.etiquetas} delay={0.1}>
                            {TEMAS.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </Reveal>
                    </div>
                    <ListaNumerada itens={COMO_FUNCIONA} colunas={1} />
                </div>
            </section>

            <Investimento
                titulo={'Seu primeiro\n*mergulho*'}
                valor={RAIZ.preco}
                complemento={`próxima turma: ${RAIZ.proximaData}`}
                detalhes={[
                    'Imersão on-line e ao vivo',
                    'Aproximadamente quatro horas de duração',
                    'Workbook para acompanhar a experiência',
                    'O valor pode virar crédito para ingressar na Comunidade LÚMINA',
                ]}
                acoes={
                    <Botao href={LINKS.whatsappRaiz} tom="claro">
                        Reservar minha vaga
                    </Botao>
                }
                nota="O crédito para a Comunidade LÚMINA segue as condições da campanha vigente."
            />

            <OutrosCaminhos atual="/imersao-raiz" />
            <ConviteFinal
                titulo={'Transformação começa quando\ntemos coragem de olhar\npara a *raiz.*'}
                acao={{ href: LINKS.whatsappRaiz, rotulo: 'Reservar minha vaga' }}
            />
        </>
    );
}

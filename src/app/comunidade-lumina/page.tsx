import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ListaNumerada from '@/components/sections/ListaNumerada';
import Pilares from '@/components/sections/Pilares';
import VideoDepoimentos from '@/components/sections/VideoDepoimentos';
import Investimento from '@/components/sections/Investimento';
import OutrosCaminhos from '@/components/sections/OutrosCaminhos';
import ConviteFinal from '@/components/sections/ConviteFinal';
import ScrollWords from '@/components/motion/ScrollWords';
import ParallaxImage from '@/components/motion/ParallaxImage';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Luz from '@/components/motion/Luz';
import Botao from '@/components/ui/Botao';
import { DEPOIMENTOS_LUMINA, LINKS, LUMINA } from '@/content/site';
import s from '@/styles/pagina.module.scss';
import n from './novos.module.scss';

export const metadata: Metadata = {
    title: 'Comunidade LÚMINA',
    description:
        'Uma jornada de 12 meses de autoconhecimento, cuidado emocional, renovação da mente e fortalecimento da identidade em Cristo, conduzida por Camila Meneses.',
};

const PARA_QUEM = [
    { titulo: 'Carregam feridas emocionais da infância', texto: 'E desejam compreender como essas experiências influenciam a vida hoje.' },
    { titulo: 'Viveram rejeição, abandono ou experiências marcantes', texto: 'E querem trabalhar as crenças construídas a partir delas.' },
    { titulo: 'Vivem inseguras e buscam aprovação', texto: 'Sentem que precisam da confirmação das pessoas para se sentirem suficientes.' },
    { titulo: 'Têm dificuldade de dizer não', texto: 'De estabelecer limites e de se posicionar.' },
    { titulo: 'Sentem que perderam a própria identidade', texto: 'Depois do casamento, da maternidade ou de outras fases da vida.' },
    { titulo: 'Repetem padrões nos relacionamentos', texto: 'E percebem que os mesmos ciclos emocionais voltam a acontecer.' },
    { titulo: 'Desejam fortalecer a autoestima', texto: 'E reconhecer o próprio valor.' },
    { titulo: 'Querem constância e hábitos saudáveis', texto: 'Desenvolvendo disciplina no dia a dia.' },
    { titulo: 'Desejam aprofundar o relacionamento com Deus', texto: 'E compreender sua identidade como filhas amadas.' },
];

const INCLUSO = [
    { titulo: 'Encontros semanais ao vivo', texto: 'Aulas conduzidas por Camila sobre desenvolvimento emocional, identidade, autoestima, relacionamentos, posicionamento, constância e fé.' },
    { titulo: 'Aulas gravadas', texto: 'Os encontros ficam disponíveis na plataforma Kiwify para assistir ou rever durante todo o período de acesso.' },
    { titulo: 'Workbooks e exercícios práticos', texto: 'Materiais para aprofundar os conteúdos e aplicar os aprendizados no cotidiano.' },
    { titulo: 'Ferramentas de autoconhecimento', texto: 'Atividades para reconhecer crenças, padrões emocionais, comportamentos e oportunidades de mudança.' },
    { titulo: 'Áudios e conteúdos complementares', texto: 'Para acompanhar você em diferentes momentos da rotina.' },
    { titulo: 'Desafios práticos', texto: 'Propostas para desenvolver constância, autocuidado, posicionamento e novas atitudes.' },
    { titulo: 'Grupo exclusivo de WhatsApp', texto: 'Espaço de comunicação, apoio coletivo, interação e orientações.' },
    { titulo: 'Participações especiais', texto: 'Convidadas falando sobre Palavra de Deus, nutrição, atividade física, autocuidado e desenvolvimento pessoal.' },
    { titulo: 'Lenço Filha amada', texto: 'Um lenço da comunidade, enviado para quem já participa e para cada mulher que entrar a partir de agora.' },
];

const PILARES = [
    {
        titulo: 'Identidade em Cristo',
        texto: 'Compreender que nosso valor não depende da aprovação das pessoas, das conquistas ou das experiências que vivemos, mas de quem somos diante de Deus.',
        imagem: '/images/camila-biblia.webp',
        posicao: 'center 30%',
    },
    {
        titulo: 'Feridas da infância e cuidado emocional',
        texto: 'Olhar para experiências marcantes, compreender suas possíveis repercussões e reconhecer crenças e padrões que precisam de atenção.',
        imagem: '/images/camila-azul-janela.webp',
    },
    {
        titulo: 'Autoestima e confiança',
        texto: 'Desenvolver uma relação mais saudável consigo mesma, reconhecendo o próprio valor e fortalecendo a segurança pessoal.',
        imagem: '/images/camila-mostarda-corpo.webp',
    },
    {
        titulo: 'Relacionamentos e posicionamento',
        texto: 'Trabalhar comunicação, limites, responsabilidade emocional, necessidade de aprovação e padrões que se repetem nas relações.',
        imagem: '/images/camila-listrado-poltrona.webp',
    },
    {
        titulo: 'Constância e amadurecimento',
        texto: 'Transformar consciência em atitudes práticas, desenvolvendo disciplina, hábitos e responsabilidade pelas próprias escolhas.',
        imagem: '/images/camila-bege-banco.webp',
    },
    {
        titulo: 'Fé e relacionamento com Deus',
        texto: 'Cultivar intimidade com Deus, aprofundar o conhecimento da Palavra e fortalecer a identidade espiritual.',
        imagem: '/images/camila-vermelho-oracao.webp',
    },
];

const CONVITES = [
    { titulo: 'Convide', texto: 'Outras mulheres para conhecerem a LÚMINA.' },
    { titulo: 'Ajude', texto: 'Mais mulheres a viverem essa jornada.' },
    { titulo: 'Receba', texto: 'Uma comissão por cada nova inscrição feita pelo seu link.' },
];

const PASSOS_ELAS = [
    { titulo: 'Cadastro', texto: 'Você se cadastra como afiliada na Kiwify, pelo link que a Camila envia.' },
    { titulo: 'Aprovação', texto: 'Camila aprova a sua solicitação.' },
    { titulo: 'Seu link', texto: 'Você pega o link exclusivo direto na plataforma.' },
    { titulo: 'Comissão', texto: 'Sempre que uma mulher entrar na LÚMINA por esse link, você recebe a comissão.' },
];

const BENEFICIOS = [
    'Maior consciência sobre sua história e suas emoções',
    'Reconhecimento de crenças e comportamentos repetitivos',
    'Fortalecimento da autoestima e da identidade',
    'Mais clareza para estabelecer limites e se posicionar',
    'Atitudes mais saudáveis nos relacionamentos',
    'Construção de hábitos e constância',
    'Fortalecimento da fé e do relacionamento com Deus',
    'Pertencimento a uma comunidade de mulheres que desejam amadurecer',
];

export default function LuminaPage() {
    return (
        <>
            <PageHero
                eyebrow="Comunidade LÚMINA"
                titulo={'Um lugar para voltar\npara *si mesma.*'}
                lead="Uma jornada de 12 meses para redescobrir sua identidade como filha de Deus, unindo autoconhecimento, desenvolvimento emocional, ferramentas práticas e princípios bíblicos."
                imagem={{ src: '/images/camila-palestra.webp', alt: 'Camila Meneses ministrando com microfone', posicao: 'center 20%' }}
                meta={['12 meses', 'Encontros ao vivo', 'Plataforma on-line']}
                acoes={
                    <>
                        <Botao href={LINKS.checkoutLumina} tom="claro">
                            Quero entrar na LÚMINA
                        </Botao>
                        <Botao href={LINKS.whatsappLumina} variante="texto" tom="claro">
                            Tirar dúvidas
                        </Botao>
                    </>
                }
            />

            <section className={`${s.claro} section`}>
                <div className="container">
                    <Reveal as="p" className="eyebrow">
                        Por que a LÚMINA existe
                    </Reveal>
                    <ScrollWords
                        className={s.espacoTopo}
                        texto="Muitas mulheres aprenderam a sobreviver emocionalmente, mas nunca tiveram a oportunidade de olhar com profundidade para aquilo que viveram. *A LÚMINA existe para ajudá-las a compreender sua história sem continuar permitindo que suas feridas definam quem são.*"
                    />
                </div>
            </section>

            <section className={`${s.creme} section`}>
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Para quem é
                            </Reveal>
                            <SplitReveal texto="Talvez você se *reconheça* aqui" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            A LÚMINA foi pensada para mulheres que desejam crescer, reconhecer sua identidade e
                            construir uma vida alinhada àquilo em que acreditam.
                        </Reveal>
                    </div>
                    <ListaNumerada itens={PARA_QUEM} colunas={3} />
                </div>
            </section>

            <section className={`${s.claro} section`}>
                <div className={`container ${s.duas}`}>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            O que está incluso
                        </Reveal>
                        <SplitReveal
                            texto="Não é apenas um curso. É uma *caminhada* acompanhada."
                            className={`display ${s.tituloMenor}`}
                        />
                        <ParallaxImage
                            src="/images/lumina-plataforma.webp"
                            alt="Plataforma da LÚMINA aberta em um tablet, com as áreas Comece aqui, Áudioaulas e Encontros ao vivo"
                            sizes="(max-width: 900px) 90vw, 40vw"
                            className={`${s.foto} ${s.espacoTopo}`}
                        />
                    </div>
                    <ListaNumerada itens={INCLUSO} colunas={1} />
                </div>
            </section>

            <Luz className="section dark">
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Pilares
                            </Reveal>
                            <SplitReveal texto="Seis pilares para *amadurecer*" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Cada pilar é trabalhado ao longo do ano com encontros, exercícios e reflexões, no seu ritmo.
                        </Reveal>
                    </div>
                    <Pilares pilares={PILARES} />
                </div>
            </Luz>

            <section className={`${s.creme} section`}>
                <div className={`container ${s.duas} ${s.alinhaCentro}`}>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            Benefícios
                        </Reveal>
                        <Reveal as="p" className={`${s.citacao} ${s.espacoTopo}`}>
                            Nosso propósito não é formar mulheres perfeitas, mas acompanhar mulheres dispostas a
                            crescer.
                        </Reveal>
                    </div>
                    <ListaNumerada itens={BENEFICIOS.map((titulo) => ({ titulo }))} colunas={1} />
                </div>
            </section>

            <section className={`${s.claro} section`}>
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Depoimentos
                            </Reveal>
                            <SplitReveal texto="Quem já está *caminhando*" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Participantes da comunidade contam o que mudou na forma de se enxergar.
                        </Reveal>
                    </div>
                    <VideoDepoimentos
                        grupos={[
                            {
                                id: 'lumina',
                                rotulo: 'Comunidade LÚMINA',
                                legenda: 'Participante LÚMINA',
                                videos: DEPOIMENTOS_LUMINA,
                            },
                        ]}
                    />
                </div>
            </section>

            <section id="lenco" className={`${s.areia} ${n.ancora} section`}>
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Um presente
                            </Reveal>
                            <SplitReveal texto="Filha *amada.*" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Cada mulher da Comunidade LÚMINA recebe um lenço feito para ela.
                        </Reveal>
                    </div>
                    <div className={n.lencoGrade}>
                        <ParallaxImage
                            src="/images/filha-amada-ondas.webp"
                            alt="Estampa Filha amada, da Comunidade LÚMINA, com faixas orgânicas em verde"
                            sizes="(max-width: 900px) 100vw, 24vw"
                            className={n.onda}
                            inteira
                            revelar="lados"
                        />
                        <ParallaxImage
                            src="/images/lenco-filha-amada.webp"
                            alt="Lenço Filha amada usado no pescoço, na bolsa, no pulso, no cabelo e na calça"
                            sizes="(max-width: 900px) 100vw, 46vw"
                            className={n.lenco}
                            inteira
                            revelar="baixo"
                            atraso={0.08}
                        />
                        <ParallaxImage
                            src="/images/filha-amada-listras.webp"
                            alt="Estampa Filha amada, da Comunidade LÚMINA, com moldura listrada"
                            sizes="(max-width: 900px) 100vw, 24vw"
                            className={n.listra}
                            inteira
                            revelar="lados"
                            atraso={0.14}
                        />
                    </div>
                </div>
            </section>

            <Investimento
                titulo={'Um ano inteiro\nde *processo*'}
                valor={LUMINA.preco}
                complemento={`por ano · ou ${LUMINA.parcelamento}`}
                detalhes={[
                    'Acesso anual, com duração de 12 meses',
                    'Lenço Filha amada, presente de cada participante',
                    'Encontros ao vivo e aulas gravadas na plataforma',
                    'Materiais, exercícios, áudios e desafios práticos',
                    'Grupo exclusivo de WhatsApp',
                ]}
                acoes={
                    <>
                        <Botao href={LINKS.checkoutLumina} tom="claro">
                            Garantir minha vaga
                        </Botao>
                        <Botao href={LINKS.whatsappLumina} variante="texto" tom="claro">
                            Falar no WhatsApp
                        </Botao>
                    </>
                }
                nota="Parcelamento conforme as condições da plataforma Kiwify. Quem participou da Imersão RAIZ pode usar o valor como crédito para ingressar na comunidade, conforme as condições da campanha."
            />

            <section id="elas-multiplicam" className={`${s.creme} ${n.ancora} section`}>
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Programa de indicação
                            </Reveal>
                            <SplitReveal texto="Elas *multiplicam*" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Uma mulher alcança outra. Juntas, multiplicamos transformação e oportunidades.
                        </Reveal>
                    </div>
                    <ul className={n.convites}>
                        {CONVITES.map((item, i) => (
                            <Reveal as="li" key={item.titulo} delay={i * 0.06}>
                                <h3>{item.titulo}</h3>
                                <p>{item.texto}</p>
                            </Reveal>
                        ))}
                    </ul>
                    <div className={`${s.duas} ${s.alinhaCentro} ${s.espacoTopo}`}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Como funciona
                            </Reveal>
                            <SplitReveal
                                texto="Toda mulher da LÚMINA pode *indicar.*"
                                className={`display ${s.tituloMenor}`}
                            />
                            <Reveal as="p" className={n.chamada} delay={0.08}>
                                O Elas Multiplicam é o programa de indicação da comunidade. Você convida outras
                                mulheres e recebe uma comissão por cada nova inscrição feita pela sua indicação.
                            </Reveal>
                        </div>
                        <ListaNumerada itens={PASSOS_ELAS} colunas={1} />
                    </div>
                    <Reveal as="blockquote" className={`${s.citacao} ${s.espacoTopo}`}>
                        Não é sobre vender. É sobre compartilhar o que transforma.
                    </Reveal>
                    <Reveal as="p" className={n.chamada} delay={0.08}>
                        Você não precisa ser influenciadora, ter muitos seguidores ou experiência em vendas. Pode
                        começar indicando amigas, familiares e mulheres que se beneficiariam dessa jornada.
                    </Reveal>
                    <Reveal className={s.acoes} delay={0.12}>
                        <Botao href={LINKS.whatsappElas}>Quero fazer parte</Botao>
                        <Botao href={LINKS.checkoutLumina} variante="texto">
                            Entrar na LÚMINA
                        </Botao>
                    </Reveal>
                </div>
            </section>

            <OutrosCaminhos atual="/comunidade-lumina" />
            <ConviteFinal
                titulo={'Você não precisa continuar\ndefinida pelo que *aconteceu* com você.'}
                acao={{ href: LINKS.checkoutLumina, rotulo: 'Quero entrar na LÚMINA' }}
            />
        </>
    );
}

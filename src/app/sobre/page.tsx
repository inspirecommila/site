import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ConviteFinal from '@/components/sections/ConviteFinal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import ScrollWords from '@/components/motion/ScrollWords';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Marquee from '@/components/motion/Marquee';
import Botao from '@/components/ui/Botao';
import s from '@/styles/pagina.module.scss';
import styles from './sobre.module.scss';

export const metadata: Metadata = {
    title: 'Sobre',
    description:
        'Camila Meneses é especialista em Autoestima e Confiança, esposa, mãe de três filhos, cristã e fundadora da Comunidade LÚMINA.',
};

const FATOS = [
    { rotulo: 'Especialidade', valor: 'Autoestima e Confiança' },
    { rotulo: 'Formação', valor: 'Educação Física e Terapia em formação, por instituições reconhecidas pelo MEC' },
    { rotulo: 'Família', valor: 'Esposa e mãe de três filhos' },
    { rotulo: 'Fé', valor: 'Cristã, fundadora da Comunidade LÚMINA' },
];

const CAPITULOS = [
    {
        numero: 'I',
        titulo: 'O corpo',
        paragrafos: [
            'Durante muitos anos, trabalhei com o desenvolvimento físico de mulheres, ajudando-as a transformar seus corpos, desenvolver disciplina e alcançar resultados.',
            'Mas foi através da minha própria história que compreendi que existem feridas que nenhuma mudança exterior consegue alcançar.',
            'Por muito tempo, busquei na aparência, no reconhecimento e na aprovação das pessoas um valor que eu ainda não havia aprendido a reconhecer dentro de mim.',
        ],
        imagem: { src: '/images/camila-mostarda-cadeira.webp', alt: 'Camila Meneses sentada, de terno mostarda, em estúdio', posicao: 'center 30%' },
    },
    {
        numero: 'II',
        titulo: 'A história',
        paragrafos: [
            'Foi quando comecei a olhar para minha infância, minhas experiências, minhas feridas emocionais e as crenças que havia construído ao longo da vida que passei a compreender como o passado pode continuar influenciando nossas escolhas, nossos relacionamentos e a maneira como nos enxergamos.',
        ],
        imagem: { src: '/images/camila-listrado-poltrona.webp', alt: 'Camila Meneses sentada em uma poltrona, sorrindo', posicao: 'center 30%' },
    },
    {
        numero: 'III',
        titulo: 'Filha',
        paragrafos: [
            'Mas a transformação mais profunda da minha caminhada aconteceu quando comecei a desenvolver um relacionamento verdadeiro com Deus. Eu conhecia a respeito dEle, mas ainda precisava aprender a viver minha identidade como filha.',
            'Foi nesse relacionamento que comecei a compreender que meu valor não estava na minha aparência, no que eu conseguia realizar, na aprovação das pessoas ou nas experiências que haviam marcado minha história.',
        ],
        citacao: 'Antes de qualquer papel que eu desempenhasse, eu era filha. Amada, conhecida e vista por Deus.',
        imagem: { src: '/images/camila-biblia.webp', alt: 'Camila Meneses lendo a Bíblia ao ar livre', posicao: 'center 30%' },
    },
    {
        numero: 'IV',
        titulo: 'O propósito',
        paragrafos: [
            'Hoje, essa verdade é o fundamento do meu trabalho. Meu propósito é conduzir mulheres em uma jornada de autoconhecimento, fortalecimento emocional e restauração da identidade.',
            'Ajudo cada uma a olhar para as feridas da infância, experiências traumáticas, rejeição, abandono, crenças limitantes e padrões emocionais construídos ao longo da vida, e a reconstruir a maneira como se enxerga à luz da Palavra de Deus.',
        ],
        imagem: { src: '/images/camila-ministrando.webp', alt: 'Camila Meneses ministrando para um grupo de mulheres', posicao: 'center 40%' },
        paisagem: true,
    },
];

export default function SobrePage() {
    return (
        <>
            <PageHero
                eyebrow="Sobre Camila Meneses"
                titulo={'Identidade, cura\nemocional e *restauração.*'}
                lead="Daquilo que as feridas fizeram você esquecer sobre quem é. Sou Camila Meneses, especialista em Autoestima e Confiança, esposa, mãe de três filhos, cristã e fundadora da Comunidade LÚMINA."
                imagem={{
                    src: '/images/camila-listrado-sala.webp',
                    alt: 'Camila Meneses em pé, de conjunto listrado, em uma sala clara',
                    posicao: 'center 30%',
                }}
                acoes={
                    <Botao href="/comunidade-lumina" tom="claro">
                        Conheça a LÚMINA
                    </Botao>
                }
            />

            <section className={`${s.claro} ${styles.fatos}`}>
                <div className={`container ${styles.fatosGrade}`}>
                    {FATOS.map((f, i) => (
                        <Reveal key={f.rotulo} className={styles.fato} delay={i * 0.08}>
                            <span>{f.rotulo}</span>
                            <p>{f.valor}</p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {CAPITULOS.map((c, i) => (
                <section key={c.numero} className={`${i % 2 ? s.creme : s.claro} section`}>
                    <div className={`container ${styles.capitulo}`} data-invertido={i % 2 === 1}>
                        <div className={styles.capituloTexto}>
                            <Reveal className={styles.capituloRotulo}>
                                <span className={styles.romano}>{c.numero}</span>
                                <span>Capítulo</span>
                            </Reveal>
                            <SplitReveal texto={c.titulo} className={`display ${styles.capituloTitulo}`} />
                            <Reveal className="prose" delay={0.1}>
                                {c.paragrafos.map((p) => (
                                    <p key={p.slice(0, 24)}>{p}</p>
                                ))}
                            </Reveal>
                            {c.citacao ? (
                                <Reveal as="blockquote" className={styles.capituloCitacao} delay={0.15}>
                                    “{c.citacao}”
                                </Reveal>
                            ) : null}
                        </div>
                        <ParallaxImage
                            src={c.imagem.src}
                            alt={c.imagem.alt}
                            sizes="(max-width: 900px) 90vw, 42vw"
                            posicao={c.imagem.posicao}
                            className={c.paisagem ? s.fotoPaisagem : i === 2 ? s.fotoArco : s.foto}
                            revelar={i % 2 ? 'lados' : 'baixo'}
                        />
                    </div>
                </section>
            ))}

            <section className="section dark">
                <div className="container">
                    <Reveal as="p" className="eyebrow">
                        No que eu acredito
                    </Reveal>
                    <ScrollWords
                        className={s.espacoTopo}
                        texto="Muitas mulheres cresceram aprendendo a sobreviver emocionalmente. Aprenderam a agradar para serem aceitas, a se calar para evitar rejeição, a controlar tudo para se sentirem seguras. *E, sem perceber, foram se afastando de sua essência.*"
                    />
                    <div className={`${s.duas} ${s.espacoTopo}`}>
                        <Reveal className="prose">
                            <p>
                                Por isso, meu trabalho não se limita a ensinar uma mulher a ser mais confiante ou a se
                                posicionar melhor. Quero ajudá-la a compreender sua história, reconhecer aquilo que
                                precisa ser cuidado e reconstruir a maneira como se enxerga.
                            </p>
                            <p>
                                Acredito que o Senhor não nos chama para viver aprisionadas às definições que nossas
                                feridas construíram sobre nós. Ele nos convida a conhecê-Lo, renovar nossa mente e
                                compreender nossa identidade nEle.
                            </p>
                        </Reveal>
                        <Reveal className="prose" delay={0.1}>
                            <p>
                                Foi desse propósito que nasceu a Comunidade LÚMINA, um espaço onde unimos
                                autoconhecimento, desenvolvimento emocional, ferramentas práticas e princípios bíblicos
                                para acompanhar mulheres em uma caminhada de amadurecimento.
                            </p>
                            <p>
                                Meu desejo é que cada mulher compreenda que sua história merece ser acolhida, suas
                                feridas merecem cuidado e sua identidade não precisa continuar sendo definida pelo que
                                viveu.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <div className={`${s.musgo} ${styles.faixa}`}>
                <Marquee itens={['Antes de ser mãe', 'Antes de ser esposa', 'Antes de ser profissional', 'Filha amada de Deus']} />
            </div>

            <section className={`${s.areia} section`}>
                <div className="container">
                    <Reveal as="p" className={`${s.citacao} ${s.citacaoCentral}`}>
                        Antes de qualquer outra coisa, existe uma identidade que precisa ser reconhecida: a de filha
                        amada de Deus.
                    </Reveal>
                    <Reveal as="p" className={`${s.fonte} ${styles.assinatura}`} delay={0.1}>
                        Camila Meneses
                    </Reveal>
                </div>
            </section>

            <ConviteFinal />
        </>
    );
}

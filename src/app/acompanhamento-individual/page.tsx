import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ListaNumerada from '@/components/sections/ListaNumerada';
import JornadaEncontros from '@/components/sections/JornadaEncontros';
import Investimento from '@/components/sections/Investimento';
import OutrosCaminhos from '@/components/sections/OutrosCaminhos';
import ConviteFinal from '@/components/sections/ConviteFinal';
import ScrollWords from '@/components/motion/ScrollWords';
import ParallaxImage from '@/components/motion/ParallaxImage';
import Reveal from '@/components/motion/Reveal';
import SplitReveal from '@/components/motion/SplitReveal';
import Botao from '@/components/ui/Botao';
import { LINKS } from '@/content/site';
import s from '@/styles/pagina.module.scss';

export const metadata: Metadata = {
    title: 'Acompanhamento individual',
    description:
        'Programa personalizado de 13 encontros para compreender sua história, reconhecer feridas emocionais e fortalecer a identidade e a vida emocional e espiritual.',
};

const COMO_FUNCIONA = [
    { titulo: 'Programa personalizado de 13 encontros', texto: 'Construído a partir da sua história e do momento que você está vivendo.' },
    { titulo: 'Conversas direcionadas', texto: 'Cada encontro parte das suas necessidades individuais, sem fórmula pronta.' },
    { titulo: 'Exercícios de autoconhecimento e reflexão', texto: 'Para que o que aparece no encontro comece a ir para a vida real.' },
    { titulo: 'Identificação de crenças e padrões', texto: 'Reconhecer o que se repete e o que precisa ser cuidado.' },
    { titulo: 'Ferramentas práticas', texto: 'Para desenvolver novas atitudes, limites e formas de se relacionar.' },
    { titulo: 'Reflexões bíblicas', texto: 'Fortalecimento da identidade em Deus, respeitando a individualidade de cada pessoa.' },
];

const TEMAS = [
    'Identidade',
    'Autoestima',
    'Feridas da infância',
    'Rejeição e abandono',
    'Crenças',
    'Relacionamentos',
    'Limites',
    'Responsabilidade emocional',
];

export default function AcompanhamentoPage() {
    return (
        <>
            <PageHero
                eyebrow="Acompanhamento individual"
                titulo={'Um processo\n*só seu.*'}
                lead="Uma jornada personalizada para mulheres, homens e adolescentes que desejam compreender sua história, reconhecer feridas emocionais e desenvolver novas maneiras de se enxergar, se posicionar e se relacionar."
                imagem={{ src: '/images/camila-blazer-branco.webp', alt: 'Camila Meneses de blazer branco, sentada', posicao: 'center 15%' }}
                meta={['13 encontros', 'Individual', 'Mulheres, homens e adolescentes']}
                acoes={
                    <Botao href={LINKS.whatsappAcompanhamento} tom="claro">
                        Falar sobre disponibilidade
                    </Botao>
                }
            />

            <section className={`${s.claro} section`}>
                <div className="container">
                    <Reveal as="p" className="eyebrow">
                        O ponto de partida
                    </Reveal>
                    <ScrollWords
                        className={s.espacoTopo}
                        texto="Muitas pessoas cresceram acreditando que precisavam agradar para serem amadas, se calar para serem aceitas ou conquistar reconhecimento para se sentirem suficientes. *O acompanhamento existe para olhar com cuidado para essa história.*"
                    />
                </div>
            </section>

            <section className={`${s.creme} section`}>
                <div className={`container ${s.duas} ${s.alinhaCentro}`}>
                    <div>
                        <Reveal as="p" className="eyebrow">
                            O foco do trabalho
                        </Reveal>
                        <SplitReveal
                            texto="Da infância aos padrões que ainda *influenciam* a vida adulta"
                            className={`display ${s.tituloMenor}`}
                        />
                        <Reveal className={`prose ${s.espacoTopo}`}>
                            <p>
                                O trabalho tem como foco as experiências da infância, as marcas de rejeição e abandono,
                                as crenças construídas ao longo da vida e os padrões emocionais que continuam
                                influenciando os comportamentos.
                            </p>
                            <p>
                                A fé cristã é um fundamento importante dessa abordagem. Além de compreender sua história,
                                você pode fortalecer seu relacionamento com Deus e reconhecer sua identidade como filho
                                ou filha amada dEle.
                            </p>
                        </Reveal>
                        <Reveal as="ul" className={s.etiquetas} delay={0.1}>
                            {TEMAS.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </Reveal>
                    </div>
                    <ParallaxImage
                        src="/images/camila-azul-janela.webp"
                        alt="Camila Meneses de perfil, olhando pela janela"
                        sizes="(max-width: 900px) 90vw, 40vw"
                        className={s.fotoArco}
                    />
                </div>
            </section>

            <section className={`${s.claro} section`}>
                <div className="container">
                    <div className={s.cabecalho}>
                        <div>
                            <Reveal as="p" className="eyebrow">
                                Como funciona
                            </Reveal>
                            <SplitReveal texto="Treze encontros, *uma* caminhada" className={`display ${s.titulo}`} />
                        </div>
                        <Reveal as="p" delay={0.1}>
                            Ao longo dos encontros, trabalhamos o fortalecimento da identidade, a autoestima, os
                            relacionamentos, os limites e a responsabilidade emocional.
                        </Reveal>
                    </div>
                    <JornadaEncontros />
                    <div className={s.espacoTopo}>
                        <ListaNumerada itens={COMO_FUNCIONA} colunas={3} />
                    </div>
                </div>
            </section>

            <Investimento
                titulo={'Um acompanhamento\n*próximo* e personalizado'}
                valor="R$ 3.000"
                complemento="pelo programa completo"
                detalhes={[
                    '13 encontros individuais',
                    'Parcelamento no cartão em até 12 vezes, conforme condições',
                    'Ou pagamento em duas partes, mediante alinhamento',
                    'Vagas conforme disponibilidade de agenda',
                ]}
                acoes={
                    <Botao href={LINKS.whatsappAcompanhamento} tom="claro">
                        Falar com a Camila
                    </Botao>
                }
                nota="O acompanhamento é voltado ao desenvolvimento pessoal e espiritual e não substitui psicoterapia ou tratamentos de saúde."
            />

            <OutrosCaminhos atual="/acompanhamento-individual" />
            <ConviteFinal acao={{ href: LINKS.whatsappAcompanhamento, rotulo: 'Falar sobre disponibilidade' }} />
        </>
    );
}

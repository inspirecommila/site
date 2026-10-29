'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import Reveal from '@/components/motion/Reveal';
import styles from './RaizDiagrama.module.scss';

const FRUTOS = [
    'Insegurança',
    'Medo de rejeição',
    'Dificuldade de dizer não',
    'Busca constante por aprovação',
    'Padrões que se repetem',
];

const RAIZES = [
    { d: 'M400 0 C 404 80, 394 170, 400 300', rotulo: 'Identidade', x: 50, y: 95, quando: 0.85 },
    { d: 'M400 20 C 360 40, 300 50, 250 80 S 170 130, 150 150', rotulo: 'Feridas emocionais', x: 18.75, y: 51, quando: 0.45 },
    { d: 'M398 90 C 370 140, 300 170, 230 200 S 120 250, 90 270', rotulo: 'Infância', x: 11.25, y: 86, quando: 0.7 },
    { d: 'M402 30 C 440 50, 500 60, 550 90 S 630 130, 650 150', rotulo: 'Crenças', x: 81.25, y: 50, quando: 0.5 },
    { d: 'M402 100 C 430 150, 500 180, 570 205 S 690 250, 715 270', rotulo: 'Experiências marcantes', x: 89.4, y: 88, quando: 0.78 },
];

const RADICELAS = [
    'M250 80 C 244 96, 242 112, 236 134',
    'M550 90 C 560 108, 564 124, 572 146',
    'M230 200 C 222 220, 220 236, 212 256',
    'M570 205 C 580 224, 582 238, 590 256',
    'M400 180 C 382 206, 362 224, 340 238',
    'M399 220 C 418 244, 438 256, 460 264',
];

function Rotulo({
    texto,
    x,
    y,
    quando,
    progresso,
}: {
    texto: string;
    x: number;
    y: number;
    quando: number;
    progresso: MotionValue<number>;
}) {
    const opacity = useTransform(progresso, [quando - 0.12, quando], [0, 1]);
    const deslocamento = useTransform(progresso, [quando - 0.12, quando], [10, 0]);
    return (
        <motion.span className={styles.rotulo} style={{ left: `${x}%`, top: `${y}%`, opacity, y: deslocamento }}>
            {texto}
        </motion.span>
    );
}

export default function RaizDiagrama() {
    const ref = useRef<HTMLDivElement>(null);
    const reduzir = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 70%'] });
    const desenho = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const desenhoFino = useTransform(scrollYProgress, [0.45, 1], [0, 1]);
    const progresso = reduzir ? undefined : scrollYProgress;

    return (
        <div className={styles.diagrama}>
            <div className={styles.fruto}>
                <p className={styles.legenda}>O fruto · o que aparece</p>
                <ul className={styles.frutos}>
                    {FRUTOS.map((f, i) => (
                        <Reveal as="li" key={f} delay={i * 0.07}>
                            {f}
                        </Reveal>
                    ))}
                </ul>
            </div>

            <div className={styles.solo} aria-hidden>
                <span />
            </div>

            <div className={styles.raiz} ref={ref}>
                <p className={styles.legenda}>A raiz · o que sustenta</p>
                <div className={styles.palco}>
                    <svg viewBox="0 0 800 340" preserveAspectRatio="none" className={styles.svg} aria-hidden>
                        {RAIZES.map((r) => (
                            <motion.path
                                key={r.d}
                                d={r.d}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.4}
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                                style={{ pathLength: reduzir ? 1 : desenho }}
                            />
                        ))}
                        {RADICELAS.map((d) => (
                            <motion.path
                                key={d}
                                d={d}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={0.8}
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                                opacity={0.6}
                                style={{ pathLength: reduzir ? 1 : desenhoFino }}
                            />
                        ))}
                    </svg>
                    {RAIZES.filter((r) => r.rotulo).map((r) =>
                        progresso ? (
                            <Rotulo
                                key={r.rotulo}
                                texto={r.rotulo}
                                x={r.x}
                                y={r.y}
                                quando={r.quando}
                                progresso={progresso}
                            />
                        ) : (
                            <span key={r.rotulo} className={styles.rotulo} style={{ left: `${r.x}%`, top: `${r.y}%` }}>
                                {r.rotulo}
                            </span>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}

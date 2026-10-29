const WHATSAPP_NUMERO = '5531995461766';

export function whatsapp(mensagem: string) {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const CONTATO = {
    email: 'camila.menesescf@gmail.com',
    instagram: 'https://www.instagram.com/inspirecommila',
    instagramUsuario: '@inspirecommila',
    instagramEssencia: 'https://www.instagram.com/euessenciadolar_',
    whatsappGeral: whatsapp('Olá, Camila! Vim pelo site e gostaria de conversar com você.'),
};

export const LINKS = {
    checkoutLumina: 'https://pay.kiwify.com.br/yNDMXCs',
    checkoutLivro: 'https://pay.kiwify.com.br/LEGuFPG',
    whatsappLumina: whatsapp('Olá, Camila! Vim pelo site e quero saber mais sobre a Comunidade LÚMINA.'),
    whatsappRaiz: whatsapp('Olá, Camila! Vim pelo site e quero reservar minha vaga na Imersão RAIZ.'),
    whatsappAcompanhamento: whatsapp(
        'Olá, Camila! Vim pelo site e quero saber sobre o acompanhamento individual.',
    ),
    whatsappEssencia: whatsapp('Olá, Camila! Vim pelo site e quero saber sobre a próxima edição do Essência do Lar.'),
};

export const RAIZ = {
    preco: 'R$ 97',
    proximaData: '7 de novembro',
};

export const LUMINA = {
    preco: 'R$ 397',
    parcelamento: '12x de R$ 41,06',
};

export type Caminho = {
    href: string;
    numero: string;
    titulo: string;
    resumo: string;
    meta: string[];
    imagem: string;
    posicao?: string;
};

export const CAMINHOS: Caminho[] = [
    {
        href: '/comunidade-lumina',
        numero: '01',
        titulo: 'Comunidade LÚMINA',
        resumo: 'Uma jornada de 12 meses para voltar para si mesma e redescobrir sua identidade como filha de Deus.',
        meta: ['12 meses', 'On-line', `${LUMINA.preco} por ano`],
        imagem: '/images/camila-palestra.webp',
        posicao: 'center 20%',
    },
    {
        href: '/imersao-raiz',
        numero: '02',
        titulo: 'Imersão RAIZ',
        resumo: 'Comportamento é fruto. Quatro horas ao vivo para olhar além do que se repete e chegar à raiz.',
        meta: ['4 horas', 'Ao vivo', RAIZ.preco],
        imagem: '/images/camila-bege-tablet.webp',
        posicao: 'center 25%',
    },
    {
        href: '/acompanhamento-individual',
        numero: '03',
        titulo: 'Acompanhamento individual',
        resumo: 'Um processo só seu: treze encontros para compreender sua história e fortalecer sua identidade.',
        meta: ['13 encontros', 'Individual'],
        imagem: '/images/camila-blazer-branco.webp',
        posicao: 'center 15%',
    },
    {
        href: '/essencia-do-lar',
        numero: '04',
        titulo: 'Essência do Lar',
        resumo: 'Experiência presencial cristã para mulheres: Palavra, comunhão, reflexão e cuidado.',
        meta: ['Presencial', 'Matozinhos, MG'],
        imagem: '/images/essencia-participante-3.webp',
        posicao: 'center 30%',
    },
    {
        href: '/livro',
        numero: '05',
        titulo: 'Mulheres que se amam',
        resumo: 'Livro digital com relatos sinceros e o método dos 6 Pilares da Autoestima como guia.',
        meta: ['Livro digital'],
        imagem: '/images/livro-camila.webp',
        posicao: 'center 20%',
    },
];

export const NAVEGACAO = [
    { href: '/sobre', rotulo: 'Sobre' },
    { href: '/comunidade-lumina', rotulo: 'LÚMINA' },
    { href: '/imersao-raiz', rotulo: 'Imersão RAIZ' },
    { href: '/acompanhamento-individual', rotulo: 'Acompanhamento' },
    { href: '/essencia-do-lar', rotulo: 'Essência do Lar' },
    { href: '/livro', rotulo: 'Livro' },
];

export type Video = { src: string; poster: string };

export const DEPOIMENTOS_LUMINA: Video[] = [1, 2, 3, 4].map((n) => ({
    src: `https://linksvibe.com.br/aux-videos/inspirecommila-lumina-${n}.mp4`,
    poster: `/videos/lumina-${n}.webp`,
}));

export const DEPOIMENTOS_ESSENCIA: Video[] = [1, 2, 3, 4].map((n) => ({
    src: `https://linksvibe.com.br/aux-videos/inspirecommila-essencia-${n}.mp4`,
    poster: `/videos/essencia-${n}.webp`,
}));

export const FOTOS_ESSENCIA = [
    { src: '/images/essencia-mesa.webp', alt: 'Mulheres reunidas à mesa em um jardim durante o Essência do Lar', ratio: 1.37 },
    { src: '/images/essencia-participante-3.webp', alt: 'Participante emocionada durante uma ministração', ratio: 0.56 },
    { src: '/images/essencia-grupo.webp', alt: 'Grupo de participantes do Essência do Lar', ratio: 1.33 },
    { src: '/images/essencia-participante-1.webp', alt: 'Participante em momento de reflexão', ratio: 0.56 },
    { src: '/images/essencia-turma.webp', alt: 'Turma reunida ao final do encontro', ratio: 2.05 },
    { src: '/images/essencia-participante-2.webp', alt: 'Participante atenta à ministração', ratio: 0.56 },
];

export const PARCERIAS = [
    {
        marca: 'Donna Carioca',
        segmento: 'Moda fitness',
        codigo: 'INSPIRECOMMILA',
        rotulo: 'Código de vendedor',
        instrucao: 'No site, use o campo “Código de vendedor”, na parte de baixo do carrinho. No campo de cupom o benefício não ativa.',
        site: 'https://www.donnacarioca.com.br',
        imagem: '/images/parceria-donna.webp',
    },
    {
        marca: 'Fly Basic',
        segmento: 'Essenciais',
        codigo: 'INSPIRE10',
        rotulo: 'Cupom de desconto',
        instrucao: 'Use o código no campo de cupom ao finalizar a compra.',
        site: 'https://www.flybasic.com.br',
        imagem: '/images/parceria-fly.webp',
    },
];

import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.scss';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { urlDoSite } from '@/lib/urlDoSite';

const cormorant = Cormorant_Garamond({
    variable: '--font-cormorant',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    style: ['normal', 'italic'],
    display: 'swap',
});

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(urlDoSite()),
    title: {
        default: 'Camila Meneses · Identidade, cura emocional e fé',
        template: '%s · Camila Meneses',
    },
    description:
        'Camila Meneses conduz mulheres em uma jornada de autoconhecimento, fortalecimento emocional e restauração da identidade à luz da Palavra de Deus. Fundadora da Comunidade LÚMINA.',
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        siteName: 'Camila Meneses',
        images: [{ url: '/images/camila-mostarda-retrato.webp', width: 1330, height: 2000 }],
    },
};

export const viewport: Viewport = {
    themeColor: '#1c221b',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
            <body>
                <SmoothScroll>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}

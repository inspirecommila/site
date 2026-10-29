import type { MetadataRoute } from 'next';
import { NAVEGACAO } from '@/content/site';
import { urlDoSite } from '@/lib/urlDoSite';

export const dynamic = 'force-static';

const BASE = urlDoSite();

export default function sitemap(): MetadataRoute.Sitemap {
    return ['/', ...NAVEGACAO.map((n) => n.href)].map((rota) => ({
        url: `${BASE}${rota === '/' ? '' : rota}`,
        changeFrequency: 'monthly',
        priority: rota === '/' ? 1 : 0.8,
    }));
}

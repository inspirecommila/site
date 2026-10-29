import type { MetadataRoute } from 'next';
import { urlDoSite } from '@/lib/urlDoSite';

export const dynamic = 'force-static';

const BASE = urlDoSite();

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${BASE}/sitemap.xml`,
    };
}

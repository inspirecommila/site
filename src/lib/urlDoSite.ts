/** URL canônica do site. No Netlify, `URL` é o endereço principal do deploy. */
export function urlDoSite() {
    const url = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'http://localhost:3000';
    return url.replace(/\/$/, '');
}

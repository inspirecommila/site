'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

function ResetOnNavigate() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true, force: true });
    }, [pathname, lenis]);

    return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.09, anchors: true, autoRaf: true }}>
            <ResetOnNavigate />
            {children}
        </ReactLenis>
    );
}

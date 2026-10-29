import { useCallback, useSyncExternalStore } from 'react';

export function useMediaQuery(consulta: string) {
    const inscrever = useCallback(
        (avisar: () => void) => {
            const mql = window.matchMedia(consulta);
            mql.addEventListener('change', avisar);
            return () => mql.removeEventListener('change', avisar);
        },
        [consulta],
    );

    return useSyncExternalStore(
        inscrever,
        () => window.matchMedia(consulta).matches,
        () => false,
    );
}

import { useSyncExternalStore } from 'react';

const semInscricao = () => () => {};

/** `true` somente após a hidratação, sem causar divergência com o HTML do servidor. */
export function useNoCliente() {
    return useSyncExternalStore(
        semInscricao,
        () => true,
        () => false,
    );
}

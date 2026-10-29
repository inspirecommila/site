import Botao from '@/components/ui/Botao';

export default function NotFound() {
    return (
        <section
            className="dark"
            style={{
                minHeight: '100svh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 'var(--header-h)',
            }}
        >
            <div className="container">
                <p className="eyebrow">Página não encontrada</p>
                <h1 className="display" style={{ marginTop: '1.5rem', fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
                    Este caminho <em>não existe,</em>
                    <br />
                    mas outros te esperam.
                </h1>
                <div style={{ marginTop: '2.6rem' }}>
                    <Botao href="/" tom="claro">
                        Voltar ao início
                    </Botao>
                </div>
            </div>
        </section>
    );
}

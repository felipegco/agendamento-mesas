'use client';

import { useState } from 'react';
import { areas, ultimaAtualizacao, nomeDoEspaco } from '@/data/tables';
import AerialMap from '@/components/AerialMap';
import TableList from '@/components/TableList';
import TableModal from '@/components/TableModal';
import Legend from '@/components/Legend';
import ViewToggle from '@/components/ViewToggle';

export default function Home() {
    const [view, setView] = useState('mapa');
    const [selecionado, setSelecionado] = useState(null);

    const totalMesas = areas.reduce((acc, a) => acc + a.mesas.length, 0);
    const totalLivres = areas.reduce(
        (acc, a) => acc + a.mesas.filter((m) => m.status === 'livre').length,
        0
    );

    return (
        <main className="min-h-screen">
            {/* Cabeçalho atualizado com as cores e as logos */}
            <header className="bg-rio text-white border-b-4 border-madeira shadow-md">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

                    {/* Espaço das Logos (Discreto, no topo) */}
                    <div className="flex items-center justify-between mb-8 bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                        <img
                            src="/logo_portal.png"
                            alt="Portal dos Nobres Residencial"
                            className="h-14 sm:h-16 w-auto rounded-lg bg-opacity-20 bg-white p-1.5 shadow-sm"
                        />
                        <img
                            src="/logo_raiz.png"
                            alt="Raiz"
                            className="h-14 sm:h-16 w-auto rounded-lg bg-opacity-20 bg-white p-1 shadow-sm"
                        />
                    </div>

                    <p className="font-corpo font-800 uppercase tracking-widest text-sm text-madeira">
                        {nomeDoEspaco}
                    </p>
                    <h1 className="font-titulo text-4xl sm:text-5xl font-semibold mt-1">
                        Consulte as mesas disponíveis
                    </h1>
                    <p className="font-corpo text-lg sm:text-xl text-white/90 mt-3 max-w-2xl">
                        Veja abaixo a situação das mesas no quiosque, na lanchonete, no espaço família
                        e as vagas do estacionamento. Toque em uma área para ver os detalhes.
                    </p>
                </div>
            </header>

            {/* Faixa de Status */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
                <div className="bg-white rounded-xl2 shadow-lg px-5 py-5 flex flex-wrap items-center justify-between gap-3 border border-tinta/5">
                    <p className="font-corpo text-tinta text-base sm:text-lg">
                        <span className="font-800 text-livre text-xl">{totalLivres}</span> de{' '}
                        <span className="font-800">{totalMesas}</span> mesas/vagas livres agora
                    </p>
                    <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-livre opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-livre"></span>
            </span>
                        <p className="font-corpo text-tinta/60 text-sm sm:text-base font-bold">
                            Atualizado em {ultimaAtualizacao}
                        </p>
                    </div>
                </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Legend />
                    <ViewToggle view={view} setView={setView} />
                </div>

                {view === 'mapa' ? (
                    <AerialMap areas={areas} onSelect={(area, mesa) => setSelecionado({ area, mesa })} />
                ) : (
                    <TableList areas={areas} onSelect={(area, mesa) => setSelecionado({ area, mesa })} />
                )}
            </div>

            {/* Rodapé */}
            <footer className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 pt-6">
                <div className="border-t border-tinta/10 pt-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="font-corpo text-tinta/60 text-sm sm:text-base">
                        Dúvidas ou reservas: entre em contato pelo telefone <strong>(00) 0000-0000</strong>.
                    </p>
                    <p className="font-corpo text-tinta/40 text-sm">
                        Portal dos Nobres Residencial &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </footer>

            {selecionado && (
                <TableModal
                    area={selecionado.area}
                    mesa={selecionado.mesa}
                    onClose={() => setSelecionado(null)}
                />
            )}
        </main>
    );
}
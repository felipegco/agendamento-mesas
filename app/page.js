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
  const [selecionado, setSelecionado] = useState(null); // { area, mesa }

  const totalMesas = areas.reduce((acc, a) => acc + a.mesas.length, 0);
  const totalLivres = areas.reduce(
      (acc, a) => acc + a.mesas.filter((m) => m.status === 'livre').length,
      0
  );

  return (
      <main className="min-h-screen">
        <header className="bg-rio text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <p className="font-corpo font-700 uppercase tracking-widest text-sm text-white/70">
              {nomeDoEspaco}
            </p>
            <h1 className="font-titulo text-4xl sm:text-5xl font-semibold mt-1">
              Consulte as mesas disponíveis
            </h1>
            <p className="font-corpo text-lg sm:text-xl text-white/85 mt-3 max-w-2xl">
              Veja abaixo a situação das mesas no quiosque, na lanchonete, no espaço família
              e as vagas do estacionamento. Toque em uma mesa para ver os detalhes.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
          <div className="bg-white rounded-xl2 shadow-md px-5 py-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-corpo text-tinta text-base sm:text-lg">
              <span className="font-800 text-livre">{totalLivres}</span> de{' '}
              <span className="font-800">{totalMesas}</span> mesas/vagas livres agora
            </p>
            <p className="font-corpo text-tinta/60 text-sm sm:text-base">
              Atualizado em {ultimaAtualizacao}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Legend />
            <ViewToggle view={view} setView={setView} />
          </div>

          {view === 'mapa' ? (
              <div className="space-y-3">
                {/* Indicador visual de rolagem (exibido apenas no mobile) */}
                <div className="flex items-center justify-center gap-2 text-tinta/60 font-corpo text-sm md:hidden bg-white/60 py-2.5 px-4 rounded-xl border border-tinta/5 shadow-sm animate-pulse">
                  <span className="text-base">↔️</span>
                  <span>Deslize para os lados para navegar no mapa</span>
                </div>

                {/* Contêiner com estouro horizontal (-mx-4 e px-4 dão o efeito de sangria infinita
                até a borda física do celular, deixando o scroll muito mais elegante)
            */}
                <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin">
                  {/* Força uma largura mínima confortável de 950px no mobile para manter os alvos
                  de toque grandes. No desktop (md:), volta a se comportar normalmente (min-w-0)
              */}
                  <div className="min-w-[950px] md:min-w-0 transition-all duration-300">
                    <AerialMap areas={areas} onSelect={(area, mesa) => setSelecionado({ area, mesa })} />
                  </div>
                </div>
              </div>
          ) : (
              <TableList areas={areas} onSelect={(area, mesa) => setSelecionado({ area, mesa })} />
          )}
        </div> {/* <-- Esta é a tag que estava faltando fechar na sua versão */}

        <footer className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 pt-4">
          <p className="font-corpo text-tinta/60 text-sm sm:text-base">
            Dúvidas ou reservas: entre em contato pelo telefone (00) 0000-0000.
          </p>
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
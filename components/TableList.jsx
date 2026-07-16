'use client';

import { useState } from 'react';

export default function TableList({ areas, onSelect }) {
  // Estado para controlar quais áreas estão expandidas (começam todas recolhidas)
  const [expandedAreas, setExpandedAreas] = useState({});

  const toggleArea = (areaId) => {
    setExpandedAreas((prev) => ({
      ...prev,
      [areaId]: !prev[areaId],
    }));
  };

  return (
      <div className="space-y-4">
        {areas.map((area) => {
          const total = area.mesas.length;
          const livres = area.mesas.filter((m) => m.status === 'livre').length;
          const isExpanded = !!expandedAreas[area.id];

          return (
              <section
                  key={area.id}
                  aria-labelledby={`titulo-${area.id}`}
                  className="bg-white rounded-xl2 shadow-sm border border-tinta/10 overflow-hidden transition-all duration-200"
              >
                {/* Cabeçalho clicável (Sumário do Ambiente) */}
                <button
                    type="button"
                    onClick={() => toggleArea(area.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-areia/20 active:bg-areia/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rio"
                >
                  {/* Lado Esquerdo: Nome e Descrição Curta */}
                  <div className="min-w-0 flex-1">
                    <h3
                        id={`titulo-${area.id}`}
                        className="font-titulo text-xl sm:text-2xl font-semibold text-tinta flex items-center gap-2"
                    >
                      <span className="shrink-0">{area.icone}</span>
                      <span className="truncate">{area.nome}</span>
                    </h3>
                    <p className="font-corpo text-tinta/60 text-sm sm:text-base truncate mt-0.5">
                      {area.descricao}
                    </p>
                  </div>

                  {/* Lado Direito: Quantidade Disponível e Indicador Visual */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <div className="text-right">
                      <p className="font-corpo font-800 text-livre text-base sm:text-lg">
                        {livres} livres
                      </p>
                      <p className="font-corpo text-xs text-tinta/50">
                        de {total} {area.tipoDeItem.toLowerCase()}{total > 1 ? 's' : ''}
                      </p>
                    </div>

                    {/* Seta indicativa de expansão */}
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-areia-dark/30 flex items-center justify-center text-tinta/70 transition-colors">
                      <svg
                          className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Grid de Mesas/Vagas (Renderizado apenas quando expandido) */}
                {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-tinta/5 bg-areia/10">
                      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                        {area.mesas.map((mesa) => {
                          const livre = mesa.status === 'livre';
                          return (
                              <button
                                  key={mesa.numero}
                                  type="button"
                                  onClick={() => onSelect(area, mesa)}
                                  className={`aspect-square rounded-xl2 flex flex-col items-center justify-center gap-1 font-corpo font-800 text-lg sm:text-xl border-2 transition-transform hover:scale-[1.03] focus-visible:scale-[1.03] ${
                                      livre
                                          ? 'bg-livre-bg border-livre text-livre'
                                          : 'bg-reservado-bg border-reservado text-reservado'
                                  }`}
                                  aria-label={`${area.tipoDeItem} ${mesa.numero}, ${
                                      livre ? 'livre' : 'reservada'
                                  }`}
                              >
                                <span>{mesa.numero}</span>
                                <span className="text-[0.65rem] sm:text-xs font-700 uppercase tracking-wide">
                          {livre ? 'Livre' : 'Reservada'}
                        </span>
                              </button>
                          );
                        })}
                      </div>
                    </div>
                )}
              </section>
          );
        })}
      </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { CONFIG_AMBIENTES } from '@/data/mapConfig';

// Coordenadas das caixas no mapa geral
const ZONA_CAIXA = {
  estacionamento: { x: 40, y: 250, width: 200, height: 230 },
  espacoFamilia: { x: 270, y: 250, width: 240, height: 230 },
  lanchonete: { x: 530, y: 250, width: 280, height: 250 },
  quiosque: { x: 830, y: 250, width: 210, height: 230 }
};

export default function AerialMap({ areas, onSelect }) {
  const [areaExpandidaId, setAreaExpandidaId] = useState(null);
  const areaExpandida = areas.find(a => a.id === areaExpandidaId);

  // Trava o scroll do fundo da página quando o modal full-screen abre
  useEffect(() => {
    document.body.style.overflow = areaExpandidaId ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [areaExpandidaId]);

  return (
      <>
        {/* MAPA GERAL (FUNDO) */}
        <svg viewBox="0 0 1070 660" className="w-full h-auto rounded-xl2 shadow-sm select-none" role="group">
          <rect x="0" y="0" width="1070" height="660" rx="24" fill="#F1E9D8" />
          <path d="M0,70 C160,10 300,125 480,80 C660,35 820,120 1070,55 L1070,0 L0,0 Z" fill="#2C5654" />
          <text x="20" y="35" className="font-corpo" fontSize="16" fill="#EAF3F2" fontWeight="700">Rio Beira-Rio</text>

          <g opacity="0.9">
            {Array.from({ length: 26 }).map((_, i) => (
                <circle key={`arvore-${i}`} cx={10 + i * 42 + (i % 3) * 6} cy={120 + (i % 4) * 14} r={26 + (i % 3) * 6} fill={i % 2 === 0 ? '#2F4A30' : '#3C5C3A'} />
            ))}
          </g>

          <rect x="20" y="215" width="1030" height="345" rx="18" fill="#E4D8BE" />
          <rect x="0" y="575" width="1070" height="60" fill="#7C766A" />
          <line x1="0" y1="605" x2="1070" y2="605" stroke="#F1E9D8" strokeWidth="4" strokeDasharray="26 18" />

          {/* Renderiza os cartões dinamicamente (DRY) */}
          {areas.map((area) => (
              <AreaCard
                  key={area.id}
                  area={area}
                  box={ZONA_CAIXA[area.id]}
                  onClick={() => setAreaExpandidaId(area.id)}
              />
          ))}
        </svg>

        {/* TELA CHEIA (MODAL EXPANDIDO) */}
        {areaExpandida && (
            <ExpandedAreaModal
                area={areaExpandida}
                onClose={() => setAreaExpandidaId(null)}
                onSelect={onSelect}
            />
        )}
      </>
  );
}

// ============================================================================
// SUBCOMPONENTES (Para manter o código DRY)
// ============================================================================

// 1. Cartão exibido no Mapa Geral
function AreaCard({ area, box, onClick }) {
  if (!box) return null;
  const total = area.mesas.length;
  const livres = area.mesas.filter((m) => m.status === 'livre').length;

  return (
      <g
          role="button"
          tabIndex={0}
          onClick={onClick}
          className="cursor-pointer transition-transform duration-150 hover:scale-[1.03] outline-none"
          style={{ transformOrigin: `${box.x + box.width / 2}px ${box.y + box.height / 2}px` }}
      >
        <rect x={box.x} y={box.y} width={box.width} height={box.height} rx="20" fill="#FFFFFF" stroke={area.corZona} strokeWidth="3" />
        <rect x={box.x} y={box.y} width={box.width} height={60} rx="20" fill={area.corZona} />
        <rect x={box.x} y={box.y + 30} width={box.width} height={30} fill={area.corZona} />
        <text x={box.x + box.width / 2} y={box.y + 36} textAnchor="middle" className="font-titulo" fontSize="18" fontWeight="700" fill="#FFFFFF">
          {area.icone} {area.nome}
        </text>
        <rect x={box.x + 20} y={box.y + 85} width={box.width - 40} height={75} rx="12" fill="#E4F0E3" stroke="#3F7A4E" strokeWidth="1.5" />
        <text x={box.x + box.width / 2} y={box.y + 118} textAnchor="middle" className="font-corpo" fontSize="22" fontWeight="800" fill="#3F7A4E">
          {livres} livres
        </text>
        <text x={box.x + box.width / 2} y={box.y + 142} textAnchor="middle" className="font-corpo" fontSize="13" fontWeight="600" fill="#20291F" opacity="0.7">
          de {total} {area.tipoDeItem.toLowerCase()}s
        </text>
        <rect x={box.x + 15} y={box.y + 175} width={box.width - 30} height={40} rx="10" fill="#F1E9D8" />
        <text x={box.x + box.width / 2} y={box.y + 200} textAnchor="middle" className="font-corpo" fontSize="13" fontWeight="800" fill="#2C5654">
          Ampliar Planta ➔
        </text>
      </g>
  );
}

// 2. Modal em Tela Cheia
function ExpandedAreaModal({ area, onClose, onSelect }) {
  const configVisual = CONFIG_AMBIENTES[area.id] || { viewBox: "0 0 800 800", posicoes: {}, renderPOIs: () => null };
  const viewBox = configVisual.viewBox || "0 0 800 800";
  const isVaga = area.tipoDeItem === 'Vaga';

  return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col">
        <header className="px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between shadow-md z-10" style={{ backgroundColor: area.corZona }}>
          <div>
            <h2 className="font-titulo text-2xl sm:text-3xl font-bold text-white">
              {area.icone} {area.nome}
            </h2>
            <p className="font-corpo text-white/80 text-sm sm:text-base mt-1">
              {area.mesas.filter(m => m.status === 'livre').length} disponíveis
            </p>
          </div>
          <button onClick={onClose} className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-colors font-corpo text-sm sm:text-base border border-white/30">
            Fechar Mapa
          </button>
        </header>

        <div className="flex-1 overflow-auto bg-areia-dark/10 p-2 sm:p-6 flex items-start justify-center">
          <svg viewBox={viewBox} className="w-full max-w-3xl h-auto bg-white rounded-xl shadow-lg border-2" style={{ borderColor: area.corZona }}>
            {/* Cenário da Planta */}
            {configVisual.renderPOIs()}

            {/* Mesas ou Vagas (DRY: O formato se adapta automaticamente) */}
            {area.mesas.map((mesa, idx) => {
              const livre = mesa.status === 'livre';
              const cor = livre ? '#3F7A4E' : '#B4472F';
              const pos = configVisual.posicoes[String(mesa.numero)] || { cx: 80 + (idx * 60), cy: 320 };

              return (
                  <g
                      key={mesa.numero}
                      tabIndex={0}
                      role="button"
                      onClick={(e) => { e.stopPropagation(); onSelect(area, mesa); }}
                      className="cursor-pointer transition-transform duration-100 hover:scale-[1.15] outline-none"
                      style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                  >
                    {isVaga ? (
                        <rect x={pos.cx - 40} y={pos.cy - 60} width="80" height="120" fill={cor} stroke="#FFFFFF" strokeWidth="2.5" className="shadow-md" />
                    ) : (
                        <rect x={pos.cx - 30} y={pos.cy - 30} width="60" height="60" rx="8" fill={cor} stroke="#FFFFFF" strokeWidth="2.5" className="shadow-md" />
                    )}
                    <text x={pos.cx} y={pos.cy + 8} textAnchor="middle" className="font-corpo" fontSize="22" fontWeight="800" fill="#FFFFFF">
                      {mesa.numero}
                    </text>
                  </g>
              );
            })}
          </svg>
        </div>
      </div>
  );
}
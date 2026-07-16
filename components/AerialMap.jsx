'use client';

import { useState } from 'react';

// Coordenadas das caixas no mapa geral
const ZONA_CAIXA = {
  estacionamento: { x: 40, y: 250, width: 200, height: 230 },
  espacoFamilia: { x: 270, y: 250, width: 240, height: 230 },
  lanchonete: { x: 530, y: 250, width: 280, height: 250 },
  quiosque: { x: 830, y: 250, width: 210, height: 230 }
};

// Gera um grid de distribuição espaçado e grande quando a área está expandida em tela cheia
function gerarPosicoesExpandido(count, startX, startY, width, height) {
  if (count === 0) return [];
  // Se tiver muitas mesas (como do 47 ao 68), distribui em 8 colunas, senão em 6
  const cols = count > 12 ? 8 : 6;
  const rows = Math.ceil(count / cols);

  const padX = 60; // Margem lateral interna
  const padY = 50; // Margem vertical interna

  const innerW = width - padX * 2;
  const innerH = height - padY * 2;

  const stepX = cols > 1 ? innerW / (cols - 1) : 0;
  const stepY = rows > 1 ? innerH / (rows - 1) : 0;

  const positions = [];
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = startX + padX + (cols > 1 ? col * stepX : innerW / 2);
    const cy = startY + padY + (rows > 1 ? row * stepY : innerH / 2);
    positions.push({ cx, cy });
  }
  return positions;
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function AerialMap({ areas, onSelect }) {
  // Controle de qual área está expandida no mapa 2D
  const [areaExpandidaId, setAreaExpandidaId] = useState(null);

  const areaExpandida = areas.find(a => a.id === areaExpandidaId);

  return (
      <svg
          viewBox="0 0 1070 660"
          className="w-full h-auto rounded-xl2 shadow-sm select-none"
          role="group"
          aria-label="Mapa aéreo do espaço com as mesas de cada área"
      >
        {/* Fundo de Areia Geral */}
        <rect x="0" y="0" width="1070" height="660" rx="24" fill="#F1E9D8" />

        {/* Rio */}
        <path
            d="M0,70 C160,10 300,125 480,80 C660,35 820,120 1070,55 L1070,0 L0,0 Z"
            fill="#2C5654"
        />
        <text x="20" y="35" className="font-corpo" fontSize="16" fill="#EAF3F2" fontWeight="700">
          Rio Beira-Rio
        </text>

        {/* Mata Ciliar */}
        <g opacity="0.9">
          {Array.from({ length: 26 }).map((_, i) => {
            const cx = 10 + i * 42 + (i % 3) * 6;
            const cy = 120 + (i % 4) * 14;
            const r = 26 + (i % 3) * 6;
            return (
                <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={i % 2 === 0 ? '#2F4A30' : '#3C5C3A'}
                />
            );
          })}
        </g>

        {/* Caminho / Praça Central */}
        <rect x="20" y="215" width="1030" height="345" rx="18" fill="#E4D8BE" />

        {/* Rua de Acesso */}
        <rect x="0" y="575" width="1070" height="60" fill="#7C766A" />
        <line
            x1="0"
            y1="605"
            x2="1070"
            y2="605"
            stroke="#F1E9D8"
            strokeWidth="4"
            strokeDasharray="26 18"
        />
        <text x="20" y="612" className="font-corpo" fontSize="15" fill="#FFFFFF" fontWeight="700">
          Rua de acesso
        </text>

        {/* ================================================================= */}
        {/* CASO 1: MAPA GERAL (Exibe os cartões das áreas resumidos)         */}
        {/* ================================================================= */}
        {!areaExpandidaId ? (
            areas.map((area) => {
              const box = ZONA_CAIXA[area.id];
              if (!box) return null;
              const total = area.mesas.length;
              const livres = area.mesas.filter((m) => m.status === 'livre').length;

              return (
                  <g
                      key={area.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setAreaExpandidaId(area.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setAreaExpandidaId(area.id);
                        }
                      }}
                      className="cursor-pointer transition-transform duration-150 hover:scale-[1.03] outline-none"
                      style={{ transformOrigin: `${box.x + box.width / 2}px ${box.y + box.height / 2}px` }}
                  >
                    {/* Moldura da Área */}
                    <rect
                        x={box.x}
                        y={box.y}
                        width={box.width}
                        height={box.height}
                        rx="20"
                        fill="#FFFFFF"
                        stroke={area.corZona}
                        strokeWidth="3"
                    />

                    {/* Topo colorido (Header do card) */}
                    <rect
                        x={box.x}
                        y={box.y}
                        width={box.width}
                        height={60}
                        rx="20"
                        fill={area.corZona}
                    />
                    <rect
                        x={box.x}
                        y={box.y + 30}
                        width={box.width}
                        height={30}
                        fill={area.corZona}
                    />

                    {/* Título */}
                    <text
                        x={box.x + box.width / 2}
                        y={box.y + 36}
                        textAnchor="middle"
                        className="font-titulo"
                        fontSize="18"
                        fontWeight="700"
                        fill="#FFFFFF"
                    >
                      {area.icone} {area.nome}
                    </text>

                    {/* Badge Central de Status Livre */}
                    <rect
                        x={box.x + 20}
                        y={box.y + 85}
                        width={box.width - 40}
                        height={75}
                        rx="12"
                        fill="#E4F0E3"
                        stroke="#3F7A4E"
                        strokeWidth="1.5"
                    />
                    <text
                        x={box.x + box.width / 2}
                        y={box.y + 118}
                        textAnchor="middle"
                        className="font-corpo"
                        fontSize="22"
                        fontWeight="800"
                        fill="#3F7A4E"
                    >
                      {livres} livres
                    </text>
                    <text
                        x={box.x + box.width / 2}
                        y={box.y + 142}
                        textAnchor="middle"
                        className="font-corpo"
                        fontSize="13"
                        fontWeight="600"
                        fill="#20291F"
                        opacity="0.7"
                    >
                      de {total} {area.tipoDeItem.toLowerCase()}{total > 1 ? 's' : ''}
                    </text>

                    {/* Botão Inferior de Expansão */}
                    <rect
                        x={box.x + 15}
                        y={box.y + 175}
                        width={box.width - 30}
                        height={40}
                        rx="10"
                        fill="#F1E9D8"
                    />
                    <text
                        x={box.x + box.width / 2}
                        y={box.y + 200}
                        textAnchor="middle"
                        className="font-corpo"
                        fontSize="13"
                        fontWeight="800"
                        fill="#2C5654"
                    >
                      🔍 Ver {area.tipoDeItem.toLowerCase()}s ➔
                    </text>
                  </g>
              );
            })
        ) : (
            // =================================================================
            // CASO 2: MAPA EXPANDIDO (Foco em uma única área com mesas gigantes)
            // =================================================================
            <g>
              {/* Fundo do painel em foco */}
              <rect
                  x="30"
                  y="225"
                  width="1010"
                  height="325"
                  rx="20"
                  fill="#FFFFFF"
                  stroke={areaExpandida.corZona}
                  strokeWidth="3.5"
              />

              {/* Topo do Header Expandido */}
              <rect
                  x="30"
                  y="225"
                  width="1010"
                  height="65"
                  rx="20"
                  fill={areaExpandida.corZona}
              />
              <rect
                  x="30"
                  y="260"
                  width="1010"
                  height="30"
                  fill={areaExpandida.corZona}
              />

              {/* Nome do Ambiente Expandido */}
              <text
                  x="60"
                  y="265"
                  className="font-titulo"
                  fontSize="24"
                  fontWeight="700"
                  fill="#FFFFFF"
              >
                {areaExpandida.icone} {areaExpandida.nome}
              </text>

              {/* Subtítulo informativo */}
              <text
                  x="60"
                  y="283"
                  className="font-corpo"
                  fontSize="13"
                  fontWeight="600"
                  fill="#EAF3F2"
                  opacity="0.9"
              >
                {areaExpandida.descricao} • {areaExpandida.mesas.filter(m => m.status === 'livre').length} livres de {areaExpandida.mesas.length}
              </text>

              {/* Botão VOLTAR (Grande e ultra-fácil de clicar) */}
              <g
                  role="button"
                  tabIndex={0}
                  onClick={() => setAreaExpandidaId(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setAreaExpandidaId(null);
                    }
                  }}
                  className="cursor-pointer transition-transform duration-100 hover:scale-[1.03] outline-none"
              >
                <rect
                    x="840"
                    y="237"
                    width="180"
                    height="40"
                    rx="10"
                    fill="#FFFFFF"
                    stroke="#2C5654"
                    strokeWidth="1.5"
                />
                <text
                    x="930"
                    y="262"
                    textAnchor="middle"
                    className="font-corpo"
                    fontSize="14"
                    fontWeight="800"
                    fill="#2C5654"
                >
                  ⬅️ Voltar ao Mapa
                </text>
              </g>

              {/* Renderização das mesas/vagas em tamanho ampliado no Grid */}
              {(() => {
                const isVaga = areaExpandida.tipoDeItem === 'Vaga';
                const posicoes = gerarPosicoesExpandido(
                    areaExpandida.mesas.length,
                    30,   // startX
                    295,  // startY (abaixo do cabeçalho)
                    1010, // largura útil do painel
                    240   // altura útil para distribuição das mesas
                );

                return areaExpandida.mesas.map((mesa, idx) => {
                  const pos = posicoes[idx];
                  if (!pos) return null;
                  const { cx, cy } = pos;
                  const livre = mesa.status === 'livre';
                  const cor = livre ? '#3F7A4E' : '#B4472F';

                  return (
                      <g
                          key={mesa.numero}
                          tabIndex={0}
                          role="button"
                          aria-label={`${areaExpandida.tipoDeItem} ${mesa.numero}, ${
                              livre ? 'livre' : 'reservada'
                          }`}
                          onClick={() => onSelect(areaExpandida, mesa)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              onSelect(areaExpandida, mesa);
                            }
                          }}
                          className="cursor-pointer transition-transform duration-100 hover:scale-110 focus-visible:scale-110 outline-none"
                          style={{ transformOrigin: `${cx}px ${cy}px` }}
                      >
                        {isVaga ? (
                            // Vagas de estacionamento aumentadas
                            <rect
                                x={cx - 40}
                                y={cy - 28}
                                width="80"
                                height="56"
                                rx="8"
                                fill={cor}
                                stroke="#FFFFFF"
                                strokeWidth="3"
                                className="shadow-md"
                            />
                        ) : (
                            // Mesas redondas ampliadas de 26px para 36px de raio!
                            <circle
                                cx={cx}
                                cy={cy}
                                r="36"
                                fill={cor}
                                stroke="#FFFFFF"
                                strokeWidth="3.5"
                                className="shadow-md"
                            />
                        )}
                        <text
                            x={cx}
                            y={cy + 8}
                            textAnchor="middle"
                            className="font-corpo"
                            fontSize="24"
                            fontWeight="800"
                            fill="#FFFFFF"
                        >
                          {mesa.numero}
                        </text>
                      </g>
                  );
                });
              })()}
            </g>
        )}
      </svg>
  );
}
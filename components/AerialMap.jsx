'use client';



const ZONA_CAIXA = {
  estacionamento: { x: 40, y: 250, width: 200, height: 230 },
  espacoFamilia: { x: 270, y: 250, width: 240, height: 230 },
  lanchonete: { x: 530, y: 250, width: 280, height: 250 },
  quiosque: { x: 830, y: 250, width: 210, height: 230 }
};

function gerarPosicoes(count, box) {
  if (count === 0) return [];
  const cols = Math.max(1, Math.ceil(Math.sqrt(count)));
  const rows = Math.ceil(count / cols);
  const padX = box.width * 0.16;
  const padTop = box.height * 0.38;
  const padBottom = box.height * 0.1;
  const innerW = box.width - padX * 2;
  const innerH = box.height - padTop - padBottom;
  const stepX = cols > 1 ? innerW / (cols - 1) : 0;
  const stepY = rows > 1 ? innerH / (rows - 1) : 0;
  const positions = [];
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = box.x + padX + (cols > 1 ? col * stepX : innerW / 2);
    const cy = box.y + padTop + (rows > 1 ? row * stepY : innerH / 2);
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
  return (
    <svg
      viewBox="0 0 1070 660"
      className="w-full h-auto rounded-xl2 shadow-sm"
      role="group"
      aria-label="Mapa aéreo do espaço com as mesas de cada área"
    >
      {/* fundo geral */}
      <rect x="0" y="0" width="1070" height="660" rx="24" fill="#F1E9D8" />

      {/* rio */}
      <path
        d="M0,70 C160,10 300,125 480,80 C660,35 820,120 1070,55 L1070,0 L0,0 Z"
        fill="#2C5654"
      />
      <text x="20" y="35" className="font-corpo" fontSize="16" fill="#EAF3F2" fontWeight="700">
        Rio
      </text>

      {/* mata ciliar */}
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

      {/* caminho / praça */}
      <rect x="20" y="215" width="1030" height="345" rx="18" fill="#E4D8BE" />

      {/* rua */}
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
      <text x="20" y="650" className="font-corpo" fontSize="15" fill="#3a352d" fontWeight="700">
        Rua de acesso
      </text>

      {/* áreas */}
      {areas.map((area) => {
        const box = ZONA_CAIXA[area.id];
        if (!box) return null;
        const posicoes = gerarPosicoes(area.mesas.length, box);
        const isVaga = area.tipoDeItem === 'Vaga';

        return (
          <g key={area.id}>
            <rect
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              rx="20"
              fill={hexToRgba(area.corZona, 0.16)}
              stroke={area.corZona}
              strokeWidth="2.5"
            />
            <text
              x={box.x + box.width / 2}
              y={box.y + 34}
              textAnchor="middle"
              className="font-titulo"
              fontSize="22"
              fontWeight="600"
              fill="#20291F"
            >
              {area.icone} {area.nome}
            </text>

            {area.mesas.map((mesa, idx) => {
              const { cx, cy } = posicoes[idx];
              const livre = mesa.status === 'livre';
              const cor = livre ? '#3F7A4E' : '#B4472F';
              return (
                <g
                  key={mesa.numero}
                  tabIndex={0}
                  role="button"
                  aria-label={`${area.tipoDeItem} ${mesa.numero} da área ${area.nome}, ${
                    livre ? 'livre' : 'reservada'
                  }`}
                  onClick={() => onSelect(area, mesa)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelect(area, mesa);
                    }
                  }}
                  className="cursor-pointer transition-transform duration-150 hover:scale-110 focus-visible:scale-110 outline-none"
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                >
                  {isVaga ? (
                    <rect
                      x={cx - 20}
                      y={cy - 13}
                      width="40"
                      height="26"
                      rx="6"
                      fill={cor}
                      stroke="white"
                      strokeWidth="2"
                    />
                  ) : (
                    <circle cx={cx} cy={cy} r="19" fill={cor} stroke="white" strokeWidth="2.5" />
                  )}
                  <text
                    x={cx}
                    y={cy + 5}
                    textAnchor="middle"
                    className="font-corpo"
                    fontSize="14"
                    fontWeight="800"
                    fill="white"
                  >
                    {mesa.numero}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

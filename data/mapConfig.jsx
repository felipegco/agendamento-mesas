export const CONFIG_AMBIENTES = {
    // ==========================================
    // QUIOSQUE
    // ==========================================
    quiosque: {
        viewBox: "0 0 600 700",
        renderPOIs: () => (
            <g>
                {/* Linhas delimitadoras da área do Quiosque */}
                <line x1="60" y1="80" x2="540" y2="80" stroke="#2C5654" strokeWidth="2" /> {/* Parede Topo */}
                <line x1="60" y1="80" x2="60" y2="600" stroke="#2C5654" strokeWidth="2" /> {/* Parede Esquerda */}
                <line x1="540" y1="80" x2="540" y2="600" stroke="#2C5654" strokeWidth="2" /> {/* Parede Direita */}
                <line x1="60" y1="600" x2="360" y2="600" stroke="#2C5654" strokeWidth="2" /> {/* Base parcial */}

                {/* Entrada (Apenas texto, sem caixas, seguindo o padrão clean) */}
                <text x="450" y="608" textAnchor="middle" fontSize="22" fill="#20291F" fontWeight="800">ENTRADA</text>
            </g>
        ),
        posicoes: {
            // Fileira de Cima
            '76': { cx: 160, cy: 200 },
            '75': { cx: 300, cy: 200 },
            '74': { cx: 440, cy: 200 },

            // Fileira do Meio
            '73': { cx: 160, cy: 360 },
            '72': { cx: 300, cy: 360 },
            '71': { cx: 440, cy: 360 },

            // Fileira de Baixo
            '70': { cx: 160, cy: 520 },
            '69': { cx: 300, cy: 520 },
        }
    },

    // ==========================================
    // LANCHONETE (Salão Central da Festa Julina)
    // ==========================================
    lanchonete: {
        viewBox: "0 0 800 1000",
        renderPOIs: () => (
            <g>
                {/* TOPO: Camarim, Palco e Caixa */}
                <rect x="60" y="40" width="160" height="50" fill="#E4D8BE" stroke="#2C5654" strokeWidth="2" />
                <text x="140" y="72" textAnchor="middle" fontSize="18" fill="#2C5654" fontWeight="800">CAMARIM</text>

                <rect x="250" y="40" width="300" height="50" fill="#F1E9D8" stroke="#2C5654" strokeWidth="2" />
                <text x="400" y="72" textAnchor="middle" fontSize="22" fill="#2C5654" fontWeight="800">PALCO</text>

                <rect x="580" y="40" width="160" height="50" fill="#E4D8BE" stroke="#2C5654" strokeWidth="2" />
                <text x="660" y="72" textAnchor="middle" fontSize="18" fill="#2C5654" fontWeight="800">CAIXA</text>

                {/* PAREDES SUPERIORES (Fechando as laterais do Camarim e da Caixa) */}
                <line x1="40" y1="90" x2="40" y2="330" stroke="#2C5654" strokeWidth="2" />
                <line x1="760" y1="90" x2="760" y2="330" stroke="#2C5654" strokeWidth="2" />

                {/* ENTRADAS LATERAIS SUPERIORES */}
                <text x="110" y="365" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>
                <text x="690" y="365" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>

                {/* PAREDES DO MEIO (Delimitando a área das mesas) */}
                <line x1="40" y1="380" x2="40" y2="780" stroke="#2C5654" strokeWidth="2" />
                <line x1="760" y1="380" x2="760" y2="780" stroke="#2C5654" strokeWidth="2" />

                {/* ENTRADAS LATERAIS INFERIORES (Entre as mesas e o Bar) */}
                <text x="110" y="820" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>
                <text x="690" y="820" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>

                {/* PAREDES INFERIORES E BASE (Fechando o canto ao lado do Bar) */}
                <line x1="40" y1="840" x2="40" y2="940" stroke="#2C5654" strokeWidth="2" />
                <line x1="760" y1="840" x2="760" y2="940" stroke="#2C5654" strokeWidth="2" />
                <line x1="40" y1="940" x2="760" y2="940" stroke="#2C5654" strokeWidth="2" />

                {/* BASE: Bar Centralizado */}
                <rect x="250" y="830" width="300" height="70" fill="#E4D8BE" stroke="#2C5654" strokeWidth="2" />
                <text x="400" y="875" textAnchor="middle" fontSize="22" fill="#2C5654" fontWeight="800">BAR</text>
            </g>
        ),
        posicoes: {
            // Mesas do Camarim (Esquerda)
            '46': { cx: 100, cy: 140 }, '45': { cx: 180, cy: 140 },
            '44': { cx: 100, cy: 210 }, '43': { cx: 180, cy: 210 },
            '42': { cx: 100, cy: 280 }, '41': { cx: 180, cy: 280 },

            // Fileira 1 (Próxima ao palco)
            '40': { cx: 100, cy: 420 }, '39': { cx: 185, cy: 420 }, '38': { cx: 270, cy: 420 }, '37': { cx: 355, cy: 420 },
            '36': { cx: 440, cy: 420 }, '35': { cx: 525, cy: 420 }, '34': { cx: 610, cy: 420 }, '33': { cx: 695, cy: 420 },

            // Fileira 2
            '32': { cx: 100, cy: 500 }, '31': { cx: 185, cy: 500 }, '30': { cx: 270, cy: 500 }, '29': { cx: 355, cy: 500 },
            '28': { cx: 440, cy: 500 }, '27': { cx: 525, cy: 500 }, '26': { cx: 610, cy: 500 }, '25': { cx: 695, cy: 500 },

            // Fileira 3
            '24': { cx: 100, cy: 580 }, '23': { cx: 185, cy: 580 }, '22': { cx: 270, cy: 580 }, '21': { cx: 355, cy: 580 },
            '20': { cx: 440, cy: 580 }, '19': { cx: 525, cy: 580 }, '18': { cx: 610, cy: 580 }, '17': { cx: 695, cy: 580 },

            // Fileira 4
            '16': { cx: 100, cy: 660 }, '15': { cx: 185, cy: 660 }, '14': { cx: 270, cy: 660 }, '13': { cx: 355, cy: 660 },
            '12': { cx: 440, cy: 660 }, '11': { cx: 525, cy: 660 }, '10': { cx: 610, cy: 660 }, '9':  { cx: 695, cy: 660 },

            // Fileira 5 (Perto do Bar)
            '8':  { cx: 100, cy: 740 }, '7':  { cx: 185, cy: 740 }, '6':  { cx: 270, cy: 740 }, '5':  { cx: 355, cy: 740 },
            '4':  { cx: 440, cy: 740 }, '3':  { cx: 525, cy: 740 }, '2':  { cx: 610, cy: 740 }, '1':  { cx: 695, cy: 740 },
        }
    },

    // ==========================================
    // ESPAÇO FAMÍLIA
    // ==========================================
    espacoFamilia: {
        viewBox: "0 0 600 900",
        renderPOIs: () => (
            <g>
                <rect x="40" y="40" width="180" height="50" fill="#E4D8BE" stroke="#2C5654" strokeWidth="2" />
                <text x="130" y="72" textAnchor="middle" fontSize="18" fill="#2C5654" fontWeight="800">BALCÃO</text>
                <text x="270" y="72" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>
                <rect x="320" y="40" width="240" height="50" fill="#E4D8BE" stroke="#2C5654" strokeWidth="2" />
                <text x="440" y="72" textAnchor="middle" fontSize="18" fill="#2C5654" fontWeight="800">BALCÃO BAR</text>

                <line x1="40" y1="90" x2="40" y2="240" stroke="#2C5654" strokeWidth="2" />
                <line x1="560" y1="90" x2="560" y2="240" stroke="#2C5654" strokeWidth="2" />

                <text x="80" y="300" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>
                <text x="520" y="300" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>

                <line x1="40" y1="360" x2="40" y2="760" stroke="#2C5654" strokeWidth="2" />
                <line x1="560" y1="360" x2="560" y2="760" stroke="#2C5654" strokeWidth="2" />

                <rect x="40" y="760" width="360" height="80" fill="#E4D8BE" stroke="#2C5654" strokeWidth="2" />
                <text x="220" y="810" textAnchor="middle" fontSize="24" fill="#2C5654" fontWeight="800">PALCO</text>
                <text x="480" y="810" textAnchor="middle" fontSize="20" fill="#20291F" fontWeight="800">ENTRADA</text>
            </g>
        ),
        posicoes: {
            '68': { cx: 160, cy: 150 }, '67': { cx: 300, cy: 150 },
            '66': { cx: 160, cy: 220 }, '65': { cx: 300, cy: 220 }, '64': { cx: 440, cy: 220 },
            '63': { cx: 160, cy: 380 }, '62': { cx: 300, cy: 380 }, '61': { cx: 440, cy: 380 },
            '60': { cx: 160, cy: 450 }, '59': { cx: 300, cy: 450 }, '58': { cx: 440, cy: 450 },
            '57': { cx: 160, cy: 520 }, '56': { cx: 300, cy: 520 }, '55': { cx: 440, cy: 520 },
            '54': { cx: 160, cy: 590 }, '53': { cx: 300, cy: 590 }, '52': { cx: 440, cy: 590 },
            '51': { cx: 160, cy: 660 }, '50': { cx: 300, cy: 660 }, '49': { cx: 440, cy: 660 },
            '48': { cx: 160, cy: 730 }, '47': { cx: 300, cy: 730 },
        }
    },

    // ==========================================
    // ESTACIONAMENTO (Transformado em Pátio de Eventos)
    // ==========================================
    estacionamento: {
        viewBox: "0 0 900 900",
        renderPOIs: () => (
            <g>
                {/* TOPO: Food Trucks e Palco */}
                <rect x="40" y="40" width="600" height="80" rx="16" fill="#E5856E" opacity="0.8" stroke="#B4472F" strokeWidth="2" />
                <text x="340" y="88" textAnchor="middle" fontSize="24" fill="#FFFFFF" fontWeight="800">ÁREA DOS FOOD TRUCKS</text>

                <rect x="660" y="40" width="200" height="80" rx="16" fill="#EFA62A" stroke="#B4472F" strokeWidth="2" />
                <text x="760" y="88" textAnchor="middle" fontSize="20" fill="#20291F" fontWeight="800">PALCO / CANTOR</text>

                {/* LATERAL DIREITA: Jardins Verticais (Agora mais altos, com height="240") */}
                <rect x="710" y="160" width="150" height="240" rx="20" fill="#E8F6ED" stroke="#19A354" strokeWidth="2" strokeDasharray="6 6" />
                <text x="785" y="195" textAnchor="middle" fontSize="16" fill="#19A354" fontWeight="800">JARDIM</text>

                <rect x="710" y="500" width="150" height="240" rx="20" fill="#E8F6ED" stroke="#19A354" strokeWidth="2" strokeDasharray="6 6" />
                <text x="785" y="535" textAnchor="middle" fontSize="16" fill="#19A354" fontWeight="800">JARDIM</text>

                {/* ENTRADAS (Textos flutuantes) */}
                <text x="785" y="455" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>
                <text x="120" y="805" textAnchor="middle" fontSize="18" fill="#20291F" fontWeight="800">ENTRADA</text>

                {/* LINHAS DE DEMARCAÇÃO DO PÁTIO (Com os cortes das entradas) */}
                {/* Parede Esquerda (Inteira) */}
                <line x1="40" y1="150" x2="40" y2="800" stroke="#264F36" strokeWidth="2" opacity="0.3" />

                {/* Parede Base (Corte na esquerda, começando no x=200, para a entrada inferior) */}
                <line x1="200" y1="800" x2="680" y2="800" stroke="#264F36" strokeWidth="2" opacity="0.3" />

                {/* Parede Direita (Corte no meio para a entrada entre os jardins) */}
                <line x1="680" y1="150" x2="680" y2="410" stroke="#264F36" strokeWidth="2" opacity="0.3" />
                <line x1="680" y1="490" x2="680" y2="800" stroke="#264F36" strokeWidth="2" opacity="0.3" />
            </g>
        ),
        posicoes: {
            // ----------------------------------------------------
            // MESAS DO PÁTIO CENTRAL (36 Mesas em um grid 6x6 mais espaçado)
            // ----------------------------------------------------
            // Fileira 1
            '77': { cx: 110, cy: 210 }, '78': { cx: 200, cy: 210 }, '79': { cx: 290, cy: 210 },
            '80': { cx: 380, cy: 210 }, '81': { cx: 470, cy: 210 }, '82': { cx: 560, cy: 210 },
            // Fileira 2
            '83': { cx: 110, cy: 310 }, '84': { cx: 200, cy: 310 }, '85': { cx: 290, cy: 310 },
            '86': { cx: 380, cy: 310 }, '87': { cx: 470, cy: 310 }, '88': { cx: 560, cy: 310 },
            // Fileira 3
            '89': { cx: 110, cy: 410 }, '90': { cx: 200, cy: 410 }, '91': { cx: 290, cy: 410 },
            '92': { cx: 380, cy: 410 }, '93': { cx: 470, cy: 410 }, '94': { cx: 560, cy: 410 },
            // Fileira 4
            '95': { cx: 110, cy: 510 }, '96': { cx: 200, cy: 510 }, '97': { cx: 290, cy: 510 },
            '98': { cx: 380, cy: 510 }, '99': { cx: 470, cy: 510 }, '100': { cx: 560, cy: 510 },
            // Fileira 5
            '101': { cx: 110, cy: 610 }, '102': { cx: 200, cy: 610 }, '103': { cx: 290, cy: 610 },
            '104': { cx: 380, cy: 610 }, '105': { cx: 470, cy: 610 }, '106': { cx: 560, cy: 610 },
            // Fileira 6
            '107': { cx: 110, cy: 710 }, '108': { cx: 200, cy: 710 }, '109': { cx: 290, cy: 710 },
            '110': { cx: 380, cy: 710 }, '111': { cx: 470, cy: 710 }, '112': { cx: 560, cy: 710 },

            // ----------------------------------------------------
            // MESAS DOS JARDINS (2 Mesas em cada, agora bem mais distantes)
            // ----------------------------------------------------
            // Jardim Superior
            '113': { cx: 785, cy: 260 }, '114': { cx: 785, cy: 340 },
            // Jardim Inferior
            '115': { cx: 785, cy: 600 }, '116': { cx: 785, cy: 680 },
        }
    }

};
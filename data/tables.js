// =================================
// ARQUIVO DE CONTROLE DAS MESAS
// =================================

export const ultimaAtualizacao = '17/07/2026 às 11:00';

export const nomeDoEspaco = 'Lanchonete';

export const areas = [
  {
    id: 'estacionamento',
    nome: 'Pátio / Food Trucks',
    descricao: 'Espaço aberto com food trucks, palco e mesas nos jardins',
    tipoDeItem: 'Mesa',
    corZona: '#E5856E',
    mesas: [
      // Fileira 1
      { numero: 77, status: 'livre' }, { numero: 78, status: 'livre' }, { numero: 79, status: 'livre' },
      { numero: 80, status: 'livre' }, { numero: 81, status: 'livre' }, { numero: 82, status: 'livre' },
      // Fileira 2
      { numero: 83, status: 'livre' }, { numero: 84, status: 'livre' }, { numero: 85, status: 'livre' },
      { numero: 86, status: 'livre' }, { numero: 87, status: 'livre' }, { numero: 88, status: 'livre' },
      // Fileira 3
      { numero: 89, status: 'livre' }, { numero: 90, status: 'livre' }, { numero: 91, status: 'livre' },
      { numero: 92, status: 'livre' }, { numero: 93, status: 'livre' }, { numero: 94, status: 'livre' },
      // Fileira 4
      { numero: 95, status: 'livre' }, { numero: 96, status: 'livre' }, { numero: 97, status: 'livre' },
      { numero: 98, status: 'livre' }, { numero: 99, status: 'livre' }, { numero: 100, status: 'livre' },
      // Fileira 5
      { numero: 101, status: 'livre' }, { numero: 102, status: 'livre' }, { numero: 103, status: 'livre' },
      { numero: 104, status: 'livre' }, { numero: 105, status: 'livre' }, { numero: 106, status: 'livre' },
      // Fileira 6
      { numero: 107, status: 'livre' }, { numero: 108, status: 'livre' }, { numero: 109, status: 'livre' },
      { numero: 110, status: 'livre' }, { numero: 111, status: 'livre' }, { numero: 112, status: 'livre' },
      // Jardim Superior
      { numero: 113, status: 'livre' }, { numero: 114, status: 'livre' },
      // Jardim Inferior
      { numero: 115, status: 'livre' }, { numero: 116, status: 'livre' },
    ],
  },
  {
    id: 'lanchonete',
    nome: 'Salão Central',
    descricao: 'Amplo salão com palco, bar e acesso ao camarim',
    tipoDeItem: 'Mesa',
    corZona: '#8C6A46',
    mesas: [
      // Mesas do Camarim
      { numero: 46, status: 'livre' }, { numero: 45, status: 'livre' },
      { numero: 44, status: 'livre' }, { numero: 43, status: 'livre' },
      { numero: 42, status: 'livre' }, { numero: 41, status: 'livre' },

      // Fileira 1 (Perto do palco)
      { numero: 40, status: 'livre' }, { numero: 39, status: 'livre' }, { numero: 38, status: 'livre' }, { numero: 37, status: 'livre' },
      { numero: 36, status: 'livre' }, { numero: 35, status: 'livre' }, { numero: 34, status: 'livre' }, { numero: 33, status: 'livre' },

      // Fileira 2
      { numero: 32, status: 'livre' }, { numero: 31, status: 'livre' }, { numero: 30, status: 'livre' }, { numero: 29, status: 'livre' },
      { numero: 28, status: 'livre' }, { numero: 27, status: 'livre' }, { numero: 26, status: 'livre' }, { numero: 25, status: 'livre' },

      // Fileira 3
      { numero: 24, status: 'livre' }, { numero: 23, status: 'livre' }, { numero: 22, status: 'livre' }, { numero: 21, status: 'livre' },
      { numero: 20, status: 'livre' }, { numero: 19, status: 'livre' }, { numero: 18, status: 'livre' }, { numero: 17, status: 'livre' },

      // Fileira 4
      { numero: 16, status: 'livre' }, { numero: 15, status: 'livre' }, { numero: 14, status: 'livre' }, { numero: 13, status: 'livre' },
      { numero: 12, status: 'livre' }, { numero: 11, status: 'livre' }, { numero: 10, status: 'livre' }, { numero: 9,  status: 'livre' },

      // Fileira 5 (Perto do bar)
      { numero: 8,  status: 'livre' }, { numero: 7,  status: 'livre' }, { numero: 6,  status: 'livre' }, { numero: 5,  status: 'livre' },
      { numero: 4,  status: 'livre' }, { numero: 3,  status: 'livre' }, { numero: 2,  status: 'livre' }, { numero: 1,  status: 'livre' },
    ],
  },
  {
    id: 'quiosque',
    nome: 'Quiosque',
    descricao: 'Área coberta próxima ao rio',
    tipoDeItem: 'Mesa',
    corZona: '#C79A4B',
    mesas: [
      { numero: 69, status: 'livre' },
      { numero: 70, status: 'livre' },
      { numero: 71, status: 'livre' },
      { numero: 72, status: 'livre' },
      { numero: 73, status: 'livre' },
      { numero: 74, status: 'livre' },
      { numero: 75, status: 'livre' },
      { numero: 76, status: 'livre' },
    ],
  },
  {
    id: 'espacoFamilia',
    nome: 'Espaço Família',
    descricao: 'Ambiente para grupos',
    tipoDeItem: 'Mesa',
    corZona: '#3F7A4E',
    mesas: [
      { numero: 47, status: 'livre' },
      { numero: 48, status: 'livre' },
      { numero: 49, status: 'livre' },
      { numero: 50, status: 'livre' },
      { numero: 51, status: 'livre' },
      { numero: 52, status: 'livre' },
      { numero: 53, status: 'livre' },
      { numero: 54, status: 'livre' },
      { numero: 55, status: 'livre' },
      { numero: 56, status: 'livre' },
      { numero: 57, status: 'livre' },
      { numero: 58, status: 'livre' },
      { numero: 59, status: 'livre' },
      { numero: 60, status: 'livre' },
      { numero: 61, status: 'livre' },
      { numero: 62, status: 'livre' },
      { numero: 63, status: 'livre' },
      { numero: 64, status: 'livre' },
      { numero: 65, status: 'livre' },
      { numero: 66, status: 'livre' },
      { numero: 67, status: 'livre' },
      { numero: 68, status: 'livre' },
    ],
  },
];

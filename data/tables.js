// =================================
// ARQUIVO DE CONTROLE DAS MESAS
// =================================

export const ultimaAtualizacao = '16/07/2026 às 18:34';

export const nomeDoEspaco = 'Lanchonete';

export const areas = [
  {
    id: 'estacionamento',
    nome: 'Estacionamento',
    descricao: 'Vagas próximas à quadra',
    tipoDeItem: 'Vaga',
    corZona: '#5B6B73',
    mesas: [

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

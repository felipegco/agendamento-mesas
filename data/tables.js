// =================================
// ARQUIVO DE CONTROLE DAS MESAS
// =================================

export const ultimaAtualizacao = '16/07/2026 às 16:30';

export const nomeDoEspaco = 'Espaço Beira-Rio';

export const areas = [
  {
    id: 'estacionamento',
    nome: 'Estacionamento',
    descricao: 'Vagas próximas à quadra',
    icone: '🚗',
    tipoDeItem: 'Vaga',
    corZona: '#5B6B73',
    mesas: [
      { numero: 1, status: 'livre' },
      { numero: 2, status: 'livre' },
      { numero: 3, status: 'reservado', reservadoPara: 'Van excursão', horario: '09:00' },
      { numero: 4, status: 'livre' },
      { numero: 5, status: 'livre' },
      { numero: 6, status: 'livre' },
      { numero: 7, status: 'reservado', reservadoPara: 'Carlos Mendes', horario: '19:00' },
      { numero: 8, status: 'livre' },
      { numero: 9, status: 'livre' },
      { numero: 10, status: 'livre' },
      { numero: 11, status: 'livre' },
      { numero: 12, status: 'reservado', reservadoPara: 'Família Souza', horario: '12:30' },
      { numero: 13, status: 'livre' },
      { numero: 14, status: 'livre' },
    ],
  },
  {
    id: 'lanchonete',
    nome: 'Lanchonete',
    descricao: 'Terraço principal, ao lado da lanchonete',
    icone: '🍔',
    tipoDeItem: 'Mesa',
    corZona: '#8C6A46',
    mesas: [
      { numero: 1, status: 'livre' },
      { numero: 2, status: 'livre' },
      { numero: 3, status: 'reservado', reservadoPara: 'Aniversário - Ana', horario: '15:00' },
      { numero: 4, status: 'livre' },
      { numero: 5, status: 'livre' },
      { numero: 6, status: 'reservado', reservadoPara: 'Grupo Excursão', horario: '11:00' },
      { numero: 7, status: 'livre' },
      { numero: 8, status: 'livre' },
      { numero: 9, status: 'livre' },
      { numero: 10, status: 'reservado', reservadoPara: 'Carlos Mendes', horario: '19:00' },
    ],
  },
  {
    id: 'quiosque',
    nome: 'Quiosque',
    descricao: 'Área coberta próxima ao rio',
    icone: '🍹',
    tipoDeItem: 'Mesa',
    corZona: '#C79A4B',
    mesas: [
      { numero: 1, status: 'livre' },
      { numero: 2, status: 'reservado', reservadoPara: 'Família Silva', horario: '12:00' },
      { numero: 3, status: 'livre' },
      { numero: 4, status: 'livre' },
      { numero: 5, status: 'reservado', reservadoPara: 'João Pereira', horario: '13:30' },
      { numero: 6, status: 'livre' },
    ],
  },
  {
    id: 'espacoFamilia',
    nome: 'Espaço Família',
    descricao: 'Gramado com mesas para grupos e crianças',
    icone: '🌳',
    tipoDeItem: 'Mesa',
    corZona: '#3F7A4E',
    mesas: [
      { numero: 1, status: 'livre' },
      { numero: 2, status: 'livre' },
      { numero: 3, status: 'reservado', reservadoPara: 'Escola Municipal', horario: '09:00' },
      { numero: 4, status: 'livre' },
      { numero: 5, status: 'livre' },
      { numero: 6, status: 'livre' },
      { numero: 7, status: 'reservado', reservadoPara: 'Família Souza', horario: '12:30' },
      { numero: 8, status: 'livre' },
    ],
  },
];

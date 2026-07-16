import './globals.css';

export const metadata = {
  title: 'Reserva de Mesas — Lanchonete',
  description: 'Consulte a disponibilidade de mesas do quiosque, lanchonete, espaço família e estacionamento.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

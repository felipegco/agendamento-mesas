'use client';

import { useEffect, useRef } from 'react';

export default function TableModal({ area, mesa, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!mesa) return null;
  const livre = mesa.status === 'livre';

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-tinta/50 px-4 pb-4 sm:pb-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${area.tipoDeItem} ${mesa.numero}`}
      onClick={onClose}
    >
      <div
        className="w-full sm:w-[420px] rounded-xl2 bg-white shadow-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-corpo font-800 text-sm uppercase tracking-wide text-tinta/60">
              {area.icone} {area.nome}
            </p>
            <h2 className="font-titulo text-3xl sm:text-4xl font-semibold text-tinta mt-1">
              {area.tipoDeItem} {mesa.numero}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-areia-dark text-tinta text-2xl font-bold hover:bg-madeira/40"
          >
            ×
          </button>
        </div>

        <div
          className={`mt-6 rounded-xl px-5 py-4 flex items-center gap-3 ${
            livre ? 'bg-livre-bg' : 'bg-reservado-bg'
          }`}
        >
          <span
            className={`h-6 w-6 rounded-full ${livre ? 'bg-livre' : 'bg-reservado'}`}
            aria-hidden="true"
          />
          <p
            className={`font-corpo font-800 text-xl sm:text-2xl ${
              livre ? 'text-livre' : 'text-reservado'
            }`}
          >
            {livre ? 'Disponível' : 'Reservada'}
          </p>
        </div>

        <p className="mt-6 font-corpo text-base sm:text-lg text-tinta/80 leading-relaxed">
          {livre
            ? `${area.tipoDeItem === 'Vaga' ? 'Esta vaga está' : 'Esta mesa está'} livre. Para reservar, entre em contato pelo telefone ou WhatsApp informado abaixo.`
            : `${area.tipoDeItem === 'Vaga' ? 'Esta vaga já está' : 'Esta mesa já está'} reservada. Escolha outra opção disponível em verde, ou entre em contato para verificar horários vagos.`}
        </p>

        <a
          href="tel:+5500000000000"
          className="mt-6 block text-center rounded-xl bg-rio text-white font-corpo font-800 text-lg py-3 hover:bg-rio-dark transition-colors"
        >
          📞 Ligar para reservar
        </a>
      </div>
    </div>
  );
}

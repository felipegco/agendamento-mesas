export default function TableList({ areas, onSelect }) {
  return (
    <div className="space-y-8">
      {areas.map((area) => {
        const total = area.mesas.length;
        const livres = area.mesas.filter((m) => m.status === 'livre').length;
        return (
          <section key={area.id} aria-labelledby={`titulo-${area.id}`}>
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
              <h3
                id={`titulo-${area.id}`}
                className="font-titulo text-2xl sm:text-3xl font-semibold text-tinta"
              >
                {area.icone} {area.nome}
              </h3>
              <p className="font-corpo font-700 text-livre text-base sm:text-lg">
                {livres} de {total} {area.tipoDeItem.toLowerCase()}
                {total > 1 ? 's' : ''} livres
              </p>
            </div>
            <p className="font-corpo text-tinta/60 mb-4">{area.descricao}</p>
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
          </section>
        );
      })}
    </div>
  );
}

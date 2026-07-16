export default function ViewToggle({ view, setView }) {
  const base =
    'flex-1 sm:flex-none px-6 py-3 rounded-xl2 font-corpo font-800 text-lg transition-colors border-2';
  return (
    <div className="flex gap-3 w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setView('mapa')}
        aria-pressed={view === 'mapa'}
        className={`${base} ${
          view === 'mapa'
            ? 'bg-rio text-white border-rio'
            : 'bg-white text-rio border-rio/30 hover:border-rio'
        }`}
      >
        🗺️ Mapa
      </button>
      <button
        type="button"
        onClick={() => setView('lista')}
        aria-pressed={view === 'lista'}
        className={`${base} ${
          view === 'lista'
            ? 'bg-rio text-white border-rio'
            : 'bg-white text-rio border-rio/30 hover:border-rio'
        }`}
      >
        📋 Lista
      </button>
    </div>
  );
}

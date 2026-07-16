export default function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 rounded-2xl bg-white/70 px-5 py-4 shadow-sm">
      <span className="font-corpo font-800 text-sm sm:text-base text-tinta/70 uppercase tracking-wide">
        Legenda:
      </span>
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-full bg-livre ring-4 ring-livre-bg" aria-hidden="true" />
        <span className="font-corpo font-bold text-tinta text-base sm:text-lg">Livre</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-full bg-reservado ring-4 ring-reservado-bg" aria-hidden="true" />
        <span className="font-corpo font-bold text-tinta text-base sm:text-lg">Reservada</span>
      </div>
    </div>
  );
}

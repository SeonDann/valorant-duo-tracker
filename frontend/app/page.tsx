export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
          VALORANT Analytics
        </p>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Valorant Duo Analytics
        </h1>

        <p className="text-lg text-zinc-400 leading-relaxed">
          Estadísticas, rendimiento y análisis de tus partidas ranked.
        </p>

        <div className="mt-10 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
          🚧 En desarrollo
        </div>
      </div>
    </main>
  );
}
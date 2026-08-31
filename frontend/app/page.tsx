const recentMatches = [
  {
    result: "Victoria",
    map: "Ascent",
    agent: "Jett",
    score: "13 - 9",
    kd: "1.42",
  },
  {
    result: "Derrota",
    map: "Haven",
    agent: "Jett",
    score: "8 - 13",
    kd: "0.91",
  },
  {
    result: "Victoria",
    map: "Bind",
    agent: "Raze",
    score: "13 - 7",
    kd: "1.31",
  },
  {
    result: "Victoria",
    map: "Sunset",
    agent: "Omen",
    score: "13 - 11",
    kd: "1.18",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800 bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <span className="font-bold tracking-tight">
              VALORANT DUO
            </span>
            <span className="ml-2 text-zinc-500">ANALYTICS</span>
          </div>

          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800">
            Iniciar sesión
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              Herramienta de análisis para VALORANT
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Entiende tu juego.
              <br />
              <span className="text-zinc-500">Mejora tu rendimiento.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Analiza tus partidas ranked, descubre tus patrones de
              rendimiento y compara tu desempeño con tus compañeros de
              equipo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
                Conectar cuenta Riot
              </button>

              <a
                href="#features"
                className="rounded-lg border border-zinc-700 px-6 py-3 text-center font-semibold transition hover:bg-zinc-900"
              >
                Ver funcionalidades
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-600">
              Prototipo de demostración. Los datos mostrados son ficticios.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Vista previa
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Tu rendimiento de un vistazo
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <StatCard title="Winrate" value="58.4%" />
            <StatCard title="K/D" value="1.18" />
            <StatCard title="ACS" value="224" />
            <StatCard title="HS%" value="27.3%" />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Rendimiento reciente</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Últimas partidas ranked
                  </p>
                </div>

                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                  DEMO
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {recentMatches.map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          match.result === "Victoria"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      />

                      <div>
                        <p className="font-medium">{match.map}</p>
                        <p className="text-sm text-zinc-500">
                          {match.agent}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-medium">{match.score}</p>
                      <p className="text-sm text-zinc-500">
                        K/D {match.kd}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="font-semibold">Rendimiento por mapa</h3>

              <p className="mt-1 text-sm text-zinc-500">
                Últimas partidas
              </p>

              <div className="mt-8 space-y-6">
                <MapStat map="Ascent" percentage={71} />
                <MapStat map="Bind" percentage={64} />
                <MapStat map="Sunset" percentage={58} />
                <MapStat map="Haven" percentage={42} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Funcionalidades
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Diseñado para analizar tu rendimiento
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Feature
              title="Estadísticas personales"
              description="Consulta tu historial ranked y analiza K/D, ACS, winrate, agentes, mapas y evolución de rendimiento."
            />

            <Feature
              title="Duo Analytics"
              description="Compara tu rendimiento con tus compañeros y descubre qué combinaciones de agentes y mapas funcionan mejor."
            />

            <Feature
              title="Análisis predictivo"
              description="Explora estimaciones estadísticas basadas en el rendimiento histórico y diferentes factores de cada partida."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col justify-between gap-4 text-sm text-zinc-600 md:flex-row">
            <p>Valorant Duo Analytics</p>

            <p>
              Fan-made analytics project. Not affiliated with Riot Games.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <p className="text-sm text-zinc-500">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function MapStat({
  map,
  percentage,
}: {
  map: string;
  percentage: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{map}</span>
        <span className="text-zinc-500">{percentage}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-white"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}
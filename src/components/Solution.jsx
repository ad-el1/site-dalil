import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FEATURES = [
  {
    symbol: 'language',
    title: 'Multilingue',
    desc: 'FR, EN, AR, Darija avec code-switching natif',
  },
  {
    symbol: 'bolt',
    title: 'Instantané',
    desc: 'réponse en moins de 2 secondes',
  },
  {
    symbol: 'menu_book',
    title: '72 Q/R',
    desc: '7 catégories couvrant tout le catalogue FSSM',
  },
  {
    symbol: 'savings',
    title: 'Gratuit',
    desc: 'zéro coût de fonctionnement en v1',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="scroll-mt-20 bg-tint px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="La solution" title="Dalil répond. Instantanément.">
          Un totem tactile qui accueille les étudiants et répond aux questions d&apos;orientation
          les plus fréquentes de la Faculté des Sciences Semlalia — sans attente, sans serveur,
          sans coût.
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 100}
              className="flex gap-5 rounded-2xl border border-fssm/10 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-fssm/10"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-fssm/10 text-fssm">
                <span className="material-symbols-outlined text-[26px]">{f.symbol}</span>
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-1 text-base text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

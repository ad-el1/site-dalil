import Reveal from './Reveal'

const STATS = [
  { value: '72', label: 'Questions / Réponses' },
  { value: '4', label: 'Langues (FR · EN · AR · Darija)' },
  { value: '7', label: 'Catégories FSSM' },
  { value: '0 DH', label: 'Coût de fonctionnement v1' },
]

export default function Stats() {
  return (
    <section id="chiffres" className="scroll-mt-20 bg-fssm-dark px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fssm-accent">
            Les chiffres
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Dalil en un coup d&apos;œil
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="text-5xl font-extrabold text-white sm:text-6xl">{s.value}</p>
              <p className="mt-3 text-sm font-medium text-white/70 sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

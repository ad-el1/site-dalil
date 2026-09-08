import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const CARDS = [
  {
    icon: '🎓',
    stat: '+3 000 nouveaux bacheliers',
    desc: 'arrivent chaque rentrée à la FSSM',
  },
  {
    icon: '❓',
    stat: 'Les mêmes 10 questions',
    desc: 'posées des centaines de fois par jour',
  },
  {
    icon: '⏳',
    stat: 'Personnel saturé',
    desc: 'temps précieux mobilisé sur des réponses répétitives',
  },
]

export default function Problem() {
  return (
    <section id="probleme" className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Le problème" title="Chaque rentrée, les mêmes questions." />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.stat}
              delay={i * 120}
              className="flex flex-col rounded-2xl border border-fssm/10 bg-tint/60 p-7 transition-shadow hover:shadow-lg hover:shadow-fssm/10"
            >
              <span className="text-4xl" aria-hidden="true">
                {card.icon}
              </span>
              <p className="mt-5 text-xl font-bold text-ink">{card.stat}</p>
              <p className="mt-2 text-base text-muted">{card.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

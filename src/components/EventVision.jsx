import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const EVENTS = [
  {
    icon: '🎓',
    title: "Semaine d'intégration",
    desc: 'Accueil des nouveaux bacheliers, plannings et premiers repères sur le campus.',
  },
  {
    icon: '🚪',
    title: 'Journées Portes Ouvertes',
    desc: 'Présentation des filières et parcours aux lycéens et familles en visite.',
  },
  {
    icon: '🔬',
    title: 'Journées de la Recherche',
    desc: 'Orientation vers les laboratoires, équipes et thématiques de recherche.',
  },
  {
    icon: '🤝',
    title: 'Forum Entreprises & Stages',
    desc: 'Mise en relation étudiants-recruteurs, offres de stages et programme du forum.',
  },
  {
    icon: '🌐',
    title: 'Conférences Internationales',
    desc: 'Programme, salles, intervenants et informations pratiques pour les participants.',
  },
]

export default function EventVision() {
  return (
    <section id="evenements" className="scroll-mt-20 bg-tint px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Vision événementielle" title="Un totem. Infinies possibilités.">
          À partir de la v3, Dalil devient événementiel — il suffit de changer les données pour
          adapter Dalil à n&apos;importe quel événement.
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal
              key={e.title}
              delay={(i % 3) * 100}
              className="rounded-2xl border border-fssm/10 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-fssm/10"
            >
              <span className="text-4xl" aria-hidden="true">
                {e.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{e.title}</h3>
              <p className="mt-2 text-base text-muted">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

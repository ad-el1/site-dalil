import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const MEMBERS = [
  { name: 'Adham El Warari', role: 'Licence Informatique S6, FSSM', initials: 'AW' },
  { name: 'Othmane El Kaabi', role: 'Licence Informatique S6, FSSM', initials: 'OK' },
]

export default function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="L'équipe" title="Développé par des étudiants FSSM." />

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 sm:grid-cols-2">
          {MEMBERS.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 120}
              className="flex flex-col items-center rounded-2xl border border-fssm/10 bg-tint/60 p-8 text-center transition-shadow hover:shadow-lg hover:shadow-fssm/10"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-fssm text-lg font-bold text-white">
                {m.initials}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
              <p className="mt-1 text-sm text-muted">{m.role}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-base text-muted">
            <span className="font-semibold text-ink">Encadrant :</span> Pr. Abdelmoula Abouhilal —
            Faculté des Sciences Semlalia
          </p>
        </Reveal>
      </div>
    </section>
  )
}

import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const VERSIONS = [
  {
    version: 'Version 1',
    name: 'FAQ Interactive',
    status: 'Disponible',
    statusIcon: '✅',
    badge: 'Live',
    badgeClass: 'bg-fssm text-white',
    desc: 'Totem tactile kiosque, 7 catégories, 72 Q/R en 4 langues, recherche intelligente Fuse.js, zéro serveur zéro coût.',
    stack: ['React', 'Vite', 'Fuse.js', 'JSON'],
  },
  {
    version: 'Version 2',
    name: 'Chatbot IA local',
    status: 'En développement',
    statusIcon: '🔄',
    badge: 'Bientôt',
    badgeClass: 'bg-orange-500 text-white',
    desc: "L'étudiant pose n'importe quelle question en texte libre. RAG sur les documents officiels FSSM. Zéro API externe.",
    stack: ['Ollama', 'Mistral 7B', 'ChromaDB', 'LangChain', 'FastAPI'],
  },
  {
    version: 'Version 3',
    name: 'Avatar parlant',
    status: 'Roadmap',
    statusIcon: '🚀',
    badge: 'Roadmap',
    badgeClass: 'bg-muted text-white',
    desc: 'Dalil prend vie — voix naturelle, avatar animé avec lip-sync, reconnaissance vocale multilingue incluant le darija.',
    stack: ['Mistral Small 4', 'Voxtral', 'ElevenLabs', 'D-ID'],
  },
]

function StackPills({ stack }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {stack.map((s) => (
        <span
          key={s}
          className="rounded-full border border-fssm/15 bg-tint px-3 py-1 text-xs font-medium text-fssm"
        >
          {s}
        </span>
      ))}
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="versions" className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Roadmap" title="De la FAQ à l'avatar parlant." />

        <div className="relative mt-16">
          {/* Ligne verticale centrale */}
          <span className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-fssm via-fssm-accent to-fssm/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {VERSIONS.map((v, i) => {
              const right = i % 2 === 1
              return (
                <Reveal
                  key={v.version}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
                >
                  {/* Point sur la ligne */}
                  <span className="absolute left-5 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-fssm shadow md:left-1/2" />

                  <div
                    className={`${
                      right ? 'md:col-start-2' : 'md:col-start-1 md:text-right'
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-fssm/10 bg-tint/60 p-6 transition-shadow hover:shadow-lg hover:shadow-fssm/10 ${
                        right ? '' : 'md:ml-auto'
                      }`}
                    >
                      <div
                        className={`flex flex-wrap items-center gap-3 ${
                          right ? '' : 'md:justify-end'
                        }`}
                      >
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${v.badgeClass}`}
                        >
                          {v.badge}
                        </span>
                        <span className="text-sm font-medium text-muted">
                          {v.statusIcon} {v.status}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-extrabold text-ink">
                        {v.version} — {v.name}
                      </h3>
                      <p className="mt-2 text-base text-muted">{v.desc}</p>

                      <div className={right ? '' : 'md:flex md:justify-end'}>
                        <StackPills stack={v.stack} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

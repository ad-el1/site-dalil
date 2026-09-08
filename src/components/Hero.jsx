import Logo from './Logo'
import { LINKS } from '../data/site'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white via-white to-tint px-5 pt-24 pb-16 sm:px-8"
    >
      <div className="mx-auto flex max-w-content flex-col items-center text-center">
        {/* Logo + anneaux concentriques qui pulsent */}
        <div className="relative mb-10 flex items-center justify-center">
          <span className="pulse-ring absolute h-44 w-44 rounded-full border border-fssm-accent/40 sm:h-52 sm:w-52" />
          <span
            className="pulse-ring absolute h-44 w-44 rounded-full border border-fssm-accent/40 sm:h-52 sm:w-52"
            style={{ animationDelay: '1.3s' }}
          />
          <span
            className="pulse-ring absolute h-44 w-44 rounded-full border border-fssm-accent/40 sm:h-52 sm:w-52"
            style={{ animationDelay: '2.6s' }}
          />
          <Logo size="lg" className="relative animate-fade-up" />
        </div>

        <span className="badge-glow mb-7 inline-flex items-center gap-2 rounded-full border border-fssm-accent/30 bg-white px-4 py-1.5 text-sm font-semibold text-fssm">
          <span className="h-2 w-2 rounded-full bg-fssm-accent" />
          FSSM 2026
        </span>

        <h1 className="text-5xl font-extrabold tracking-tight text-ink sm:text-7xl">
          Dalil <span className="text-muted">·</span>{' '}
          <span className="font-arabic text-fssm">دليل</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
          L&apos;assistant d&apos;orientation intelligent de la FSSM
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#probleme"
            className="rounded-full bg-fssm px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-fssm/25 transition-all hover:-translate-y-0.5 hover:bg-fssm-dark"
          >
            Découvrir le projet
          </a>
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-fssm/25 bg-white px-7 py-3.5 text-base font-semibold text-fssm transition-all hover:-translate-y-0.5 hover:border-fssm/50 hover:bg-tint"
          >
            Voir la démo
          </a>
        </div>
      </div>

      <a
        href="#probleme"
        aria-label="Section suivante"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fssm/60 transition-colors hover:text-fssm"
      >
        <span className="material-symbols-outlined animate-bounce text-3xl">keyboard_arrow_down</span>
      </a>
    </section>
  )
}

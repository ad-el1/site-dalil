import Logo from './Logo'
import { LINKS } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-fssm/10 bg-tint px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-base font-bold text-ink">
              Dalil <span className="font-arabic text-fssm">دليل</span>
            </span>
            <span className="mx-1 h-6 w-px bg-fssm/20" />
            <span className="text-sm font-semibold uppercase tracking-wide text-fssm">FSSM</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-fssm"
            >
              GitHub repo
            </a>
            <a
              href={LINKS.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-fssm"
            >
              App Dalil
            </a>
            <a
              href={LINKS.map}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-fssm"
            >
              Map FSSM
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-fssm/10 pt-6 text-center">
          <p className="text-sm text-muted">
            Faculté des Sciences Semlalia · Université Cadi Ayyad · Marrakech 2026
          </p>
          <p className="mt-1 text-xs text-muted/80">
            Développé dans le cadre de la Licence Informatique S6.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import Logo from './Logo'
import { LINKS, NAV } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-fssm/10 bg-white/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-3 sm:px-8">
        <a href="#accueil" onClick={close} className="flex items-center gap-2.5">
          <Logo size="sm" />
          <span className="text-lg font-bold tracking-tight text-ink">
            Dalil <span className="font-arabic text-fssm">دليل</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-fssm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-fssm px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-fssm-dark"
          >
            Voir la démo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-tint lg:hidden"
        >
          <span className="material-symbols-outlined text-[28px]">{open ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-fssm/10 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block py-3 text-base font-medium text-ink transition-colors hover:text-fssm"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={LINKS.demo}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="inline-block rounded-full bg-fssm px-5 py-2.5 text-sm font-semibold text-white"
              >
                Voir la démo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

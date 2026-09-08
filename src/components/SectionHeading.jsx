import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-fssm-accent' : 'text-fssm'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg ${light ? 'text-white/70' : 'text-muted'}`}>{children}</p>
      )}
    </Reveal>
  )
}

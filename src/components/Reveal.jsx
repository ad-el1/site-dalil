import { useInView } from '../hooks/useInView'

/**
 * Enveloppe un contenu d'un effet fade-in + slide-up au scroll.
 * `delay` en ms pour décaler les éléments d'une même grille.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

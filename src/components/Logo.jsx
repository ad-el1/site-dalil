const SIZES = {
  sm: 'h-9 w-9 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-36 w-36 text-4xl sm:h-44 sm:w-44 sm:text-5xl',
}

/** Logo Dalil — cercle vert avec دليل en blanc. */
export default function Logo({ size = 'md', className = '' }) {
  return (
    <span
      aria-label="Dalil"
      className={`inline-flex select-none items-center justify-center rounded-full bg-fssm font-arabic font-bold leading-none text-white shadow-lg shadow-fssm/25 ${SIZES[size]} ${className}`}
    >
      دليل
    </span>
  )
}

import { profile } from '../data/portfolio'
import { Seal } from './Seal'

export function Portrait() {
  const { photo } = profile
  return (
    <figure className="relative w-full max-w-[17.5rem]">
      <div className="border border-ink bg-hair">
        <picture>
          <source type="image/webp" srcSet={photo.srcSet} sizes="(min-width: 768px) 280px, 70vw" />
          <img
            src={photo.fallback}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            fetchPriority="high"
            decoding="async"
            className="block aspect-[5/6] w-full object-cover object-top"
          />
        </picture>
      </div>
      <figcaption className="border-x border-b border-ink px-3 py-2 font-mono text-xs text-muted">
        Subject photograph
      </figcaption>
      <Seal className="absolute -top-5 -right-5 size-24 -rotate-[9deg] md:-top-7 md:-right-8 md:size-28" />
    </figure>
  )
}

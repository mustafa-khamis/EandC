import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { FacebookIcon } from './BrandIcons'
import { GALLERY } from '../data/destinations'
import { CONTACT } from '../data/site'
import './Gallery.css'

export default function Gallery() {
  const [open, setOpen] = useState(null)

  const step = useCallback((d) => setOpen((i) => (i + d + GALLERY.length) % GALLERY.length), [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, step])

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text reveal">
            <span className="eyebrow">Moments from the road</span>
            <h2 className="title">
              Real trips, real <em>memories</em>
            </h2>
            <p className="lead">
              Snapshots from our guests and guides: gorilla families, village welcomes, lakeside sunsets and every mile
              in between.
            </p>
          </div>
          <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="btn btn--outline reveal">
            <FacebookIcon size={18} /> Follow on Facebook
          </a>
        </div>

        <div className="masonry">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              className={`masonry__item reveal ${g.size === 'tall' ? 'masonry__item--tall' : ''}`}
              style={{ '--delay': `${(i % 4) * 0.06}s` }}
              onClick={() => setOpen(i)}
              aria-label={`Open photo: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <span className="masonry__zoom">
                <Maximize2 size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setOpen(null)}
        >
          <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(null)}>
            <X size={24} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            <ChevronLeft size={28} />
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()} key={open}>
            <img src={GALLERY[open].src} alt={GALLERY[open].alt} />
            <figcaption>
              {GALLERY[open].alt}
              <span>
                {open + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  )
}

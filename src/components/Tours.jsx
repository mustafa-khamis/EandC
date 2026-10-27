import { useEffect, useState } from 'react'
import { ArrowRight, Check, Clock, MapPin, Send, Users, X } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'
import { TOURS, TOUR_CATEGORIES } from '../data/tours'
import { whatsappLink } from '../data/site'
import './Tours.css'

function TourModal({ tour, onClose, onPlan }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const message = `Hello E&C Tour and Safari! I'm interested in the "${tour.title}" (${tour.days} ${tour.days > 1 ? 'days' : 'day'}). Could you share availability and pricing?`

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="tour-modal-title" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <div className="modal__media">
          <img src={tour.image} alt={tour.title} />
          <div className="modal__media-info">
            <span className="tour__tag">{tour.category}</span>
            <h3 id="tour-modal-title">{tour.title}</h3>
            <p>
              <MapPin size={15} /> {tour.location}
            </p>
          </div>
        </div>
        <div className="modal__body">
          <div className="modal__facts">
            <span>
              <Clock size={16} /> {tour.days} {tour.days > 1 ? 'days' : 'day'}
            </span>
            <span>
              <Users size={16} /> {tour.group}
            </span>
            <span>
              <Check size={16} /> Private & tailor-made
            </span>
          </div>
          <p className="modal__summary">{tour.summary}</p>

          <h4>Highlights</h4>
          <ul className="modal__highlights">
            {tour.highlights.map((h) => (
              <li key={h}>
                <Check size={16} /> {h}
              </li>
            ))}
          </ul>

          <h4>Itinerary</h4>
          <ol className="timeline">
            {tour.itinerary.map((step) => (
              <li key={step.day}>
                <span className="timeline__day">{step.day}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="modal__actions">
            <a className="btn btn--gold" href={whatsappLink(message)} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} /> Ask on WhatsApp
            </a>
            <button
              className="btn btn--outline"
              onClick={() => {
                onClose()
                onPlan({ service: 'Custom trip', tour: tour.title })
              }}
            >
              <Send size={16} /> Request a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tours({ onPlan }) {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const list = filter === 'All' ? TOURS : TOURS.filter((t) => t.category === filter)

  return (
    <section className="section tours" id="tours">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text reveal">
            <span className="eyebrow">Signature journeys</span>
            <h2 className="title">
              Tours crafted for <em>wonder</em>
            </h2>
            <p className="lead">
              Every itinerary is private and flexible. Pick a starting point and we will shape it around your dates,
              budget and travel style.
            </p>
          </div>
          <div className="chips reveal" style={{ '--delay': '0.1s' }} role="tablist" aria-label="Filter tours">
            {TOUR_CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`chip ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="tours__grid" key={filter}>
          {list.map((t, i) => (
            <article className="tour" key={t.id} style={{ '--i': i }}>
              <button className="tour__media" onClick={() => setSelected(t)} aria-label={`View ${t.title}`}>
                <img src={t.image} alt={t.title} loading="lazy" />
                <span className="tour__days">
                  <strong>{t.days}</strong>
                  {t.days > 1 ? 'Days' : 'Day'}
                </span>
                {t.badge && <span className="tour__badge">{t.badge}</span>}
              </button>
              <div className="tour__body">
                <span className="tour__loc">
                  <MapPin size={14} /> {t.location}
                </span>
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
                <div className="tour__foot">
                  <span className="tour__group">
                    <Users size={15} /> {t.group}
                  </span>
                  <button className="tour__more" onClick={() => setSelected(t)}>
                    View details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <TourModal tour={selected} onClose={() => setSelected(null)} onPlan={onPlan} />}
    </section>
  )
}

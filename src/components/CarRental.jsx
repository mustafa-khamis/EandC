import { useState } from 'react'
import { ArrowRight, Globe, Luggage, Plane, Settings2, UserRound, Users } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'
import { FLEET, FLEET_TYPES } from '../data/fleet'
import { IMAGES, whatsappLink } from '../data/site'
import './CarRental.css'

const PERKS = [
  {
    icon: UserRound,
    title: 'Driver-guide or self-drive',
    text: 'Experienced English-speaking drivers, or the keys and a map.',
  },
  { icon: Plane, title: 'Airport pick-up & drop-off', text: 'We meet you at Kigali International, day or night.' },
  { icon: Globe, title: 'Cross-border ready', text: 'Trips into Uganda, Tanzania and Kenya arranged on request.' },
]

export default function CarRental({ onPlan }) {
  const [type, setType] = useState('All')
  const list = type === 'All' ? FLEET : FLEET.filter((c) => c.type === type)

  return (
    <section className="section section--sand rental" id="car-rental">
      <div className="container">
        <div className="rental__intro">
          <div className="reveal">
            <span className="eyebrow">Car hire in Rwanda</span>
            <h2 className="title">
              The right vehicle for <em>every road</em>
            </h2>
            <p className="lead">
              From rugged pop-top Land Cruisers built for game drives to comfortable sedans for Kigali business trips,
              all serviced, clean and ready when you land.
            </p>
            <div className="rental__perks">
              {PERKS.map((p) => (
                <div className="perk" key={p.title}>
                  <span className="perk__icon">
                    <p.icon size={20} />
                  </span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rental__hero reveal" style={{ '--delay': '0.1s' }}>
            <img src={IMAGES.elephantsDrive} alt="Elephants seen from a safari vehicle" loading="lazy" />
            <div className="rental__hero-card">
              <img src={IMAGES.carLandCruiserSide} alt="" loading="lazy" />
              <div>
                <strong>Safari-ready 4x4s</strong>
                <span>Roof racks, pop-up roofs and room for the whole crew.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rental__bar reveal">
          <h3>Our fleet</h3>
          <div className="chips" role="tablist" aria-label="Filter vehicles">
            {FLEET_TYPES.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={type === t}
                className={`chip ${type === t ? 'is-active' : ''}`}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="fleet" key={type}>
          {list.map((car, i) => (
            <article className="car" key={car.id} style={{ '--i': i }}>
              <div className="car__media">
                <img src={car.image} alt={car.name} loading="lazy" style={{ objectPosition: car.position }} />
                <span className="car__type">{car.type}</span>
              </div>
              <div className="car__body">
                <h3>{car.name}</h3>
                <span className="car__variant">{car.variant}</span>
                <ul className="car__specs">
                  <li>
                    <Users size={16} /> {car.seats} seats
                  </li>
                  <li>
                    <Luggage size={16} /> {car.bags} bags
                  </li>
                  <li>
                    <Settings2 size={16} /> {car.drive}
                  </li>
                </ul>
                <p className="car__ideal">
                  <span>Ideal for</span> {car.idealFor}
                </p>
                <div className="car__actions">
                  <button
                    className="btn btn--dark btn--sm"
                    onClick={() => onPlan({ service: 'Car rental', vehicle: car.name })}
                  >
                    Book this car <ArrowRight size={16} />
                  </button>
                  <a
                    className="car__wa"
                    href={whatsappLink(`Hello E&C! I'd like to rent the ${car.name}. Is it available?`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ask about the ${car.name} on WhatsApp`}
                  >
                    <WhatsAppIcon size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

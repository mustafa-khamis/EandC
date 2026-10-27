import { useEffect, useState } from 'react'
import { Bus, CalendarDays, Coffee, MapPin, Moon, Sailboat, Utensils } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'
import { IMAGES, whatsappLink } from '../data/site'
import './FeaturedEvent.css'

const START = new Date('2026-10-30T08:00:00+02:00')
const END = new Date('2026-11-01T20:00:00+02:00')

const ACTIVITIES = [
  ['Hiking', 'Explore the beautiful Rwamagana landscape'],
  ['Kuvoma', 'Fetch water the traditional way'],
  ['Gusya', 'Grind grain on a grinding stone'],
  ['Gucunda', 'Churn fresh milk by hand'],
  ['Gusekura', 'Pound grain with mortar and pestle'],
  ['Guhinga', 'Plant in a traditional kitchen garden'],
  ['Guhata & Guteka', 'Prepare and cook Rwandan food'],
  ['Gukubura', 'Traditional home care & sweeping'],
]

const INCLUDES = [
  { icon: Bus, label: 'Transport' },
  { icon: Coffee, label: 'Breakfast' },
  { icon: Utensils, label: 'Lunch' },
  { icon: Moon, label: 'Dinner' },
  { icon: Sailboat, label: 'Lake Muhazi boat tour' },
]

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const diff = Math.max(0, target - now)
  return {
    now,
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff / 36e5) % 24),
    mins: Math.floor((diff / 6e4) % 60),
    secs: Math.floor((diff / 1e3) % 60),
  }
}

export default function FeaturedEvent() {
  const { now, days, hours, mins, secs } = useCountdown(START.getTime())
  if (now > END.getTime()) return null
  const live = now >= START.getTime()

  const message =
    'Hello E&C Tour and Safari! I would like to reserve a spot on the Rwamagana Cultural Experience (30 Oct – 1 Nov 2026).'

  return (
    <section className="section event">
      <div className="container event__grid">
        <div className="event__visual reveal">
          <figure className="event__main">
            <img src={IMAGES.guestsVillage} alt="E&C guests with their host on a village trip" loading="lazy" />
          </figure>
          <span className="event__badge">Limited spots</span>
          <div className="event__date">
            <strong>30</strong>
            <span>Oct – 1 Nov</span>
          </div>
          <figure className="event__inset">
            <img src={IMAGES.tourVan} alt="E&C tour vehicle on a country road" loading="lazy" />
            <figcaption>
              <Bus size={15} /> Transport included
            </figcaption>
          </figure>
        </div>

        <div className="event__info">
          <div className="reveal">
            <span className="eyebrow">Upcoming experience</span>
            <h2 className="title">
              Rwamagana <em>Cultural</em> Experience
            </h2>
            <p className="lead">
              Live the culture, discover the traditions, experience Rwanda. Three days of hands-on village life in the
              Eastern Province: cooking, farming, crafting and connecting with local families.
            </p>
          </div>

          <div className="event__meta reveal" style={{ '--delay': '0.1s' }}>
            <span>
              <CalendarDays size={18} /> 30 Oct – 1 Nov 2026
            </span>
            <span>
              <MapPin size={18} /> Rwamagana, Eastern Province
            </span>
          </div>

          <div className="event__countdown reveal" style={{ '--delay': '0.15s' }}>
            {live ? (
              <p className="event__live">Happening now. Contact us to join late!</p>
            ) : (
              [
                [days, 'Days'],
                [hours, 'Hours'],
                [mins, 'Minutes'],
                [secs, 'Seconds'],
              ].map(([v, l]) => (
                <div key={l}>
                  <strong>{String(v).padStart(2, '0')}</strong>
                  <span>{l}</span>
                </div>
              ))
            )}
          </div>

          <ul className="event__activities reveal" style={{ '--delay': '0.2s' }}>
            {ACTIVITIES.map(([name, desc]) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          <div className="event__includes reveal" style={{ '--delay': '0.25s' }}>
            <span className="event__includes-title">Includes</span>
            {INCLUDES.map(({ icon: Icon, label }) => (
              <span key={label} className="event__pill">
                <Icon size={15} /> {label}
              </span>
            ))}
          </div>

          <div className="event__cta reveal" style={{ '--delay': '0.3s' }}>
            <div className="event__price">
              <strong>150,000 RWF</strong>
              <span>per person · all inclusive</span>
            </div>
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="btn btn--gold">
              <WhatsAppIcon size={18} /> Reserve your spot
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

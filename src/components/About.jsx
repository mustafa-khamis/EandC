import { ArrowRight, BadgeCheck, Headset, MapPin, Route, ShieldCheck, Sparkles } from 'lucide-react'
import { CONTACT, IMAGES } from '../data/site'
import './About.css'

const FEATURES = [
  {
    icon: BadgeCheck,
    title: 'Local experts',
    text: 'Born and raised in Rwanda. Our guides know every road, every park ranger and every hidden viewpoint.',
  },
  {
    icon: ShieldCheck,
    title: 'Permits handled',
    text: 'Gorilla and chimp permits, park fees, lodges and border crossings, all booked and confirmed for you.',
  },
  {
    icon: Route,
    title: 'Tailor-made trips',
    text: 'Your dates, your pace, your budget. Every itinerary is private and built around you.',
  },
  {
    icon: Headset,
    title: 'Always reachable',
    text: 'One phone number from first enquiry to final drop-off, with support throughout your trip.',
  },
]

const STATS = [
  ['4', 'National parks in Rwanda'],
  ['4+', 'East African countries'],
  ['8', 'Vehicle types in our fleet'],
  ['24/7', 'On-trip support'],
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__collage reveal">
            <figure className="about__img about__img--main">
              <img src={IMAGES.guestsVillage} alt="E&C guests with a local host in a Rwandan village" loading="lazy" />
            </figure>
            <figure className="about__img about__img--top">
              <img src={IMAGES.guideBoat} alt="E&C guide with guests on a boat safari" loading="lazy" />
            </figure>
            <figure className="about__img about__img--bottom">
              <img src={IMAGES.guideOnJeep} alt="E&C guide with travellers on a safari vehicle" loading="lazy" />
            </figure>
            <div className="about__badge">
              <span className="about__badge-icon">
                <MapPin size={18} />
              </span>
              <span>
                <strong>Based in Kigali</strong>
                {CONTACT.address.split(',')[0]}
              </span>
            </div>
          </div>

          <div className="about__content">
            <div className="reveal">
              <span className="eyebrow">Why travel with E&amp;C</span>
              <h2 className="title">
                Rwanda, seen through <em>local eyes</em>
              </h2>
              <p className="lead">
                E&amp;C Tour and Safari is a Kigali-based team organising trips, safaris and car hire across Rwanda and
                East Africa. We are not a booking engine: we are the people who meet you at the airport, drive you to
                the forest edge and make sure every day feels effortless.
              </p>
            </div>

            <div className="about__features">
              {FEATURES.map((f, i) => (
                <div className="feature reveal" key={f.title} style={{ '--delay': `${0.1 + i * 0.07}s` }}>
                  <span className="feature__icon">
                    <f.icon size={22} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>

            <div className="about__actions reveal" style={{ '--delay': '0.3s' }}>
              <a href="#contact" className="btn btn--dark">
                Start planning <ArrowRight size={18} />
              </a>
              <span className="about__sign">
                <Sparkles size={18} /> Personal service from enquiry to goodbye
              </span>
            </div>
          </div>
        </div>

        <div className="stats reveal">
          {STATS.map(([n, l]) => (
            <div className="stat" key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { DESTINATIONS } from '../data/destinations'
import { IMAGES } from '../data/site'
import './Destinations.css'

export default function Destinations() {
  return (
    <section className="section section--dark destinations" id="destinations">
      <img className="destinations__bg" src={IMAGES.thousandHills} alt="" loading="lazy" />
      <div className="container">
        <div className="section-head">
          <div className="section-head__text reveal">
            <span className="eyebrow">Where we go</span>
            <h2 className="title">
              The land of a <em>thousand hills</em> and beyond
            </h2>
          </div>
          <p className="lead reveal" style={{ '--delay': '0.1s' }}>
            Rwanda is small enough to explore in a week and rich enough to fill a lifetime. When you are ready for more,
            we take you across East Africa.
          </p>
        </div>

        <div className="dest__grid">
          {DESTINATIONS.map((d, i) => (
            <div
              key={d.name}
              className={`reveal dest__cell ${d.size ? `dest__cell--${d.size}` : ''}`}
              style={{ '--delay': `${i * 0.06}s` }}
            >
              <a href="#contact" className="dest">
                <img src={d.image} alt={d.name} loading="lazy" />
                <div className="dest__info">
                  <span className="dest__num">0{i + 1}</span>
                  <h3>{d.name}</h3>
                  <p>{d.tagline}</p>
                </div>
                <span className="dest__arrow">
                  <ArrowUpRight size={20} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

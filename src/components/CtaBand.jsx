import { ArrowRight, Phone } from 'lucide-react'
import { CONTACT, IMAGES } from '../data/site'
import './CtaBand.css'

export default function CtaBand() {
  return (
    <section className="cta">
      <img className="cta__bg" src={IMAGES.acaciaSunset} alt="" loading="lazy" />
      <div className="container cta__inner reveal">
        <span className="eyebrow">Your story starts here</span>
        <h2 className="cta__title">
          Ready to hear the forest <em>breathe?</em>
        </h2>
        <p>Tell us when you would like to travel. We will take care of the rest.</p>
        <div className="cta__actions">
          <a href="#contact" className="btn btn--gold">
            Plan my safari <ArrowRight size={18} />
          </a>
          <a href={CONTACT.phoneHref} className="btn btn--ghost">
            <Phone size={18} /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}

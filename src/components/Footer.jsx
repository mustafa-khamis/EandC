import { ArrowUp, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, WhatsAppIcon } from './BrandIcons'
import { CONTACT, NAV_LINKS, whatsappLink } from '../data/site'
import './Footer.css'

const YEAR = new Date().getFullYear()

const EXPERIENCES = [
  'Gorilla trekking',
  'Akagera safari',
  'Nyungwe chimpanzees',
  'Lake Kivu getaways',
  'Kigali city tours',
  'East Africa combos',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p>
              We organise trips, safaris and car hire in Rwanda and East Africa. Locally owned, personally guided and
              based in Kigali.
            </p>
            <div className="footer__social">
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
              <a href={CONTACT.phoneHref} aria-label="Call us">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Experiences</h4>
            <ul>
              {EXPERIENCES.map((e) => (
                <li key={e}>
                  <a href="#tours">{e}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <MapPin size={16} /> {CONTACT.address}
              </li>
              <li>
                <Phone size={16} /> <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <WhatsAppIcon size={16} />{' '}
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn btn--gold btn--sm footer__cta">
              Plan my trip
            </a>
          </div>
        </div>

        <div className="footer__word" aria-hidden="true">
          E<em>&amp;</em>C Tour &amp; Safari
        </div>

        <div className="footer__bottom">
          <span>© {YEAR} E&amp;C Tour and Safari. All rights reserved.</span>
          <span>Kigali, Rwanda · Murakaza neza!</span>
          <a href="#top" className="footer__top-link">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

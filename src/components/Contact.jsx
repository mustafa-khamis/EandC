import { useState } from 'react'
import { CheckCircle2, Clock, MapPin, Phone, Send } from 'lucide-react'
import { FacebookIcon, WhatsAppIcon } from './BrandIcons'
import { CONTACT, SERVICES, whatsappLink } from '../data/site'
import './Contact.css'

function initialForm(prefill) {
  let message = ''
  if (prefill?.tour) message = `I'm interested in the "${prefill.tour}" tour.`
  if (prefill?.vehicle) message = `I'd like to rent the ${prefill.vehicle}.`
  return {
    name: '',
    email: '',
    phone: '',
    service: prefill?.service || SERVICES[0],
    date: prefill?.date || '',
    guests: prefill?.guests || '2',
    message,
  }
}

function ContactForm({ prefill }) {
  const [form, setForm] = useState(() => initialForm(prefill))
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      'Hello E&C Tour and Safari! New trip request:',
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.date && `Travel date: ${form.date}`,
      `Travellers: ${form.guests}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form form--sent">
        <CheckCircle2 size={56} />
        <h3>Thank you, {form.name.split(' ')[0] || 'traveller'}!</h3>
        <p>
          Your request has been prepared in WhatsApp. Just press send and our team will reply shortly with a tailored
          plan.
        </p>
        <button className="btn btn--outline" onClick={() => setSent(false)}>
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <label className="field">
          <span>Full name *</span>
          <input required value={form.name} onChange={update('name')} placeholder="Jane Doe" autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="jane@email.com"
            autoComplete="email"
          />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Phone / WhatsApp</span>
          <input
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+250 7xx xxx xxx"
            autoComplete="tel"
          />
        </label>
        <label className="field">
          <span>I'm interested in</span>
          <select value={form.service} onChange={update('service')}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Travel date</span>
          <input type="date" value={form.date} onChange={update('date')} />
        </label>
        <label className="field">
          <span>Travellers</span>
          <select value={form.guests} onChange={update('guests')}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="field">
        <span>Tell us about your trip</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Places you'd love to see, budget, special requests…"
        />
      </label>
      <button type="submit" className="btn btn--gold form__submit">
        <Send size={18} /> Send my request
      </button>
      <p className="form__note">
        <WhatsAppIcon size={14} /> Your request opens in WhatsApp so we can reply instantly.
      </p>
    </form>
  )
}

export default function Contact({ prefill }) {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info reveal">
            <span className="eyebrow">Get in touch</span>
            <h2 className="title">
              Let’s plan your <em>journey</em>
            </h2>
            <p className="lead">
              Share a few details and our Kigali team will come back with a personalised itinerary and quote. No
              obligation.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Phone size={20} />
                </span>
                <div>
                  <small>Call us</small>
                  <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <WhatsAppIcon size={20} />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <a href={whatsappLink('Hello E&C Tour and Safari!')} target="_blank" rel="noreferrer">
                    Chat with us now
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <MapPin size={20} />
                </span>
                <div>
                  <small>Visit our office</small>
                  <span>{CONTACT.address}</span>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <Clock size={20} />
                </span>
                <div>
                  <small>Response time</small>
                  <span>Usually within a few hours</span>
                </div>
              </li>
            </ul>

            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="contact__social">
              <FacebookIcon size={18} /> E&amp;C Tours and Safari on Facebook
            </a>
          </div>

          <div className="contact__form reveal" style={{ '--delay': '0.1s' }}>
            <ContactForm key={prefill?.ts ?? 'default'} prefill={prefill} />
          </div>
        </div>

        <div className="map reveal">
          <iframe
            src={CONTACT.mapEmbed}
            title="E&C Tour and Safari location on Google Maps"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="map__card">
            <strong>E&amp;C Tour and Safari</strong>
            <span>{CONTACT.address}</span>
            <a href={CONTACT.mapLink} target="_blank" rel="noreferrer">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

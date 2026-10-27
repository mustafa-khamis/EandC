import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, WhatsAppIcon } from './BrandIcons'
import { CONTACT, NAV_LINKS, whatsappLink } from '../data/site'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled && !open

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__info">
            <a href={CONTACT.phoneHref}>
              <Phone size={14} /> {CONTACT.phoneDisplay}
            </a>
            <span>
              <MapPin size={14} /> {CONTACT.address}
            </span>
          </div>
          <div className="topbar__social">
            <span>Trips · Safaris · Car Hire across Rwanda & East Africa</span>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon size={15} />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon size={15} />
            </a>
          </div>
        </div>
      </div>

      <header className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="container nav__inner">
          <Logo light={!solid} />

          <nav className="nav__links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? 'is-active' : ''}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a href={CONTACT.phoneHref} className="nav__phone">
              <span className="nav__phone-icon">
                <Phone size={16} />
              </span>
              <span>
                <small>Call us anytime</small>
                {CONTACT.phoneLocal}
              </span>
            </a>
            <a href="#contact" className="btn btn--gold btn--sm nav__cta">
              Plan my trip <ArrowRight size={16} />
            </a>
            <button
              className="nav__toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="drawer__links">
          {NAV_LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ '--i': i }}>
              <span>0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="drawer__foot">
          <a href="#contact" className="btn btn--gold" onClick={() => setOpen(false)}>
            Plan my trip <ArrowRight size={18} />
          </a>
          <a href={CONTACT.phoneHref} className="drawer__phone">
            <Phone size={16} /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  )
}

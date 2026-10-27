import { useEffect, useState } from 'react'
import { WhatsAppIcon } from './BrandIcons'
import { whatsappLink } from '../data/site'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink('Hello E&C Tour and Safari! I would like to plan a trip.')}
      target="_blank"
      rel="noreferrer"
      className={`wa-float ${show ? 'is-visible' : ''}`}
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="wa-float__label">Chat with us</span>
    </a>
  )
}

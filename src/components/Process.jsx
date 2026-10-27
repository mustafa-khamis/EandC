import { CalendarDays, Footprints, MessageCircle, Route } from 'lucide-react'
import './Process.css'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Tell us your dream',
    text: 'Call, WhatsApp or send the form with your dates, group size and wish list.',
  },
  {
    icon: Route,
    title: 'Get your itinerary',
    text: 'Within 24 hours you receive a tailored plan and a clear, all-in quote.',
  },
  {
    icon: CalendarDays,
    title: 'We book everything',
    text: 'Permits, lodges, vehicles and guides are secured and confirmed in writing.',
  },
  {
    icon: Footprints,
    title: 'Travel & enjoy',
    text: 'Your driver-guide meets you on arrival and looks after you all the way.',
  },
]

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="section-head__text reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="title">
              Four simple steps to your <em>adventure</em>
            </h2>
          </div>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step reveal" key={s.title} style={{ '--delay': `${i * 0.1}s` }}>
              <span className="step__icon">
                <s.icon size={26} />
                <span className="step__num">{i + 1}</span>
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

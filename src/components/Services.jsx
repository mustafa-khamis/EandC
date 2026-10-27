import { ArrowUpRight, Binoculars, Car, Landmark } from 'lucide-react'
import { IMAGES } from '../data/site'
import './Services.css'

const SERVICES = [
  {
    icon: Binoculars,
    title: 'Safaris & Wildlife',
    text: 'Gorilla and chimpanzee trekking, Big Five game drives and boat safaris across Rwanda, Uganda, Kenya and Tanzania.',
    image: IMAGES.babyGorillaForest,
    href: '#tours',
    link: 'View safaris',
  },
  {
    icon: Landmark,
    title: 'Trips & Cultural Tours',
    text: 'Kigali city tours, village experiences, Lake Kivu escapes and fully tailored itineraries for families, groups and companies.',
    image: IMAGES.guestsVillage,
    href: '#destinations',
    link: 'See destinations',
  },
  {
    icon: Car,
    title: 'Car Hire & Transfers',
    text: 'Well-kept 4x4s, SUVs, vans and sedans with a professional driver-guide or self-drive, plus airport pick-ups at any hour.',
    image: IMAGES.safariCruiser,
    href: '#car-rental',
    link: 'Browse the fleet',
  },
]

export default function Services() {
  return (
    <section className="section services">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text reveal">
            <span className="eyebrow">What we do</span>
            <h2 className="title">
              Everything you need to <em>experience</em> Rwanda, in one trusted team
            </h2>
          </div>
          <p className="lead reveal" style={{ '--delay': '0.1s' }}>
            From the moment you land in Kigali to your last sunset on the savannah, we plan the route, book the permits,
            drive the roads and share the stories.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div className="reveal" key={s.title} style={{ '--delay': `${i * 0.1}s` }}>
              <a href={s.href} className="service">
                <div className="service__img">
                  <img src={s.image} alt="" loading="lazy" />
                </div>
                <div className="service__body">
                  <span className="service__icon">
                    <s.icon size={22} />
                  </span>
                  <span className="service__num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="service__link">
                    {s.link} <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

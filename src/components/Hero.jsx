import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Car, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { IMAGES } from '../data/site'
import './Hero.css'

const SLIDES = [
  {
    image: IMAGES.heroGorilla,
    place: 'Volcanoes National Park, Rwanda',
    short: 'Gorillas',
    title: ['Meet the gentle', 'giants of the', <em key="v">Virungas</em>],
    text: 'Track mountain gorillas through misty bamboo forest. A once-in-a-lifetime encounter, guided by people who call Rwanda home.',
  },
  {
    image: IMAGES.heroSafari,
    place: 'Akagera & East Africa',
    short: 'Safaris',
    title: ['Golden sunsets', 'across the', <em key="s">savannah</em>],
    text: 'Big Five game drives in pop-top 4x4s, from Akagera’s plains to the Serengeti and the Maasai Mara.',
  },
  {
    image: IMAGES.heroNyungwe,
    place: 'Nyungwe Forest, Rwanda',
    short: 'Rainforest',
    title: ['Wander through', 'an ancient', <em key="n">rainforest</em>],
    text: 'Chimpanzee tracking, canopy walks and winding roads through one of Africa’s oldest montane forests.',
  },
  {
    image: IMAGES.heroKivu,
    place: 'Lake Kivu, Rwanda',
    short: 'Lakes',
    title: ['Slow down where', 'the hills meet', <em key="k">the lake</em>],
    text: 'Island boat trips, coffee farms and long golden evenings on the shores of Lake Kivu.',
  },
]

const DURATION = 7000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const go = useCallback((i) => setIndex((i + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    if (paused) return
    timer.current = setTimeout(() => go(index + 1), DURATION)
    return () => clearTimeout(timer.current)
  }, [index, paused, go])

  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const slide = SLIDES[index]

  return (
    <section className="hero" id="top" aria-roledescription="carousel" aria-label="Featured destinations">
      <div className="hero__media">
        {SLIDES.map((s, i) => (
          <div key={s.place} className={`hero__slide ${i === index ? 'is-active' : ''}`} aria-hidden={i !== index}>
            <img src={s.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'low'} />
          </div>
        ))}
        <div className="hero__shade" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy" key={index}>
          <span className="hero__place">
            <span className="hero__dot" /> {slide.place}
          </span>
          <h1 className="hero__title">
            {slide.title.map((line, i) => (
              <span className="hero__line" key={i}>
                <span style={{ '--d': `${0.15 + i * 0.12}s` }}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero__text">{slide.text}</p>
          <div className="hero__ctas">
            <a href="#tours" className="btn btn--gold">
              Explore our tours <ArrowRight size={18} />
            </a>
            <a href="#car-rental" className="btn btn--ghost">
              <Car size={18} /> Rent a car
            </a>
          </div>
        </div>
      </div>

      <div className="hero__bottom container">
        <div className="hero__tabs" role="tablist">
          {SLIDES.map((s, i) => (
            <button
              key={s.place}
              role="tab"
              aria-selected={i === index}
              className={`hero__tab ${i === index ? 'is-active' : ''} ${paused ? 'is-paused' : ''}`}
              onClick={() => go(i)}
              style={{ '--dur': `${DURATION}ms` }}
            >
              <span className="hero__tab-bar">
                <span key={`${index}-${paused}`} />
              </span>
              <span className="hero__tab-num">0{i + 1}</span>
              <span className="hero__tab-label">{s.short}</span>
            </button>
          ))}
        </div>
        <div className="hero__controls">
          <button onClick={() => go(index - 1)} aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button onClick={() => go(index + 1)} aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

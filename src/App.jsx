import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TripFinder from './components/TripFinder'
import Services from './components/Services'
import FeaturedEvent from './components/FeaturedEvent'
import Tours from './components/Tours'
import Destinations from './components/Destinations'
import About from './components/About'
import CarRental from './components/CarRental'
import Process from './components/Process'
import Gallery from './components/Gallery'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import useReveal from './hooks/useReveal'

function App() {
  const [prefill, setPrefill] = useState(null)

  useReveal()

  // Any "book" / "check availability" action pre-fills the contact form and scrolls to it.
  const plan = useCallback((data) => {
    setPrefill({ ...data, ts: Date.now() })
    requestAnimationFrame(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TripFinder onPlan={plan} />
        <Services />
        <FeaturedEvent />
        <Tours onPlan={plan} />
        <Destinations />
        <About />
        <CarRental onPlan={plan} />
        <Process />
        <Gallery />
        <CtaBand />
        <Contact prefill={prefill} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App

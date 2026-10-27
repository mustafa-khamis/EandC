import { useState } from 'react'
import { ArrowRight, CalendarDays, Compass, Users } from 'lucide-react'
import { SERVICES } from '../data/site'
import './TripFinder.css'

export default function TripFinder({ onPlan }) {
  const [service, setService] = useState(SERVICES[0])
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('2')

  const submit = (e) => {
    e.preventDefault()
    onPlan({ service, date, guests })
  }

  return (
    <div className="container finder-wrap" id="trip-finder">
      <form className="finder" onSubmit={submit}>
        <label className="finder__field">
          <span className="finder__icon">
            <Compass size={20} />
          </span>
          <span className="finder__body">
            <span className="finder__label">Experience</span>
            <select value={service} onChange={(e) => setService(e.target.value)}>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </span>
        </label>
        <label className="finder__field">
          <span className="finder__icon">
            <CalendarDays size={20} />
          </span>
          <span className="finder__body">
            <span className="finder__label">Travel date</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </span>
        </label>
        <label className="finder__field">
          <span className="finder__icon">
            <Users size={20} />
          </span>
          <span className="finder__body">
            <span className="finder__label">Travellers</span>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((g) => (
                <option key={g} value={g}>
                  {g} {g === '1' ? 'traveller' : 'travellers'}
                </option>
              ))}
            </select>
          </span>
        </label>
        <button type="submit" className="btn btn--dark finder__submit">
          Check availability <ArrowRight size={18} />
        </button>
      </form>
    </div>
  )
}

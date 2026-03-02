import { Link, useLocation } from 'react-router-dom'
import { useTripData } from '../hooks/useTripData'

const LINKS = [
  { to: '/guide', label: 'Guide' },
  { to: '/cities', label: 'Cities' },
  { to: '/food', label: 'Food' },
  { to: '/shopping', label: 'Shopping' },
  { to: '/phrases', label: 'Phrases' },
  { to: '/map', label: 'Map' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const { TRIP_META } = useTripData()

  return (
    <nav className="nav">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">{TRIP_META.navLogo}</Link>
        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                style={pathname === link.to ? {color: 'var(--color-primary)', fontWeight: 700} : {}}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/cities', label: 'Cities' },
  { to: '/food', label: 'Food' },
  { to: '/shopping', label: 'Shopping' },
  { to: '/map', label: 'Map' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">🌸 Japan 2026</Link>
        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                style={pathname === link.to ? {color: '#d4558f', fontWeight: 700} : {}}
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

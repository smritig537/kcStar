import { Link } from 'react-router-dom'
import logo from '../assets/KC.png'

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: 'var(--bg-primary)', // dark background
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* ✅ Logo section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={logo}
            alt="KCTAX Logo"
            style={{
              height: '60px',
              width: '60px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h3 style={{ color: '#facc15', fontSize: '1.2rem', margin: 0 }}>
            <Link
              to="/"
              style={{
                color: '#facc15', // golden accent
                textDecoration: 'none',
                fontWeight: '600',
                letterSpacing: '0.5px',
              }}
            >
              KCTAX Wealth Advisor
            </Link>
          </h3>
        </div>

        {/* ✅ Navigation links */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '25px',
            margin: 0,
            padding: 0,
          }}
        >
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={{
                  color: '#f9fafb',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = '#facc15')}
                onMouseOut={(e) => (e.target.style.color = '#f9fafb')}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

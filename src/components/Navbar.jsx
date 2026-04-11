import { useState, useEffect } from 'react'

const LINKS = ['Home','About','Skills','Projects','Experience','Contact']

const SECTION_IDS = {
  Home: 'hero', About: 'about', Skills: 'skills',
  Projects: 'work', Experience: 'experience', Contact: 'contact',
}

export default function Navbar({ logoClicks, onLogoClick }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on outside scroll
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { once: true, passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [menuOpen])

  function navTo(label) {
    setActive(label)
    setMenuOpen(false)
    document.getElementById(SECTION_IDS[label])
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a className="nav-logo" href="#" onClick={e => { e.preventDefault(); onLogoClick() }}>
          &lt;<span>AKL</span>/&gt;
        </a>

        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l}>
              <button className={active === l ? 'active' : ''} onClick={() => navTo(l)}>{l}</button>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href="#contact" onClick={e => { e.preventDefault(); navTo('Contact') }}>
          Let's talk
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Menu"
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map(l => (
          <button key={l} className={active === l ? 'active' : ''} onClick={() => navTo(l)}>
            {l}
          </button>
        ))}
      </div>
    </>
  )
}

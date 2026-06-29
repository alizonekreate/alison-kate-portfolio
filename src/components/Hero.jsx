import { useState, useEffect } from 'react'

const ROLES = ['Full Stack Developer_', 'MERN Stack Developer_', 'AI Developer_', 'Problem Solver_']

function useTypewriter(roles) {
  const [display, setDisplay] = useState('')
  useEffect(() => {
    let ri = 0, ci = 0, del = false, timer
    function tick() {
      const curr = roles[ri]
      if (!del) {
        setDisplay(curr.slice(0, ++ci))
        if (ci === curr.length) { del = true; timer = setTimeout(tick, 1800); return }
      } else {
        setDisplay(curr.slice(0, --ci))
        if (ci === 0) { del = false; ri = (ri + 1) % roles.length }
      }
      timer = setTimeout(tick, del ? 45 : 70)
    }
    timer = setTimeout(tick, 1500)
    return () => clearTimeout(timer)
  }, [])
  return display
}

export default function Hero() {
  const role = useTypewriter(ROLES)
  const [imgError, setImgError] = useState(false)

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-grid" />

      <div className="hero-inner">
        {/* ── TEXT ── */}
        <div className="hero-text-block"
          style={{ opacity: 0, transform: 'translateY(28px)', animation: 'fadeUp .9s .15s forwards' }}>

          <h1 className="hero-title">
            <span className="hi">Hi, I'm</span>
            <div className="word"><span><span className="pink">Alison</span> Kate</span></div>
            <br />
            <div className="word"><span>Lachica</span></div>
          </h1>

          <div className="hero-role">
            {role}<span className="cursor-blink">|</span>
          </div>

          <p className="hero-sub">
           Junior Full-Stack Developer | Career Shifter with Fintech Recruitment & Education Background
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('work')}>
              View Projects
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>Contact Me</button>
            <a className="btn-cv" href="/CV.pdf" download="Alison_Kate_Lachica_CV">↓ DOWNLOAD CV</a>
          </div>

          <div className="hero-socials">
            <a className="hero-social" href="https://github.com/alizonekreate" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hero-social" href="https://linkedin.com/in/alisonkatelachica" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hero-social" href="mailto:alsnkte@gmail.com">Email</a>
            <a className="hero-social" href="tel:+639457648545">+63 945 764 8545</a>
          </div>
        </div>

        {/* ── PHOTO ── */}
        <div className="hero-photo-wrap">
          <div className="photo-ring"  style={{ width: 350, height: 350 }} />
          <div className="photo-ring2" style={{ width: 410, height: 410 }} />
          {imgError
            ? <div className="photo-fallback">AKL</div>
            : <img className="photo-img" src="/alison.jpg" alt="Alison Kate Lachica" onError={() => setImgError(true)} />
          }
          <div className="photo-tag t1">React.js</div>
          <div className="photo-tag t2">Node.js</div>
          <div className="photo-tag t3">MongoDB</div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}

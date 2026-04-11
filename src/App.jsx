import { useState, useEffect, useRef } from 'react'
import Intro      from './components/Intro'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Marquee    from './components/Marquee'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import EasterEgg  from './components/EasterEgg'

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0

export default function App() {
  const [showIntro,  setShowIntro]  = useState(true)
  const [eggVisible, setEggVisible] = useState(false)
  const logoClicks  = useRef(0)
  const logoTimer   = useRef(null)

  /* ── Custom cursor ─────────────────────────────────── */
  useEffect(() => {
    if (isTouchDevice()) return

    const cur = document.getElementById('cursor')
    const rng = document.getElementById('cursor-ring')
    let mx = 0, my = 0, rx = 0, ry = 0
    let frameId, trailFrame = 0

    function spawnTrail(x, y) {
      if (++trailFrame % 4 !== 0) return
      const d   = document.createElement('div')
      d.className = 'trail'
      const sz  = 4 + Math.random() * 5
      d.style.cssText = `left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;background:rgba(201,255,94,${.12 + Math.random() * .18})`
      document.body.appendChild(d)
      setTimeout(() => d.remove(), 700)
    }

    function onMouseMove(e) {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
      spawnTrail(mx, my)
    }

    function loop() {
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      rng.style.left = rx + 'px'; rng.style.top = ry + 'px'
      frameId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMouseMove)
    frameId = requestAnimationFrame(loop)

    const hoverEls = () => document.querySelectorAll('a,button,.card')
    function addHover() {
      hoverEls().forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'))
      })
    }
    addHover()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  /* ── Scroll parallax on card images ────────────────── */
  useEffect(() => {
    function onScroll() {
      document.querySelectorAll('.card.in-view').forEach(card => {
        const r = card.getBoundingClientRect()
        const p = (window.innerHeight - r.top) / (window.innerHeight + r.height)
        const s = (Math.max(0, Math.min(1, p)) - .5) * -14
        const img = card.querySelector('.card-img img')
        if (img && img.complete) img.style.transform = `scale(1.01) translateY(${s * .3}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Easter egg — click logo 5× ─────────────────────── */
  function handleLogoClick() {
    logoClicks.current += 1
    clearTimeout(logoTimer.current)
    logoTimer.current = setTimeout(() => { logoClicks.current = 0 }, 2000)
    if (logoClicks.current >= 5) {
      logoClicks.current = 0
      setEggVisible(true)
    }
  }

  return (
    <>
      {/* Cursor elements (hidden on touch) */}
      <div className="cursor"      id="cursor" />
      <div className="cursor-ring" id="cursor-ring" />

      {/* Loading intro */}
      {showIntro && <Intro onDone={() => setShowIntro(false)} />}

      {/* Easter egg overlay */}
      <EasterEgg show={eggVisible} onClose={() => setEggVisible(false)} />

      {/* Navigation */}
      <Navbar onLogoClick={handleLogoClick} />

      {/* Page sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

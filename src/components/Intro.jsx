import { useState, useEffect } from 'react'

export default function Intro({ onDone }) {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let count = 0
    const tick = setInterval(() => {
      count += Math.ceil(Math.random() * 18)
      if (count >= 100) {
        count = 100
        clearInterval(tick)
        setTimeout(() => {
          setDone(true)
          setTimeout(onDone, 900)
        }, 300)
      }
      setPct(count)
    }, 40)
    return () => clearInterval(tick)
  }, [])

  return (
    <div className={`intro${done ? ' done' : ''}`}>
      <div className="intro-logo">&lt;<span>AKL</span>/&gt;</div>
      <div className="intro-bar-wrap"><div className="intro-bar" /></div>
      <div className="intro-pct">{pct}%</div>
    </div>
  )
}

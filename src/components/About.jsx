import { useInView } from '../hooks/useInView'

function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="sec-inner">
        <Reveal><div className="section-eyebrow">01 — About me</div></Reveal>
<Reveal delay="rd1"><h2 className="section-title">From teaching and hiring talent to <em>building digital solutions</em></h2></Reveal>

        <div className="about-grid">
          <div className="about-text">
            <Reveal>
              <p>I'm a <strong className="c-pink">aspring Full-Stack Developerand proud career shifter</strong>,
              a graduate of <strong className="c-accent">Uplift Code Camp</strong> (2025–2026) with a
              Bachelor's degree in Secondary Education from Universidad de Manila.</p>
            </Reveal>
            <Reveal delay="rd1">
              <p>My experience in fintech recruitment at <strong className="c-blue">Salmon Group Ltd.</strong> sharpened
              my communication, coordination, and analytical skills. Which I now bring to building
              scalable, user-focused web applications.</p>
            </Reveal>
            <Reveal delay="rd2">
  <p>I'm <strong className="c-accent">skilled in AI tools like Gemini, OpenAI, and Claude</strong>, driven to create efficient, scalable applications and deliver real-world impact.</p>
</Reveal>
            <Reveal delay="rd3">
              <div className="edu-cards">
                <div className="edu-card">
                  <div className="edu-title">Uplift Code Camp</div>
                  <div className="edu-sub">Full-Stack Web Development Bootcamp</div>
                  <div className="edu-year">2025 – 2026</div>
                </div>
               
<div className="edu-card">
  <div className="edu-title">Claude Courses </div>
  <div className="edu-sub">Claude 101 · Claude Code 101 · AI Coding · Prompt Engineering · Tool Use · Anthropic </div>
  <div className="edu-year">April 2026</div>
</div>
<div className="edu-card blue">
  <div className="edu-title">Google AI Courses</div>
  <div className="edu-sub">AI Fundamentals · NLP · App Building · Coursera</div>
  <div className="edu-year">March 2026</div>
</div>


                <div className="edu-card pink">
                  <div className="edu-title">Universidad de Manila</div>
                  <div className="edu-sub">BSED Major in Social Studies</div>
                  <div className="edu-year">2021 – 2025</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay="rd1">
              <div className="stats-grid">
                {[
                  ['8+', 'Projects Built', 'var(--accent)'],
                  ['2025–26', 'Bootcamp', 'var(--pink)'],
                  ['1yr+', 'Experience', 'var(--blue)'],
                  ['Open', 'To Hire', 'var(--accent)'],
                ].map(([val, lbl, col]) => (
                  <div className="stat-card" key={lbl}>
                    <div className="num" style={{ color: col }}>{val}</div>
                    <div className="lbl">{lbl}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

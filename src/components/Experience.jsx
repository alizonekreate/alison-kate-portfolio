import { useInView } from '../hooks/useInView'

function Reveal({ children, delay = '' }) {
  const [ref, inView] = useInView()
  return <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''}`}>{children}</div>
}

const BULLETS = [ 'Managed end-to-end recruitment for Sales Ambassador roles in a fast-paced fintech environment, covering sourcing, screening, interviews, onboarding, and deployment coordination.', 'Collaborated with internal teams and stakeholders, gaining exposure to fintech operations, digital products, and technology-driven workflows.', 'Used digital tools, databases, and reports to track candidate pipelines, organize recruitment data, and support hiring decisions.', 'Strengthened analytical thinking, communication, coordination, time-management, and attention to detail through high-volume recruitment operations.', 'Applied stakeholder communication and requirement-gathering skills that now support my transition into full-stack development and user-focused application building.', ]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="sec-inner">
        <Reveal><div className="section-eyebrow">04 — Experience</div></Reveal>
        <Reveal delay="rd1"><h2 className="section-title">Where I've <em>worked</em></h2></Reveal>

        <Reveal delay="rd2">
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-company">Salmon Financing Inc.</div>
                <div className="exp-role">Recruitment Associate</div>
              </div>
              <span className="exp-badge">May 2025 – Present</span>
            </div>
            <ul className="exp-list">
              {BULLETS.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { useInView } from '../hooks/useInView'

function Reveal({ children, delay = '' }) {
  const [ref, inView] = useInView()
  return <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''}`}>{children}</div>
}

const BULLETS = [
  'Managed end-to-end recruitment for Sales Ambassador roles — sourcing, screening, interviews, and onboarding.',
  'Sourced candidates via job portals, social media, and referrals; strengthened analytical and decision-making skills.',
  'Coordinated interview schedules and deployment timelines with strong time-management.',
  'Maintained accurate candidate databases and reports, reinforcing attention to detail.',
  'Clear communication with candidates and stakeholders — skills now applied to translating user requirements into technical solutions.',
]

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
                <div className="exp-company">Salmon Group Ltd.</div>
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

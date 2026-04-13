import { useInView } from '../hooks/useInView'
import { SKILLS, TOOLS } from '../data/skills'
import { SkillIcons } from '../data/skillIcons'

function SkillBar({ name, level, col }) {
  const [ref, inView] = useInView()
  const icon = SkillIcons[name]

  return (
    <div className={`skill-item reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="skill-row">
        <div className="skill-name-wrap">
          {icon && (
            <span className="skill-icon" style={{ color: col }}>
              {icon}
            </span>
          )}
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-pct" style={{ color: col }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: inView ? `${level}%` : 0,
            background: `linear-gradient(90deg,${col}77,${col})`,
          }}
        />
      </div>
    </div>
  )
}

function Reveal({ children, delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''}`}>
      {children}
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="sec-inner">
        <Reveal><div className="section-eyebrow">02 — Skills</div></Reveal>
        <Reveal delay="rd1"><h2 className="section-title">Skills <em>&amp; stack</em></h2></Reveal>

        <div className="skills-grid">
          {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
        </div>

        <Reveal>
          <div className="tools-wrap">
            <div className="tools-label">Tools &amp; More</div>
            <div className="tools-tags">
              {TOOLS.map(t => <span className="tool-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
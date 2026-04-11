import { PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="work" id="work">
      <div className="sec-inner">
        <div className="work-header">
          <div>
            <div className="section-eyebrow">03 — Projects</div>
            <h2 className="section-title">8 applications<br /><em>shipped &amp; live</em></h2>
          </div>
          <p className="work-hint">↗ cards open the live deployment</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}


import { useState, useRef, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false)
  const [ref, inView] = useInView()
  const cardRef = useRef(null)

  // 3D tilt — desktop only
  useEffect(() => {
    if (isTouchDevice()) return

    const card = cardRef.current
    if (!card) return

    const onMove = e => {
      const r = card.getBoundingClientRect()
      const cx = (e.clientX - r.left) / r.width - .5
      const cy = (e.clientY - r.top) / r.height - .5

      card.style.transform = `perspective(800px) rotateY(${cx * 8}deg) rotateX(${-cy * 5}deg) scale(1.02)`
    }

    const onEnter = () => {
      card.style.transition = 'transform .12s ease'
    }

    const onLeave = () => {
      card.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)'
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)'
    }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseenter', onEnter)
    card.addEventListener('mouseleave', onLeave)

    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseenter', onEnter)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

 const {
  title,
  type,
  desc,
  tags,
  accentColor,
  accentGrad,
  image,
  liveLink,
  githubLink,
  colClass,
  animClass,
  fallbackClass,
  fallbackLabel,
  fallbackCircles,
  isGithub,
  isPrivate,
  privateNote,
} = project

  const delays = [0, .1, .15, .05, .1, .08, .12, .16]
  const delay = delays[index] ?? 0

  return (
    <article
      ref={el => {
        ref.current = el
        cardRef.current = el
      }}
      className={`card ${colClass} ${animClass} ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* top accent bar */}
      <div className="card-accent-bar" style={{ background: accentGrad }} />

      {/* image */}
      <div className="card-img">
        {imgError ? (
          <div className={`card-img-inner ${fallbackClass}`}>
            <div className="proj-inner">
              {fallbackCircles.map(c => (
                <div className={`proj-circle ${c}`} key={c} />
              ))}
              <span className="proj-label">{fallbackLabel}</span>
            </div>
          </div>
        ) : (
          <div className="card-img-inner">
            <img src={image} alt={title} onError={() => setImgError(true)} />
          </div>
        )}
      </div>

      {/* body */}
      <div className="card-body">
        <div className="card-meta">
          <span
            className="card-cat"
            style={{
              color: accentColor,
              background: `${accentColor}18`,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {type}
          </span>

          <span className="live-badge">
  {isPrivate ? 'Private' : githubLink ? '↗ Live + GitHub' : isGithub ? '↗ GitHub' : '↗ Live'}
</span>
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>

        {isPrivate && privateNote && (
          <p className="private-note">{privateNote}</p>
        )}
      </div>

      {/* footer */}
      <div className="card-footer">
  <div className="card-tags">
    {tags.map(t => (
      <span className="tag" key={t}>
        {t}
      </span>
    ))}
  </div>

  <div className="project-links">
    {isPrivate ? (
      <span className="card-link private-link" title="Private internal project">
        🔒
      </span>
    ) : (
      <>
        {liveLink && (
          <a
            className="card-link"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            title={isGithub ? 'GitHub Repository' : 'Live Demo'}
          >
            {isGithub ? 'GH' : 'Live'}
          </a>
        )}

        {githubLink && (
          <a
            className="card-link"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository"
          >
            GH
          </a>
        )}
      </>
    )}
  </div>
</div>
    </article>
  )
}


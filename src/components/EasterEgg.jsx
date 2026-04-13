export default function EasterEgg({ show, onClose }) {
  return (
    <div className={`egg-overlay${show ? ' show' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="egg-inner">
        <div className="egg-emoji">💻</div>
        <div className="egg-title">You found it.</div>
        <div className="egg-text">
          Click the logo 5× and you get this.<br />
          Curiosity is a developer's best trait— you'll fit right in.
        </div>
        <div className="egg-close" onClick={onClose}>Back to portfolio →</div>
      </div>
    </div>
  )
}

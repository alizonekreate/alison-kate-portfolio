const ITEMS = [
  'JavaScript ES6+','React.js','Node.js','Express.js',
  'MongoDB','REST APIs','Claude AI','Full Stack MERN',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="m-item" key={i}>
            <div className="m-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

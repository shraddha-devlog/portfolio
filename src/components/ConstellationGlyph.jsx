const patterns = {
  about: [[2, 12], [9, 4], [16, 9], [23, 3]],
  skills: [[2, 4], [10, 12], [18, 5], [24, 13]],
  projects: [[2, 6], [8, 2], [15, 10], [22, 4], [26, 11]],
  contact: [[2, 9], [11, 3], [20, 10], [26, 4]],
}

function ConstellationGlyph({ pattern }) {
  const pts = patterns[pattern] || patterns.about
  return (
    <svg className="constellation" width="28" height="16" viewBox="0 0 28 16" aria-hidden="true">
      <polyline
        points={pts.map((p) => p.join(',')).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
      />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 1.6 : 1.1} fill="currentColor" />
      ))}
    </svg>
  )
}

export default ConstellationGlyph

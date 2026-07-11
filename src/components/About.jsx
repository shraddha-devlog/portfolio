const timeline = [
  {
    when: '2023',
    title: 'B.Tech, Computer Science',
    detail: 'Graduated with a foundation in core CS and web development.',
  },
  {
    when: '2023 — 2024',
    title: 'Project Engineer, Ministry of IT',
    detail:
      'Built and shipped a platform used across 100+ institutes — React frontend, backend logic, and database integration.',
  },
  {
    when: '2024 — Present',
    title: 'Sr. Product Solution Engineer, Tech Mahindra',
    detail:
      'Customer-facing technical role for an enterprise telecom client — translating requirements into solutions, working closely with engineering.',
  },
  {
    when: 'Now',
    title: 'Rebuilding hands-on depth',
    detail:
      'Full-time focus on React, Java, and Spring Boot — shipping real projects to return to core engineering work.',
  },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">A developer who spent time on the other side of the requirements doc.</h2>
        <p className="about-body">
          I started as a developer, moved into a role where I translated what clients actually needed into
          technical asks, and I&rsquo;m now returning to building it myself — with a much clearer sense of
          what makes software useful, not just functional.
        </p>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.title} className="timeline-item">
              <span className="timeline-when mono">{item.when}</span>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default About

const timeline = [
  {
    when: '2019 — 2023',
    title: 'B.Tech, Computer Science',
    detail: 'Dr. A.P.J. Abdul Kalam Technical University.',
  },
  {
    when: 'Oct 2023 — Jun 2024',
    title: 'Project Engineer, ERNET · MeitY, Government of India',
    detail:
      'Architected and developed multi-institution portals serving 100+ institutes using React and Node.js. Built real-time dashboards and RESTful APIs, cutting manual administrative effort by 40%.',
  },
  {
    when: 'Jul 2024 — Mar 2025',
    title: 'Technical Assistant, Teleperformance — Adobe Systems',
    detail:
      'Built and maintained a reusable React + Tailwind component design system for the Adobe Systems engagement. Led WCAG 2.1 accessibility audits and remediation.',
  },
  {
    when: 'Mar 2025 — Oct 2025',
    title: 'Software Developer, Async Zone',
    detail:
      'Full-stack development on FocusApp, an export management platform, with React, Tailwind, Node.js, and MongoDB. Owned QA across multiple client products.',
  },
  {
    when: 'Nov 2025 — Present',
    title: 'Sr. Product Solution Engineer, Tech Mahindra · Client: Verizon',
    detail:
      'Leading frontend architecture and end-to-end solutioning for Verizon enterprise platforms — React.js + TypeScript interfaces for ML-powered workflows and real-time analytics.',
  },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">Full-stack, from government infrastructure to enterprise platforms.</h2>
        <p className="about-body">
          Three years across four engagements — public-sector portals, an accessibility-first design system,
          a multi-client full-stack role, and now leading frontend architecture for an enterprise Verizon
          platform. Currently deepening Java and Spring Boot to round out the backend side.
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

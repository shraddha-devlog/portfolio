const frontend = ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS']
const backend = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL']
const building = ['Java', 'Spring Boot']
const practice = ['WCAG 2.1 Accessibility', 'Agile / Scrum', 'Solution Architecture']

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Full-stack across the JavaScript ecosystem, expanding into Java.</h2>

        <div className="skills-grid">
          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="dot dot-confident" aria-hidden="true" />
              Frontend
            </h3>
            <ul className="chip-list">
              {frontend.map((skill) => (
                <li key={skill} className="chip chip-confident">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="dot dot-confident" aria-hidden="true" />
              Backend &amp; Data
            </h3>
            <ul className="chip-list">
              {backend.map((skill) => (
                <li key={skill} className="chip chip-confident">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="dot dot-building" aria-hidden="true" />
              Actively building
            </h3>
            <ul className="chip-list">
              {building.map((skill) => (
                <li key={skill} className="chip chip-building">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="dot dot-confident" aria-hidden="true" />
              Ways of working
            </h3>
            <ul className="chip-list">
              {practice.map((skill) => (
                <li key={skill} className="chip chip-confident">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

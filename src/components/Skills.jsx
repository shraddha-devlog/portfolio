const confident = ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Git & GitHub']
const building = ['Java', 'Spring Boot', 'SQL (MySQL / PostgreSQL)', 'REST APIs']
const practice = ['Agile / Scrum', 'Client requirements translation', 'Cross-functional collaboration']

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Confident where I&rsquo;ve shipped. Honest about what I&rsquo;m still building.</h2>

        <div className="skills-grid">
          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="dot dot-confident" aria-hidden="true" />
              Solid
            </h3>
            <ul className="chip-list">
              {confident.map((skill) => (
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

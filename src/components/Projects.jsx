const projects = [
  {
    id: 'institute-management',
    title: 'Institute Management System',
    status: 'In progress',
    stack: ['Spring Boot', 'MySQL', 'React'],
    detail:
      'A full CRUD platform for managing institutes, students, and records — rebuilding the same domain from my Ministry of IT work end-to-end with a modern stack.',
  },
  {
    id: 'project-two',
    title: 'Project 02',
    status: 'Planned',
    stack: ['TBD'],
    detail:
      'Next up: a full-stack app with authentication and role-based access. Details go here as soon as it starts.',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Building in the open, right now.</h2>
        <p className="about-body">
          These aren&rsquo;t finished yet — this space updates as each one ships. Follow along on{' '}
          <a className="text-link" href="https://github.com/shraddha-devlog" target="_blank" rel="noopener">
            GitHub
          </a>
          .
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-head">
                <h3 className="project-title">{project.title}</h3>
                <span className={`status-badge ${project.status === 'In progress' ? 'status-active' : 'status-planned'}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-detail">{project.detail}</p>
              <ul className="chip-list">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip chip-mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

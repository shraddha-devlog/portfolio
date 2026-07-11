const projects = [
  {
    id: 'cloud-admin-dashboard',
    title: 'Cloud Admin Dashboard',
    status: 'Shipped',
    stack: ['React.js', 'Chart.js', 'Node.js', 'ARIA'],
    detail:
      'Real-time admin dashboard with live data visualization and interactive charts. Fully ARIA-compliant, optimized for performance and Lighthouse scores.',
  },
  {
    id: 'focusapp',
    title: 'FocusApp',
    status: 'Shipped',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind'],
    detail:
      'Export management platform for home furnishing manufacturers — export workflow management, product cataloging, and ARIA-compliant accessible UI.',
  },
  {
    id: 'institute-management',
    title: 'Institute Management System',
    status: 'In progress',
    stack: ['Spring Boot', 'MySQL', 'React'],
    detail:
      'A CRUD platform for managing institutes, students, and records — rebuilding the ERNET/MeitY domain end-to-end on Java and Spring Boot.',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Shipped work, and what&rsquo;s next.</h2>
        <p className="about-body">
          The Java/Spring Boot rebuild is a deliberate expansion into a new backend stack. Follow along on{' '}
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
                <span className={`status-badge ${project.status === 'Shipped' ? 'status-active' : 'status-planned'}`}>
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

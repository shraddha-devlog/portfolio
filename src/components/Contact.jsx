import ConstellationGlyph from './ConstellationGlyph'

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.49c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.08-1.88 3.75-3.66 3.95.29.25.54.73.54 1.48v2.2c0 .21.14.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M14.5 0h-13A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0ZM4.75 13.5H2.4V6h2.35v7.5Zm-1.17-8.53a1.36 1.36 0 1 1 0-2.72 1.36 1.36 0 0 1 0 2.72ZM13.6 13.5h-2.35V9.85c0-.87-.02-1.99-1.21-1.99-1.22 0-1.4.95-1.4 1.93v3.71H6.29V6h2.26v1.03h.03c.31-.6 1.09-1.23 2.24-1.23 2.4 0 2.84 1.58 2.84 3.63v4.07Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="14" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="m1.6 3.8 6.4 5 6.4-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const EMAIL = 's.shraddha0023@gmail.com'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner reveal">
        <p className="section-eyebrow">
          <ConstellationGlyph pattern="contact" />
          Contact
        </p>
        <h2 className="section-title">Open to full-stack developer roles in Pune, and remote.</h2>
        <p className="about-body">
          If you&rsquo;re hiring, or just want to talk about the projects above, my inbox is the fastest way
          to reach me.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            <MailIcon />
            {EMAIL}
          </a>
          <a className="btn btn-ghost" href="https://github.com/shraddha-devlog" target="_blank" rel="noopener">
            <GithubIcon />
            GitHub
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/shraddha-sharma-sde/"
            target="_blank"
            rel="noopener"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

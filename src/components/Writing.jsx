import ConstellationGlyph from './ConstellationGlyph'

const posts = [
  {
    id: 'genai-vs-human',
    title: 'Gen AI vs. Human: Where the Line Actually Moves',
    tag: 'AI × Engineering',
    status: 'Active — in progress',
    excerpt:
      'Copilot writes my boilerplate faster than I can type it. It still can’t tell me why a client rejected a design, or which shortcut a real user will hate by month two. This one’s still being written — I’m tracking where AI genuinely replaces judgment, and where it just replaces typing.',
  },
]

function Writing() {
  return (
    <section id="writing" className="section">
      <div className="section-inner reveal">
        <p className="section-eyebrow">
          <ConstellationGlyph pattern="writing" />
          Writing
        </p>
        <h2 className="section-title">Thinking in public, not just shipping code.</h2>
        <p className="about-body">
          Notes from the intersection of design and engineering — published here first, long-form
          versions coming to Medium.
        </p>

        <div className="writing-grid">
          {posts.map((post) => (
            <article key={post.id} className="writing-card">
              <div className="writing-card-head">
                <span className="chip chip-mono">{post.tag}</span>
                <span
                  className={`status-badge ${post.status.startsWith('Active') ? 'status-drafting' : 'status-planned'}`}
                >
                  {post.status}
                </span>
              </div>
              <h3 className="writing-title">{post.title}</h3>
              <p className="writing-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Writing

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <div className="hero-inner">
        <p className="eyebrow">Full-Stack Developer · Pune, India</p>
        <h1 className="hero-title">
          I build software — <span className="accent-text">and I know what the client actually needs.</span>
        </h1>
        <p className="hero-lede">
          Full-stack developer with 3+ years building React/TypeScript platforms — from a 100+ institute
          government rollout to leading frontend architecture for Verizon&rsquo;s enterprise platforms at
          Tech Mahindra. Currently expanding into Java and Spring Boot.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            See what I&rsquo;m building
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Full-Stack Developer · Pune, India</p>
        <h1 className="hero-title">
          I build software — <span className="accent-text">and I know what the client actually needs.</span>
        </h1>
        <p className="hero-lede">
          Full-stack developer with hands-on experience shipping a platform used across 100+ institutes,
          now returning to core engineering after time spent translating enterprise client requirements
          into technical solutions. Currently deepening React, Java, and Spring Boot.
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

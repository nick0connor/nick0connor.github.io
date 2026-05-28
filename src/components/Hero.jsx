import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">

        {/* <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for work
        </div> */}

        <h1 className="hero-name">
          <span className="plum">Nick</span>
          <br />
          <img src="/favicon.png" alt="O" className="hero-name-logo" />
          <span className="burgundy">'Connor</span>
        </h1>
        <p className="hero-role">
          Software Engineer&nbsp;&nbsp;/&nbsp;&nbsp;Data Engineer
        </p>
        <p className="hero-bio">
          Computer Science graduate focused on writing real code that solves real problems, no matter how small.
        </p>
        <div className="hero-actions">
          <button
            className="btn-plum"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-burgundy">
            Résumé ↗
          </a>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Say hello
          </button>
        </div>
      </div>
    </section>
  );
}

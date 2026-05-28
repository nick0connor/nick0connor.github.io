import "./About.css";

// ← Replace with your real skills
const SKILLS = [
  "JavaScript", "React", "TypeScript", "Node.js",
  "SQL", "PostgreSQL", "MongoDB",
  "C++", "Python", "Java", "C#", 
  "Git", "Jupyter", "GDB"
];

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-text">
          <p className="section-label">About</p>
          <h2 className="section-title">
            A bit about <span className="about-me">me</span>
          </h2>
          <div className="about-body">
            <p>
              Hello there! I'm Nick, a(n aspiring) software engineer based out of St. Louis, Missouri.
              I enjoy working on projects that solve real problems in my life, no matter how niche.
              I always aim for clean, understandable code so that even if you don't understand
              the purpose of a project, you at least understand what it's doing!
            </p>
            <p>
              When I'm not programming, you'll find me editing videos, doing graphic design, or
              exploring other creative ventures in my life.
            </p>
          </div>
        </div>
        <div className="about-sidebar">
          <h3 className="skills-heading">Technologies</h3>
          <div className="skills-pills">
            {SKILLS.map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

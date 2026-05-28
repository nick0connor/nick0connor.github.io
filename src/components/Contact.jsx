import "./Contact.css";

const LINKS = [
  { label: "Email", href: "mailto:nick@nickoconnor.dev", display: "nick@nickoconnor.dev" },
  { label: "GitHub", href: "https://github.com/", display: "github.com/nick0connor" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nicholas--oconnor/", display: "linkedin.com/in/nicholas--oconnor/" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's work together!</h2>
        <p className="contact-sub">
          For any endevors or inquiries, my inbox is always open.
          <br />Or you can just say hello!
        </p>
        <div className="contact-links">
          {LINKS.map(({ label, href, display }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">{label}</span>
              <span className="contact-display">{display} ↗</span>
            </a>
          ))}
        </div>
        <p className="contact-resume">
          Or download my{" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            résumé
          </a>.
        </p>
      </div>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>Built with React + Vite</span>
          <span>© {new Date().getFullYear()} Nick O'Connor</span>
        </div>
      </footer>
    </section>
  );
}

import "./Nav.css";

const links = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ activeSection }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/favicon.png" alt="Nick O'Connor" className="nav-logo-img" />
          {/* Nick Connor<span className="nav-logo-dot">.</span> */}
        </button>
        <ul className="nav-links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

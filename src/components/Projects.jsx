import "./Projects.css";

// ← Replace this array with your real projects
const PROJECTS = [
  {
    id: 1,
    title: "NaH - Netflix at Home",
    description:
      "A tool to search for and download torrents for a Plex/Jellyfin server completely from your phone",
    tags: ["React", "Node.js"],
    github: "https://github.com/nick0connor/nah",
    live: null,
    year: "2026",
  },
  {
    id: 2,
    title: "yt-dlp gui",
    description:
      "An attempt to give the commandline tool yt-dlp a GUI for Windows 11.",
    tags: ["C#", ".NET"],
    github: "https://github.com/yourusername/project-beta",
    live: null,
    year: "2024",
  },
  {
    id: 3,
    title: "MCCHEATS",
    description:
      "A live website with a Minecraft Java mod made to trick a friend. Made to fool a Minecraft-obsessed Computer Science major.",
    tags: ["React", "JavaScript", "Java"],
    github: "https://github.com/nick0connor/MCCHEATS",
    live: "https://mccheats.com",
    year: "2025-26",
  },
  {
    id: 4,
    title: "LocalZone.ly",
    description:
      "A prototype for a new social media platform for tourists. Connect with locals and find cool hidden gems in an area!",
    tags: ["EJS", "Node.js", "Docker", "MySQL"],
    github: "https://github.com/jpavner13/CSCI3308ProjectGroup4/",
    live: null,
    year: "2022",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <article key={p.id} className="project-row" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="project-num">0{i + 1}</span>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-meta">
                <span className="project-year">{p.year}</span>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live ↗
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

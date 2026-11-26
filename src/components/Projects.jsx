import { projects, projectsNote } from '../data.js'

function CodeLine({ line }) {
  if (line.dim) return <span className="dim">{line.text}</span>
  return (
    <span>
      {line.text}
      {line.accent && <span style={{ color: '#6EE7B7' }}>{line.accent}</span>}
      {line.after}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <span className="label">04 — Projects</span>
      <div className="section-head">
        <h2>Featured projects</h2>
        <p>Two full-stack builds that combine MERN fundamentals with AI-powered workflows.</p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className={`project-visual ${project.variant}`}>
              <span className="project-num">{project.num}</span>
              <div className="visual-mono">
                {project.codeLines.map((line, i) => (
                  <span key={line.text}>
                    <CodeLine line={line} />
                    {i < project.codeLines.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-head">
              <span className={`project-badge${project.badgeGreen ? ' green' : ''}`}>
                {project.badge}
              </span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
            <div className="project-body">
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">{projectsNote}</p>
    </section>
  )
}

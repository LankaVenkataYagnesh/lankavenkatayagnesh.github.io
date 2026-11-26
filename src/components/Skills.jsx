import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <span className="label">02 — Skills</span>
      <div className="section-head">
        <h2>Technical skills</h2>
        <p>Tools and technologies I&apos;ve used in internships and projects — not just listed, but applied.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.num}>
            <h3>
              <span className="skill-num">{group.num}</span>
              {group.title}
            </h3>
            <p>{group.desc}</p>
            <div className="tags">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

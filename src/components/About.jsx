import { about, lookingFor } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <span className="label">01 — About</span>
      <div className="section-head">
        <h2>About me</h2>
        <p>{about.intro}</p>
      </div>
      <div className="two-col">
        <article className="card">
          <h3>From electronics to full-stack development</h3>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </article>
        <article className="card looking-card">
          <h3>What I&apos;m looking for</h3>
          <p>{lookingFor.text}</p>
          <div className="role-list">
            {lookingFor.roles.map((role) => (
              <span className="pill" key={role}>
                {role}
              </span>
            ))}
          </div>
          <ul className="checklist">
            {lookingFor.checklist.map((item) => (
              <li key={item.label}>
                <span>
                  <strong>{item.label}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

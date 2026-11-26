import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <span className="label">03 — Experience</span>
      <div className="section-head">
        <h2>Internship experience</h2>
        <p>Structured training plus project delivery — with real auth, APIs and database work.</p>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <article className="exp" key={job.title}>
            <div className="exp-date">
              <strong>{job.date}</strong>
              {job.dateLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            <div>
              <h3>{job.title}</h3>
              <p className="org">{job.org}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
              {job.cert && <span className="cert">{job.cert}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

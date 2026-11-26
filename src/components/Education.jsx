import { education, foundations, howIWork, languages } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <span className="label">05 — Education</span>
      <div className="section-head">
        <h2>Education</h2>
        <p>Final-year engineering student, graduating in 2027.</p>
      </div>
      <div className="edu-grid">
        <div className="card">
          {education.map((item) => (
            <div className="edu-item" key={item.title}>
              <div className="edu-dot">{item.dot}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <h3>Core foundations</h3>
          <p>{foundations}</p>
          <h3 className="edu-sub">Languages I speak</h3>
          <div className="lang-row">
            {languages.map((lang) => (
              <span className="pill" key={lang}>
                {lang}
              </span>
            ))}
          </div>
          <h3 className="edu-sub">How I work</h3>
          <p>{howIWork}</p>
        </div>
      </div>
    </section>
  )
}

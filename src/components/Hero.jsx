import { useState } from 'react'
import { facts, hero, profile, stats } from '../data.js'

export default function Hero() {
  const [toast, setToast] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setToast(`Email copied — ${profile.email}`)
    } catch {
      setToast(profile.email)
    }
    window.setTimeout(() => setToast(''), 2200)
  }

  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="hero-anim">
          <span className="eyebrow">
            <span className="dot" />
            {hero.eyebrow}
          </span>
          <h1>
            {hero.headingStart}
            <span className="accent">{hero.headingAccent}</span>
            {hero.headingMid}
            <span className="outline">{hero.headingOutline}</span>
            {hero.headingEnd}
          </h1>
          <p className="lead">
            I&apos;m <strong>{profile.name}</strong>
            {hero.lead.replace(`I'm ${profile.name},`, '')}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my projects ↓
            </a>

            <button className="btn btn-ghost" type="button" onClick={copyEmail}>
              Copy email
            </button>
          </div>
          <div className="social-row">
            <a
              className="social-btn linkedin"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              in&nbsp; LinkedIn ↗
            </a>
            <a
              className="social-btn github"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <div className="meta-row">
            <span>📍 {profile.locationShort}</span>
            <span>🎓 {profile.educationShort}</span>
          </div>
        </div>

        <aside className="profile-card hero-anim d2" aria-label="Quick profile">
          <div className="profile-top">
            <div className="avatar">{profile.initials}</div>
            <div>
              <h3>{profile.name}</h3>
              <p>
                MERN Stack Developer Intern
                <br />
                {profile.tagline}
              </p>
            </div>
          </div>
          <dl className="facts">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="code-box" aria-hidden="true">
            <span className="k">const</span> developer = {'{'}
            <br />
            &nbsp;&nbsp;stack: [<span className="s">&quot;React&quot;</span>,{' '}
            <span className="s">&quot;Node&quot;</span>, <span className="s">&quot;MongoDB&quot;</span>],
            <br />
            &nbsp;&nbsp;auth: <span className="s">&quot;JWT&quot;</span>, apis:{' '}
            <span className="s">&quot;REST&quot;</span>,<br />
            &nbsp;&nbsp;openToWork: <span style={{ color: '#6EE7B7' }}>true</span>
            <br />
            {'}'}
          </div>
        </aside>
      </div>

      <div className="stats hero-anim d3" aria-label="Highlights">
        {stats.map((stat) => (
          <div className="stat" key={stat.text}>
            <b>
              {stat.value}
              <em>{stat.suffix}</em>
            </b>
            <span>{stat.text}</span>
          </div>
        ))}
      </div>

      {toast && (
        <div className="toast show" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </div>
  )
}

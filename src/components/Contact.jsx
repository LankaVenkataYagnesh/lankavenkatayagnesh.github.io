import { useState } from 'react'
import { contact, profile } from '../data.js'

export default function Contact() {
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
    <>
      <div className="contact" id="contact">
        <div>
          <h2>
            {contact.headingStart}
            <span>{contact.headingAccent}</span>
          </h2>
          <p>{contact.text}</p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a
              className="btn btn-light"
              href={`mailto:${profile.email}?subject=Internship%20Opportunity%20for%20Yagnesh%20—%20MERN%20Stack`}
            >
              Send an email ↗
            </a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13.5, color: 'var(--muted)' }}>
            {contact.footerNote}
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="contact-btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              LinkedIn<small>{profile.linkedinLabel}</small>
            </span>
            <span>↗</span>
          </a>
          <a
            className="contact-btn"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              GitHub<small>{profile.githubLabel}</small>
            </span>
            <span>↗</span>
          </a>
          <a className="contact-btn" href={`mailto:${profile.email}`}>
            <span>
              Email<small>{profile.email}</small>
            </span>
            <span>↗</span>
          </a>
          <a className="contact-btn" href={profile.phoneLink}>
            <span>
              Phone<small>{profile.phoneDisplay}</small>
            </span>
            <span>↗</span>
          </a>
          <button className="contact-btn" type="button" onClick={copyEmail}>
            <span>
              Copy email address<small>For sharing with recruiters / referrals</small>
            </span>
            <span>Copy</span>
          </button>
          <a className="contact-btn" href="#projects">
            <span>
              Review projects again<small>Cart Rescue AI · Campus AI Bridge</small>
            </span>
            <span>↑</span>
          </a>
        </div>
      </div>

      {toast && (
        <div className="toast show" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </>
  )
}

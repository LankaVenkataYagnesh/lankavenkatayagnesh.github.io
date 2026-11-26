import { useState } from 'react'
import { profile } from '../data.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top">
          <span className="brand-mark">{profile.initials}</span>
          <span>
            {profile.name}
            <small>{profile.role}</small>
          </span>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Internship →
          </a>
        </nav>
      </div>
    </header>
  )
}

import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <span>© 2026 {profile.name} · Visakhapatnam, India</span>
      <span className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <span>MERN Stack · Open to internships</span>
      </span>
    </footer>
  )
}

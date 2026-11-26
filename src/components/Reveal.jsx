import { useEffect, useRef, useState } from 'react'

// Wraps a section and fades it in when it scrolls into view.
// Usage: <Reveal><section id="skills">…</section></Reveal>
export default function Reveal({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
      {children}
    </div>
  )
}

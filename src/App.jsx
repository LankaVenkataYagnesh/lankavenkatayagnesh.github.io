import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'

// The page is built from small components, one per section.
// To add a section: make a new file in src/components/ and add it below.
export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="wrap">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
      </main>
    </>
  )
}

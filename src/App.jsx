import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/about"
import Skill from "./components/Skills/skill"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Projects from "./components/Projects/Projects"

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

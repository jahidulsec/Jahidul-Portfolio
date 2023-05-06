import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Testimonial from './components/testimonial/Testimonial'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import Skill from './components/skills/Skill'


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
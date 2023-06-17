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

  const handleClick = (anchor) => () => { 
    const id = `${anchor}`; 
    const element = document.getElementById(id);
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 



  return (
    <div className='app'>
      <Navbar handleClick={handleClick} />
      <main>
        <Hero handleClick={handleClick} />
        <About />
        <Skill />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer handleClick={handleClick} />
    </div>
  )
}

export default App
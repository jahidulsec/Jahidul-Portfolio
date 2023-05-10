import React from 'react'

const About = () => {
  return (
    <section className='about-section' id='about'>
      <article className="container grid">
        <div className="title">
          <h1 className='text-neutral-300 fw-extra-bold fs-section-title ff-primary'>ABOUT</h1>
          <h2 className='text-neutral-300 fw-light fs-section-subtitle ff-primary'>My Introduction</h2>
        </div>
        <div className="circles">
          <span className='circle-light'></span>
          <span className='circle-light'></span>
        </div>
        <p className='text-neutral-300 fw-regular fs-para ff-primary'>
        Jahidul is a passionate front-end developer with experience in React Js, JavaScript, Python, Django, and Rest APIs. 
        He excels on keeping designs simple. For almost five years, Jahidul has worked as a freelance 
        graphic designer. He enjoys spending time exploring new technologies, developing original designs, 
        and discovering new areas of knowledge. Of course, as a front-end developer, he has some cloud-based projects.
        </p>
        <button className="btn-light">
          <a href="Jahidul_FD.pdf" download>
            Download CV
          </a>
        </button>
      </article>
    </section>
  )
}

export default About
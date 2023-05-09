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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="btn-light">Download CV</button>
      </article>
    </section>
  )
}

export default About
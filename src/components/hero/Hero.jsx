import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='hero-section' id='hero-section'>
      <div className="container grid">
        <div className="left">
          <h1 className='fs-hero-title ff-primary fw-extra-bold'>Hi! I'm Jahidul Islam</h1>
          <h2 className='fs-hero-subtitle ff-primary fw-light'>Front-end Developer</h2>
          <div className="circles">
            <span className='circle-dark'></span>
            <span className='circle-dark'></span>
          </div>
          <p className='ff-primary fs-para fw-regular '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </p>
          <button className='btn-dark '>Let's Talk</button>
        </div>
        <div className="right">
          <img className='pp' src="/Images/frame.png" alt="" />
        </div>
        <div className="icons">
          <AiFillGithub size={40} className='github' />
          <AiFillLinkedin size={40} className='linkedin' />
        </div>
      </div>
    </section>
  )
}

export default Hero
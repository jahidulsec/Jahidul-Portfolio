import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Hero = ({handleClick}) => {
  return (
    <section className='hero-section' id='hero'>
      <div className="container grid">
        <div className="left">
          <h1 className='fs-hero-title ff-primary fw-extra-bold'>Hi! I'm Jahidul Islam</h1>
          <h2 className='fs-hero-subtitle ff-primary fw-light'>Front-end Developer</h2>
          <div className="circles">
            <span className='circle-dark'></span>
            <span className='circle-dark'></span>
          </div>
          <p className='ff-primary fs-para fw-regular '>
            Building digital product, Innovative and user centered design and collaboration 
          </p>
          <button className='btn-dark '>
            <a href='#contact' onClick={handleClick(`contact`)} >
              Let's Talk
            </a>
          </button>
        </div>
        <div className="right">
          <img className='pp-frame' src="/Images/frame.png" alt="" />
          <img className='pp-image' src="Images/pp.jpg" alt="jahidul" />
        </div>
        <div className="icons">
          <a href="https://github.com/jahidulsec/">
            <AiFillGithub size={30} className='github' />
          </a>
          <a href="https://www.linkedin.com/in/jahidulsec/">
            <AiFillLinkedin size={30} className='linkedin' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
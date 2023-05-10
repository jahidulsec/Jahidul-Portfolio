import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = ({handleClick}) => {

  return (
    <footer className='footer-section bg-light-300'>
      <div className="container">
        <div className="title">
          <h2 className='ff-primary text-primary fs-card-title fw-bold'>Jahidul Islam</h2>
          <h2 className='ff-secondary text-secondary fs-para'>Front-end Developer</h2>
        </div>
        <nav className="footer-nav text-primary ff-primary fs-nav fw-bold">
          <ul role='list'>
              <li><a href="#" onClick={handleClick(`hero`)}>HOME</a></li>
              <li><a href="#about" onClick={handleClick(`about`)}>ABOUT</a></li>
              <li><a href="#skills" onClick={handleClick(`skill`)}>SKILLS</a></li>
              <li><a href="#portfolio" onClick={handleClick(`project`)}>PORTFOLIOS</a></li>
              <li><a href="#testimonials" onClick={handleClick(`testimonial`)}>TESTIMONIALS</a></li>
              <li><a href="#contact" onClick={handleClick(`contact`)}>CONTACT</a></li>
            </ul>
        </nav>
        <div className="social-icons">
          <a href="https://github.com/jahidulsec/">
            <AiFillGithub size={40} className='github' />
          </a>
          <a href="https://www.linkedin.com/in/jahidulsec/">
            <AiFillLinkedin size={40} className='linkedin' />
          </a>
        </div>
        <h6 className='ff-primary fs-para fw-light'>© Jahidul Islam. All rights reserved.</h6>
      </div>
    </footer>
  )
}

export default Footer
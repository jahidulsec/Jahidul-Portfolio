import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = ({ handleClick }) => {

  const headerRef = useRef(undefined)
  const toggleRef = useRef(undefined)
  const logoRef = useRef(undefined)

  const [visibility,setVisibility] = useState(false)

  

  useEffect(()=> {

    const sections  = document.querySelectorAll(`section[id]`)

    const scrollActive = () => {
      const scrollY = window.pageYOffset

      sections.forEach(current => {
        const sectionHeight =  current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if ((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
          document.querySelector('.primary-nav li .nav-'+sectionId).classList.add('active-link')
        }else{
          document.querySelector('.primary-nav li .nav-'+sectionId).classList.remove('active-link')
        }
      });
    }

    window.addEventListener("scroll", scrollActive)

      return () => {
        window.removeEventListener("scroll", scrollActive)
      }
  },[])

  const handleVisibilityNav = () => {
    setVisibility(!visibility)
  }


  return (
    <header className='primary-header' data-visible={visibility}>
      <div className="nav-toggle" data-visible={visibility}>
        {!visibility ? 
          <AiOutlineMenu className='nav-icon' onClick={() => {setVisibility(!visibility)}} /> :
          <AiOutlineClose className='nav-icon' onClick={() => {setVisibility(!visibility)}} />
        }
      </div>
      <nav
        className='primary-nav text-neutral-200 ff-primary fs-nav fw-bold' 
        data-visible={visibility}
        ref={headerRef}
      >
        <ul role='list'>
          <li><a href="#" className='nav-hero' onClick={handleClick(`hero`)}>HOME</a></li>
          <li><a href="#about" className='nav-about' onClick={handleClick(`about`)}>ABOUT</a></li>
          <li><a href="#skills" className='nav-skill' onClick={handleClick(`skill`)}>SKILLS</a></li>
          <li><a href="#project" className='nav-project' onClick={handleClick(`project`)}>PORTFOLIOS</a></li>
          <li><a href="#testimonials" className='nav-testimonial' onClick={handleClick(`testimonial`)}>TESTIMONIALS</a></li>
          <li><a href="#contact" className='nav-contact' onClick={handleClick(`contact`)}>CONTACT</a></li>
        </ul>
      </nav>
      <span 
        className="logo ff-secondary fw-light"
        data-visible={visibility}
        onClick={handleClick(`hero`)}
      >
        Jahidul
      </span>
    </header>
  )
}

export default Navbar
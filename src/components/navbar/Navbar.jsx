import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ handleClick }) => {

  const headerRef = useRef(undefined)
  const toggleRef = useRef(undefined)
  const logoRef = useRef(undefined)

  const [visibility,setVisibility] = useState(false)

  useEffect(() => {
    
    let prevScroll = window.scrollY
      
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const headerNav = headerRef.current
      const toggleBtn = toggleRef.current
      const logo = logoRef.current

      if (!headerNav){
        return
      }
      if(prevScroll > 16) {
        headerNav.style.margin = '-2rem 0 0 0'
        toggleBtn.style.top = `1rem`
        logo.style.margin = `-3rem 0 0 0`
      }
      else {
        headerNav.style.margin = '0rem 0 0 0'
        toggleBtn.style.top = `4rem`
        logo.style.margin = `0`
      }
      prevScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

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
    <header className='primary-header'>
      <div className="container">
        <div 
          id="nav-bg" 
        >
          
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
        </div>
        <div className="mbl-nav">
          
        </div>
        <button 
            className='mobile-nav-toggle'
            onClick={handleVisibilityNav}
            ref={toggleRef}
          >
          <span 
            className="material-symbols-outlined"
            style={visibility ? {position: `fixed`} : {position:`absolute`}}
          >
            {!visibility ? `menu` : `close`}
          </span>
        </button>
        <div 
          className="logo ff-secondary text-neutral-200 fs-card-title"
          ref={logoRef}
          onClick={handleClick(`hero`)}
        >
          Jahidul
        </div>
      </div>
    </header>
  )
}

export default Navbar
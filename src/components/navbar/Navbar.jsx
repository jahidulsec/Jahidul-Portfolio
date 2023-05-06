import React, { useEffect, useRef } from 'react'

const Navbar = () => {

  const headerRef = useRef(undefined)

  useEffect(()=> {
    let prevScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const headerElement = headerRef.current

      if (!headerElement) {
        return;
      }
      console.log(currentScroll)
      if(prevScroll > 16) {
        headerElement.style.transform = "translateY(-2rem)"
        headerElement.style.padding = "1.625rem 1.875rem .625rem"
        headerElement.style.position = "fixed"
        headerElement.style.left = "0"

      } else {
        headerElement.style.transform = "translateY(0rem)"
        headerElement.style.padding = ".625rem 1.875rem"
        headerElement.style.position = "absolute"


      }
      prevScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[]);

  const handleClick = (anchor) => () => { 
    const id = `${anchor}-section`; 
    const element = document.getElementById(id);
    console.log(element) 
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 

  return (
    <header className='primary-header'>
      <div className="container grid">
        <div className="nav-bg bg-dark" ref={headerRef}>
          <nav className='primary-nav' >
            <ul role='list'>
              <li><a href="#" onClick={handleClick(`hero`)}>HOME</a></li>
              <li><a href="#about" onClick={handleClick(`about`)}>ABOUT</a></li>
              <li><a href="#skills" onClick={handleClick(`skill`)}>SKILLS</a></li>
              <li><a href="#portfolio" onClick={handleClick(`project`)}>PORTFOLIOS</a></li>
              <li><a href="#testimonials" onClick={handleClick(`testimonial`)}>TESTIMONIALS</a></li>
              <li><a href="#contact" onClick={handleClick(`contact`)}>CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <div 
          className="logo ff-secondary text-primary fs-section-subtitle"
        >
          jahidul islam
        </div>
      </div>
    </header>
  )
}

export default Navbar
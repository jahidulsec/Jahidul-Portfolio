import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

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


      console.log(headerNav)
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
      <div className="container">
        <div 
          id="nav-bg" 
        >
          
          <nav
            className='primary-nav text-neutral-300 ff-primary fs-nav fw-bold' 
            data-visible={visibility}
            ref={headerRef}
          >
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
        <div className="mbl-nav">
          
        </div>
        <button 
            className='mobile-nav-toggle'
            onClick={()=> (setVisibility(!visibility))}
            ref={toggleRef}
          >
          <span 
            className="material-symbols-outlined"
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
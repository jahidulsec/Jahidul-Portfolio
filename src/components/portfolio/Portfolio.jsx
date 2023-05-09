import React from 'react'
import ProjectCard from '../ProjectCard'
import { BsArrowDown } from 'react-icons/bs'

const Portfolio = () => {
  return (
    <section className='project-section' id='project'>
      <div className="container grid">
        <div className="title">
          <h1 className='text-neutral-300 fw-extra-bold fs-section-title ff-primary'>PORTFOLIO</h1>
          <h2 className='text-neutral-300 fw-light fs-section-subtitle ff-primary'>My Recent Projects</h2>
        </div>
        <div className="project-list">
            <ProjectCard 
              projectTitle={`Project - 001`}
              projectDesc={`Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor `}
            />
            <ProjectCard 
              marginTop={`3rem`}
              projectTitle={`Project - 001`}
              projectDesc={`Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor `}
          />
          <ProjectCard 
            projectTitle={`Project - 001`}
            projectDesc={`Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor `}
          />
          <ProjectCard 
            marginTop={`3rem`}
            projectTitle={`Project - 001`}
            projectDesc={`Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor `}
          />
        </div>
        <div className="down-icon">
          <BsArrowDown 
            size={30}
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
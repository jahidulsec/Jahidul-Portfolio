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
              projectCover={ `project_1`}
              projectStack={`React Js, Node Js, Express Js, MongoDB`}
              projectUrl={`https://mydit-ui-bdl7.vercel.app/`}
              projectTitle={`Project - 001`}
              projectDesc={`Myd.it | Fashion Designer's Freelance Website (Full Stack) `}
            />
            <ProjectCard 
              marginTop={`3rem`}
              projectCover={`project_2`}
              projectStack={`ReactJs`}
              projectUrl={`https://ava-town-vr-website.vercel.app/`}
              projectTitle={`Project - 002`}
              projectDesc={`AvaTown | VR Avatar Website (Frontend)`}
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
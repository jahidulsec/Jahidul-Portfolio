import React from 'react'

const ProjectCard = ({projectTitle, projectDesc, marginTop}) => {
  return (
    <div 
        className="project-card"
        style={{marginTop: `${marginTop}`}}
    >
        <div className="project-frame">
        <img 
            className='project-cover'
            src="/Images/frame.png"
            alt="project-image" 
        />
        <span className="live ff-primary fs-para text-primary">Live Demo</span>
        </div>
        <div className="project-desc">
        <h3 className='fs-card-title ff-primary fw-bold text-neutral-300'>
            {`${projectTitle}`}
        </h3>
        <p
            className='fs-para text-neutral-300 ff-primary fw-regular'>
        {`${projectDesc}`} 
        </p>
        </div>
    </div>
  )
}

export default ProjectCard
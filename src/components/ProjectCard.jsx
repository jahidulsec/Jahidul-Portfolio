import React from 'react'
import {MdDesignServices} from 'react-icons/md'

const ProjectCard = ({projectTitle, projectDesc, projectCover, projectStack, projectUrl, marginTop}) => {
  return (
    <div 
        className="project-card"
        style={{marginTop: `${marginTop}`}}
    >
        <div className="project-frame">
        <img 
            className='project-cover'
            src="/Images/frame.png"
            alt="project-frame" 
        />
        <img 
            className='project-image'
            src={`Images/${projectCover}.png`} 
            alt="project-image" 
        />
        <div className="project-tech-detail ff-primary text-neutral-500 fw-bold fs-para">
            <MdDesignServices size={40}/>
            <span>
                {projectStack}
            </span>
        </div>
        <button 
            className="live ff-primary fs-para text-primary"
        >
            <a href={projectUrl}>
                Live Demo
            </a>
        </button>
        </div>
        <div className="project-desc">
        <h3 
            style={{textTransform: "uppercase"}}
            className='fs-card-title ff-primary fw-bold text-neutral-300'>
            {projectTitle}
        </h3>
        <p
            className='fs-para text-neutral-300 ff-primary fw-regular'>
        {projectDesc} 
        </p>
        </div>
    </div>
  )
}

export default ProjectCard
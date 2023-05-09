import React from 'react'
import SkillCard from "../SkillCard/SkillCard"
import { area } from '../../data'

const Skill = () => {
  return (
    <section className='skill-section bg-light-500' id='skill'>
      <div className="container grid">
      <div className="title">
        <h1 className='text-primary fw-extra-bold fs-section-title ff-primary'>SKILLS</h1>
        <h2 className='text-primary fw-light fs-section-subtitle ff-primary'>My Technical Level</h2>
      </div>
        <div className="skill-list">
          {area.map(data => (
            <SkillCard 
              key={data.areaName}
              areaName={data.areaName}
              visible={data.visible}
              skillData={data.skillData}
            />
              )
            )
          }
        </div>
        <p 
          className='skill-slogun text-primary ff-primary fs-para fw-light'
        >
          Collaborate | Create | Innovate
        </p>
      </div>
    </section>
  )
}

export default Skill
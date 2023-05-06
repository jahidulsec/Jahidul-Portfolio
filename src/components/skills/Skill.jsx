import React from 'react'
import SkillCard from "../SkillCard/SkillCard"
import SkillSlot from '../SkillCard/SkillSlot'

const Skill = () => {
  return (
    <section className='skill-section bg-light-300' id='skill-section'>
      <div className="container grid">
      <div className="title">
        <h1 className='text-primary fw-extra-bold fs-section-title ff-primary'>SKILLS</h1>
        <h2 className='text-primary fw-light fs-section-subtitle ff-primary'>My Technical Level</h2>
      </div>
        <div className="skill-list">
          <SkillCard className="one" skillName={`Front-end Development`} >
            <SkillSlot skillName={`HTML`} skillPercent={`80`}/>
            <SkillSlot skillName={`CSS`} skillPercent={`80`}/>
            <SkillSlot skillName={`JavaScript`} skillPercent={`70`}/>
            <SkillSlot skillName={`React Js`} skillPercent={`75`}/>
          </SkillCard>
          <SkillCard className="two" skillName={`Back-end Development`} >
            <SkillSlot skillName={`Python`} skillPercent={`85`}/>
            <SkillSlot skillName={`Django`} skillPercent={`80`}/>
            <SkillSlot skillName={`Node Js`} skillPercent={`70`}/>
            <SkillSlot skillName={`Rest API`} skillPercent={`75`}/>
            <SkillSlot skillName={`MongoDB`} skillPercent={`65`}/>
            <SkillSlot skillName={`MySQL`} skillPercent={`55`}/>
          </SkillCard>
          <SkillCard className="three" skillName={`Creative Design`} >
            <SkillSlot skillName={`Figma`} skillPercent={`80`}/>
            <SkillSlot skillName={`Illustrator`} skillPercent={`90`}/>
            <SkillSlot skillName={`Photoshop`} skillPercent={`85`}/>
          </SkillCard>
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
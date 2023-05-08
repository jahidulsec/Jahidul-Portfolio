import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCode } from 'react-icons/bs'
import './SkillCard.css'
import SkillSlot from './SkillSlot'


const SkillCard = ({areaName, skillData, visible}) => {

    const [viewSkill, setViewSkill] = useState(visible) 


  return (
    <div className='skillCard'>
        <div className="container">
            <div 
                className="title"
                onClick={()=> {setViewSkill(!viewSkill)}}
            >
                <div style={{display: 'flex', alignItems: 'center', gap: '.875rem'}}>
                    <BsCode
                        size={25} 
                    />
                    <h3 
                        className='text-primay ff-primary fw-bold fs-skill-title'
                    >
                        {areaName}
                    </h3>
                </div>
                    <BiChevronDown 
                        className={ viewSkill ? "down-icon visible" : "down-icon"}
                        size={25} 
                        onClick={()=> {setViewSkill(!viewSkill)}}
                    />

            </div>
            {
                skillData.map((skill) => (
                    <SkillSlot 
                        key={skill.name}
                        name={skill.name} 
                        percentage={skill.percentage}
                        viewSkill={viewSkill}   
                    />
                        
                ))
            }
        </div>
    </div>
  )
}

export default SkillCard
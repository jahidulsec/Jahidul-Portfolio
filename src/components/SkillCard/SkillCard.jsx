import React, { useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCode } from 'react-icons/bs'
import './SkillCard.css'


const SkillCard = ({skillName, children}) => {

    const [viewSkill, setViewSkill] = useState(false) 
    const downIcon = useRef(undefined)

    const handleRotate = () => {
        let rotateIcon= 'rotate(0deg)'

        if (viewSkill) 
            return rotateIcon ='rotate(180deg)'
        return rotateIcon 
    }
    console.log(viewSkill)

  return (
    <div className='skillCard'>
        <div className="container">
            <div className="title">
                <div style={{display: 'flex', alignItems: 'center', gap: '.875rem'}}>
                    <BsCode size={25} />
                    <h3 className='text-primay ff-primary fw-bold fs-skill-title'>{skillName}</h3>
                </div>
                    <BiChevronDown 
                        size={25} 
                        ref={downIcon}
                        style = {{transform: `${handleRotate()}`, transition: 'rotate 1s' }}
                        onClick={()=> {setViewSkill(!viewSkill)}}
                    />

            </div>
            {viewSkill && children}
        </div>
    </div>
  )
}

export default SkillCard
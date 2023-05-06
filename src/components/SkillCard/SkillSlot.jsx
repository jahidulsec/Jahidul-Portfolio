import React, { useEffect, useRef } from 'react'

const SkillSlot = ({skillName, skillPercent}) => {

    const skillPos = useRef(undefined)
    const skillNeg = useRef(undefined)

    useEffect(()=> {
        const posValue = skillPos.current
        const negValue = skillNeg.current

        if (!posValue) {
            return;
        }
        if (!negValue) {
            return;
        }

        posValue.style.width = `${skillPercent*24/100}rem`
        negValue.style.width = `${24-(skillPercent*24/100)}rem`
    },[])


  return (
    <div className="skills">
        <div className="skill">
            <h4 className="skill-title text-primary ff-primary fw-bold fs-skill-subtitle">{`${skillName}`}</h4>
            <span className="skill-rate text-primary ff-primary fw-light fs-skill-subtitle">{`${skillPercent}`}%</span>
        </div>
        <div className="skill-bar">
            <span className="pos" ref={skillPos}></span>
            <span className="neg" ref={skillNeg}></span>
        </div>
    </div>
  )
}

export default SkillSlot
import React, { useEffect, useRef } from 'react'

const SkillSlot = ({name, percentage, viewSkill, visible}) => {

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

        posValue.style.width = `${percentage*18/100}rem`
        negValue.style.width = `${18-(percentage*18/100)}rem`
    },[viewSkill])


  return (
    
    <div className="skills">
        {
            viewSkill &&
                (<>
                    <div className="skill">
                        <h4 
                            className="skill-title text-primary ff-primary fw-bold fs-skill-subtitle">
                                {`${name}`}
                        </h4>
                        <span 
                            className="skill-rate text-primary ff-primary fw-light fs-skill-subtitle">
                                {`${percentage}`}%
                        </span>
                    </div>
                    <div className="skill-bar">
                        <span className="pos" ref={skillPos}></span>
                        <span className="neg" ref={skillNeg}></span>
                    </div>
                </>
                )
        }
    </div>
  )
}

export default SkillSlot
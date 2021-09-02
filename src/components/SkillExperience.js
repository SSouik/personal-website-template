import React from 'react';

const SkillExperience = ({ title, img, children }) => {
    return (
        <div 
            className='skill-experience-wrapper'
        >
            <img
                src={`images/${img}`}
            />
            <h4>{title}</h4>
            <hr/>
            <p>{children}</p>
        </div>
    );
}

export default SkillExperience;

import React from 'react';
import PropTypes from 'prop-types';

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

SkillExperience.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default SkillExperience;

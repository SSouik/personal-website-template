import React from 'react';

const SkillBar = ({ label, percentage }) => {
    return (
        <div className='skillbar'>
            <span>{label}</span>
            <div className='bar-bg'>
                <div className='bar-fg' style={{ width: percentage ?? '0px'}}/>
            </div>
        </div>
    )
}

export default SkillBar;

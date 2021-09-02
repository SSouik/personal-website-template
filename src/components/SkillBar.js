import React from 'react';
import PropTypes from 'prop-types';

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

SkillBar.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string
}

SkillBar.defaultProps = {
    percentage: '0%'
}

export default SkillBar;

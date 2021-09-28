import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ company, jobTitle, datesWorked, children }) => {
    return (
        <div className='text-left'>
            <h4>{company}</h4>
            <h6>{jobTitle}</h6>
            <h6 className='secondary'><i>{datesWorked}</i></h6>
            <p>
                {children}
            </p>
        </div>
    )
}

Experience.propTypes = {
    company: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    datesWorked: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Experience;

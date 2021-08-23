import React from 'react';

const Experience = ({ company, datesWorked, children }) => {
    return (
        <div className='text-left'>
            <h4>{company}</h4>
            <h6 className='secondary'><i>{datesWorked}</i></h6>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Experience;

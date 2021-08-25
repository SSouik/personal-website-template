import React from 'react';

const Reference = ({ name, location, quote }) => {
    return (
        <div className='reference'>
            <h4>{name}</h4>
            <h6 className='secondary'>{location}</h6>
            <p className='quote p-3'>{quote}</p>
        </div>
    )
}

export default Reference;

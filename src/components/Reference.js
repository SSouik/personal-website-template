import React from 'react';
import PropTypes from 'prop-types';

const Reference = ({ name, location, quote }) => {
    return (
        <div className='reference'>
            <h4>{name}</h4>
            <h6 className='secondary'>{location}</h6>
            <p className='quote p-3'>{quote}</p>
        </div>
    )
}

Reference.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}

export default Reference;

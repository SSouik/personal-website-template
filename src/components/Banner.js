import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-row p-5'>
                <div className='col-md-6 text-center name p-3'>
                    <span>Hello, I'm First Last</span>
                    <br/>
                    <span>Job Title</span>
                </div>
                <div className='col-md-6 p-3'>
                    <p className='bio'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum
                    </p>
                </div>
                <i
                    className='banner-arrow'
                    onClick={() => {
                        window.location.assign('#experience');
                    }}
                />
            </div>
        </div>
    )
}

export default Banner;

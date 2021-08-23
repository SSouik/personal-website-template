import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [showNavItems, setShowNavItems] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) {
                document.getElementsByClassName('navbar')[0]
                    .classList.add('scrolled');

                document.getElementsByClassName('logo')[0]
                    .classList.add('scrolled');
            }
            else {
                document.getElementsByClassName('navbar')[0]
                    .classList.remove('scrolled');

                document.getElementsByClassName('logo')[0]
                    .classList.remove('scrolled');
            }
        }
    )});

    return (
        <nav className='navbar navbar-expand-md fixed-top'>
            <div className='navbar-brand'>
                <div className='logo'>
                    FL
                </div>
            </div>
            <button
                onClick={() => setShowNavItems(!showNavItems)} 
                className={`navbar-toggler ${showNavItems && 'collapsed'}`} 
                type='button' 
                data-toggle='collapse' 
                data-target='#navbarSupportedContent' 
                aria-controls='navbarSupportedContent' 
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <i className='fa fa-lg fa-bars' style={{ color: 'white' }}/>
            </button>

            <div className={`collapse navbar-collapse ${showNavItems && 'show'}`} id='navbarSupportedContent'>
                <div className='navbar-nav ml-auto'>
                    <Link
                        onClick={() => setShowNavItems(false)} 
                        href='/skills'
                    >
                        <a className='nav-item nav-link'>Skills</a>
                    </Link>
                    <Link
                        onClick={() => setShowNavItems(false)} 
                        href='/about'
                    >
                        <a className='nav-item nav-link'>About</a>
                    </Link>
                    <Link
                        onClick={() => setShowNavItems(false)} 
                        href='/contact'
                    >
                        <a className='nav-item nav-link'>Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;

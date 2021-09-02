import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [showNavItems, _setShowNavItems] = useState(false);

    const stateRef = useRef(showNavItems);

    const setShowNavItems = (flag) => {
        stateRef.current = flag;
        _setShowNavItems(flag);
    }

    const addColor = () => {
        document.getElementById('nav-bar')
            .classList.add('color-fill');

        document.getElementById('logo')
            .classList.add('color-fill');

        document.getElementById('menu')
            .classList.add('color-fill');
    }

    const removeColor = () => {
        document.getElementById('nav-bar')
            .classList.remove('color-fill');

        document.getElementById('logo')
            .classList.remove('color-fill');

        document.getElementById('menu')
            .classList.remove('color-fill');
    }

    const handleScroll = () => {
        if (window.scrollY >= 90) {
            addColor();
        }
        else if (!stateRef.current) {
            removeColor();
        }
    }

    const handleLinkClick = () => {
        window.scrollTop(0);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id='nav-bar'className='navbar navbar-expand-md fixed-top'>
            <div className='navbar-brand'>
                <Link href='/'>
                    <a 
                        style={{ textDecoration: 'none' }}
                        onClick={() => {
                            setShowNavItems(false);
                            removeColor();
                            handleLinkClick();
                        }}
                    >
                        <div id='logo' className='logo'>
                            FL
                        </div>
                    </a>
                </Link>
            </div>
            <button
                onClick={() => {
                    const show = !showNavItems;

                    if (show) {
                        addColor();
                    }
                    else if (window.scrollY < 90) {
                        removeColor();
                    }

                    setShowNavItems(show);
                }}
                className={`navbar-toggler ${showNavItems && 'collapsed'}`} 
                type='button' 
                data-toggle='collapse' 
                data-target='#navbarSupportedContent' 
                aria-controls='navbarSupportedContent' 
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <i id='menu' className='fa fa-lg fa-bars'/>
            </button>

            <div className={`collapse navbar-collapse ${showNavItems && 'show'}`} id='navbarSupportedContent'>
                <div className='navbar-nav ml-auto'>
                    <Link href='/skills'>
                        <a 
                            className='nav-item nav-link'
                            onClick={() => {
                                setShowNavItems(false);
                                removeColor();
                                handleLinkClick();
                            }}
                        >
                            Skills
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a 
                            className='nav-item nav-link'
                            onClick={() => {
                                setShowNavItems(false);
                                removeColor();
                                handleLinkClick();
                            }}
                        >
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;

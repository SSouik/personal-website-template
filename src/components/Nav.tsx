import React, { Component } from 'react';
import Link from 'next/link';

interface Props {
    isLanding?: boolean;
}

interface State {
    isMenuOpen: boolean;
}

class Nav extends Component<Props, State> {
    private isMenuOpenRef: React.MutableRefObject<boolean> = React.createRef<boolean>();

    constructor(props: Props) {
        super(props);

        this.state = {
            isMenuOpen: false
        }

        this.isMenuOpenRef.current = this.state.isMenuOpen;
    }

    private setIsMenuOpen = (flag: boolean): void => {
        this.isMenuOpenRef.current = flag;
        this.setState({ isMenuOpen: flag });
    }

    private getNavBarClasslist = (): DOMTokenList => document.querySelector('.navbar')?.classList;

    private addColor = (): void => {
        this.getNavBarClasslist()
            .add('color-fill');
    }

    private removeColor = (): void => {
        this.getNavBarClasslist()
            .remove('color-fill');
    }
    
    private handleMenuToggle = (): void => {
        // Menu is open so let's close it
        if (
            !this.props.isLanding &&
            this.state.isMenuOpen && 
            window.scrollY < 90
        ) {
            this.removeColor();
        }
        else if (!this.props.isLanding && !this.state.isMenuOpen) {
            this.addColor();
        }

        // Open/Close the menu
        this.setIsMenuOpen(!this.state.isMenuOpen);
    }

    private handleScroll = (): void => {
        if (!this.isMenuOpenRef.current && window.scrollY >= 90) {
            this.addColor();
        }
        else if (!this.isMenuOpenRef.current) {
            this.removeColor();
        }
    }

    public componentDidMount = (): void => {
        window.addEventListener('scroll', this.handleScroll);
    }

    public render = (): JSX.Element => {
        const { isLanding } = this.props;
        const { isMenuOpen } = this.state;

        const linkProps = {
            className: null
        };

        if (isLanding) linkProps.className = 'landing';

        return (
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link
                        as='/' 
                        href='/'
                    >
                        <a>
                            <img
                                id='nav-logo'
                                src='/images/logo.png'
                                alt='logo'
                                style={{ height: '60px', width: '60px' }}
                            />
                        </a>
                    </Link>
                </div>
                <i 
                    className={`navbar-menu${isLanding ? ' landing' : ''}`}
                    onClick={this.handleMenuToggle}
                />

                <div className={`navbar-items ${isMenuOpen && 'open'}`}>
                    <ul>
                        <li>
                            <Link
                                as='/experience' 
                                href='/experience'
                            >
                                <a {...linkProps}>Experience</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                as='/skills' 
                                href='/skills'
                            >
                                <a {...linkProps}>Skills</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                as='/about' 
                                href='/about'
                            >
                                <a {...linkProps}>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;

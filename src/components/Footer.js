import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row text-center'>
                <div className='col-md-12'>
                    <span>First Last</span>
                    <br/>
                    <a href='mailto:first.last@example.com'>first.last@example.com</a>
                    <br/>
                    <a href='tel:4145551234'>414.555.1234</a>
                </div>
            </div>
            <div className='row mt-3'>
                <ul>
                    <li>
                        <a href='/'><i className='fa fa-lg fa-facebook'/></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-lg fa-twitter'/></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-lg fa-instagram'/></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-lg fa-linkedin'/></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-lg fa-github'/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;

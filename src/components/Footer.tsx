import React, { Component } from 'react';

class Footer extends Component {
    public render = (): JSX.Element => (
        <div className='footer'>
            <div className='row text-center'>
                <div className='col-md-12'>
                    <span>First Last</span>
                    <br/>
                    <a href='mailto:first.last@example.com'>first.last@example.com<i className='fa fa-envelope pl-2'/></a>
                    <br/>
                    <a href='tel:4145551234'>414.555.1234<i className='fa fa-phone pl-2'/></a>
                </div>
            </div>
            <div className='row mt-3'>
                <ul>
                    <li>
                        <a href='/' target='_blank' rel='noreferrer'><i className='fa fa-lg fa-facebook'/></a>
                    </li>
                    <li>
                        <a href='/' target='_blank' rel='noreferrer'><i className='fa fa-lg fa-twitter'/></a>
                    </li>
                    <li>
                        <a href='/' target='_blank' rel='noreferrer'><i className='fa fa-lg fa-instagram'/></a>
                    </li>
                    <li>
                        <a href='/' target='_blank' rel='noreferrer'><i className='fa fa-lg fa-linkedin'/></a>
                    </li>
                    <li>
                        <a href='/' target='_blank' rel='noreferrer'><i className='fa fa-lg fa-pinterest'/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;

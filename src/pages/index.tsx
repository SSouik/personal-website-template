import React, { Component } from 'react';
import { Seo } from '../components';
import Landing from '../layouts/Landing';

class Home extends Component {
    public render = (): JSX.Element => (
        <Landing>
            <Seo 
                title='Home' 
                description='Home description'
            />
            <div className='context'>
                <h1>First Last</h1>
                <h3>Job Title</h3>
            </div>
            <div className='area'>
                <ul className='animated-banner'>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                    <li className='shape'></li>
                </ul>
            </div>
        </Landing>
    )
}

export default Home;

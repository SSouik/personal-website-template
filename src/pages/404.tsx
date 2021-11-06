import React, { Component } from 'react';
import Seo from '../components/Seo';

class NotFound extends Component {
    public render = (): JSX.Element => (
        <div id='not-found' className='row'>
            <Seo title='Not Found' description='The page you searched for has either been moved or does not exist.'/>
            <div className='col-md-12 center'>
                <div className='section-header'>
                    <h2 className='bg-header'>404</h2>
                    <h3 className='fg-header'>Not Found</h3>
                </div>
            </div>
        </div>
    )
}

export default NotFound;

import React, { Component, Fragment } from 'react';
import { Nav, Footer } from '../components';

interface Props {
    children: React.ReactNode;
}

class Page extends Component<Props> { 
    public render = (): JSX.Element => (
        <Fragment>
            <Nav/>
            <div className='page-wrapper'>
                {this.props.children}
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Page;

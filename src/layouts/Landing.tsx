import React, { Component, Fragment } from 'react';
import Nav from '../components/Nav';

interface Props {
    children: React.ReactNode;
}

class Landing extends Component<Props> {
    public render = (): JSX.Element => (
        <Fragment>
            <Nav isLanding/>
            {this.props.children}
        </Fragment>
    )
}

export default Landing;

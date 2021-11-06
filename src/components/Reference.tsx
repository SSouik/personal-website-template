import React, { Component } from 'react';

interface Props {
    name: string;
    location: string;
    quote: string;
}

class Reference extends Component<Props> {
    public render = (): JSX.Element => (
        <div className='reference'>
            <h4>{this.props.name}</h4>
            <h6 className='secondary'>{this.props.location}</h6>
            <p className='quote p-3'>{this.props.quote}</p>
        </div>
    )
}

export default Reference;

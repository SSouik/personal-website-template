import React, { Component } from 'react';

interface Props {
    company: string;
    jobTitle: string;
    datesWorked: string;
    children: React.ReactNode;
}

class Experience extends Component<Props> {
    public render = (): JSX.Element => (
        <div className='row mt-5'>
            <div className='timeline pr-0'>
                <div className='bubble'>
                    <h6>{this.props.datesWorked}</h6>
                </div>
                <i className='fa fa-circle'/>
                <i className='fa fa-circle'/>
                <i className='fa fa-circle'/>
            </div>
            <div className='experience-block'>
                <div className='experience-card'>
                    <div className='experience-info'>
                        <h4 className='mb-3'>{this.props.company}</h4>
                        <h5 className='mb-3'>{this.props.jobTitle}</h5>
                        <h6><i>{this.props.datesWorked}</i></h6>
                    </div>
                    <div className='experience-body'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;

import React, { Component } from 'react';

interface Props {
    label: string;
    percentage?: string;
}

class SkillBar extends Component<Props> {
    public render = (): JSX.Element => (
        <div className='skillbar'>
            <span className='text-left' style={{ width: '100px' }}>{this.props.label}</span>
            <div className='bar-bg'>
                <div className='bar-fg' style={{ width: this.props.percentage ?? '0px'}}/>
            </div>
        </div>
    )
}

export default SkillBar;

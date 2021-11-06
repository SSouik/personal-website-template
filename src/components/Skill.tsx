import React, { Component } from 'react';

interface Props {
    title: string;
    years: string;
    img?: string;
    children: React.ReactNode;
}

class Skill extends Component<Props> {
    public render = (): JSX.Element => {
        let graphic: JSX.Element = null;

        if (this.props.img && this.props.img?.includes('fa fa')) {
            graphic = <i className={this.props.img}/>;
        }
        else {
            graphic = <img src={`/images/${this.props.img}`} alt={this.props.title}/>
        }

        return (
            <div className='card'>
                <div className='card-header'>
                    <h4>{this.props.title}</h4>
                    <span>{this.props.years} years</span>
                    {graphic}
                </div>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Skill;

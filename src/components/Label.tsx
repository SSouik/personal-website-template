import React, { Component } from 'react';
import { ColorsEnum } from '../lib/types';

interface Props {
    title: string;
    color?: ColorsEnum;
}

class Label extends Component<Props> {
    constructor(props: Props) {
        super(props);

        if (!props.color) {
            props.color = ColorsEnum.Primary;
        }
    }

    public render = (): JSX.Element => {
        const {
            title,
            color
        } = this.props;

        return (
            <div className={`lbl lbl-${color}`}>
                {title}        
            </div>
        )
    }
}

export default Label;

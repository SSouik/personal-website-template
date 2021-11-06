import React, { Component } from 'react';

interface Props {
    type?: string;
    typeValue: string;
    content: string;
}

class Meta extends Component<Props> {
    constructor(props: Props) {
        super(props);

        if (!props.type) {
            props.type = 'name';
        }
    }
    
    public render = (): JSX.Element => {
        const {
            type,
            typeValue,
            content
        } = this.props;

        if (type === 'name') {
            return <meta name={typeValue} content={content}/>;
        }

        return <meta property={typeValue} content={content}/>;
    }
}

export default Meta;

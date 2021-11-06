import React, {Component } from 'react';
import Head from 'next/head';
import Meta from './Meta';

type MetaType = {
    name?: string;
    property?: string;
    content: string;
}

interface Props {
    title: string;
    description: string;
    meta?: Array<MetaType>
}

interface State {
    imageSrc: string;
    href: string;
}

class Seo extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            imageSrc: '',
            href: ''
        }
    }
    
    public componentDidMount = (): void => {
        this.setState({
            imageSrc:`${window.location.origin}/favicon.ico`,
            href: window.location.href
        });
    }

    public render = (): JSX.Element => {
        const {
            title,
            description,
            meta
        } = this.props;

        const {
            imageSrc,
            href
        } = this.state;

        const customMeta = meta?.map((m: MetaType, i: number) => {
            if (m?.name) {
                return <Meta key={i} type='name' typeValue={m?.name} content={m?.content}/>;
            }
    
            return <Meta key={i} type='property' typeValue={m?.property} content={m?.content}/>;
        });

        return (
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico'/>
                <link rel='icon' type='img/png' href='/images/profile.png'/>
                <meta name='description' content={description}/>
                <meta name='author' content='Samuel Souik <me@samuelsouik.com>'/>
                <meta name='application-name' content='Personal Website'/>
                <meta property='url' content={href}/>
                <meta property='og:title' content={title}/>
                <meta property='og:url' content={href}/>
                <meta property='og:description' content={description}/>
                <meta property='og:type' content='website'/>
                <meta property='og:stie_name' content='Personal Website'/>
                <meta property='og:image' content={imageSrc}/>
                <meta name='twitter:title' content={title}/>
                <meta name='twitter:description' content={description}/>
                <meta name='twitter:iamge:src' content={imageSrc}/>
                <meta name='twitter:card' content='summary'/>
                <meta name='twitter:creator' content='Samuel Souik <me@samuelsouik.com>'/>
                {customMeta}
            </Head>
        )
    }
}

export default Seo;

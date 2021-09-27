import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Seo = ({ title, description, meta }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [href, setHref] = useState('');

    const Meta = ({ type ='name', typeValue, content }) => {
        if (type === 'name') {
            return <meta name={typeValue} content={content}/>;
        }

        return <meta property={typeValue} content={content}/>;
    };
    
    const customMeta = meta?.map(m => {
        if (m?.name) {
            return <Meta type='name' typeValue={m?.name} content={m?.content}/>;
        }

        return <Meta type='property' typeValue={m?.property} content={m?.content}/>;
    });

    useEffect(() => {
        setHref(window.location.href);
        setImageSrc(`${window.location.origin}/favicon.ico`);
    });

    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='author' content='Samuel Souik <samuel.souik@gmail.com>'/>
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
            <meta name='twitter:creator' content='Samuel Souik <samuel.souik@gmail.com>'/>
            {customMeta.map(m => m)}
        </Head>
    )
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    meta: PropTypes.arrayOf({ name: PropTypes.string, property: PropTypes.string, content: PropTypes.string })
};

Seo.defaultProps = {
    meta: []
};

export default Seo;
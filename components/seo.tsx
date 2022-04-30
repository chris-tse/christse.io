import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
import MetaList from '../data/meta'

type SEOProps = {
    title: string
    keywords?: string[]
}

function SEO({title, keywords }: SEOProps) {
    function getMetaTags() {
        return MetaList.map(meta => {
            return <meta key={meta.name || meta.property} name={meta.name} property={meta.property} content={meta.content} />
        })
    }

    return (
        <Head>
            <title>{title}</title>
            {keywords ? <meta name="keywords" content={keywords.join(',')} /> : null}
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
            {getMetaTags()}
        </Head>
    )
}

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired,
}

export default SEO

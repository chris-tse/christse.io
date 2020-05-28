/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export const query = graphql`
    query BlogPostTemplateQuery($id: String!) {
        post: sanityBlogPost(id: { eq: $id }) {
            date
            title
            _rawContent
        }
    }
`

const serializers = {
    types: {
        // eslint-disable-next-line react/display-name
        block: props => {
            const level = props.node.style || 'normal'

            if (/^h\d/.test(level)) {
                return <h3 className="text-xl font-bold mb-2">{props.children}</h3>
            }

            return <p>{props.children}</p>
        },
    },
}

function blogPost({ data }) {
    const { post } = data
    console.log(post._rawContent)
    return (
        <Layout>
            <SEO title="blog" />
            <h2 className="text-2xl font-bold mb-8">{post.title}</h2>
            <BlockContent blocks={post._rawContent} serializers={serializers} />
        </Layout>
    )
}

blogPost.propTypes = {
    data: PropTypes.object,
}

export default blogPost

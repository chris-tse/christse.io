import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
    query {
        allSanityBlogPost {
            nodes {
                date(formatString: "YYYY/MM/DD")
                description
                title
                slug
            }
        }
    }
`

function BlogIndexPage({ data }) {
    const {
        allSanityBlogPost: { nodes: posts },
    } = data

    const post = posts[0]

    return (
        <Layout>
            <SEO title="Blog" />
            <div>
                <h2 className="text-2xl font-bold inline-block mb-4 pb-3">Blog</h2>

                <div>
                    <Link to={`/blog/${post.slug}`} className="font-bold text-purple-800 no-underline">
                        <h3 className="text-xl">{post.title}</h3>
                    </Link>
                    <p className="text-sm mb-2 text-gray-600">{post.date}</p>
                    <p className="mb-4">{post.description}</p>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

BlogIndexPage.propTypes = {
    data: PropTypes.object,
}

export default BlogIndexPage

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function BlogIndexPage() {
    return (
        <Layout>
            <SEO title="Blog" />
            <div>
                <h2 className="text-2xl font-bold inline-block my-4 py-3">Blog</h2>
            </div>
        </Layout>
    )
}

export default BlogIndexPage

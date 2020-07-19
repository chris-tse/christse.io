/* eslint-disable react/prop-types */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Layout from '@components/layout'
import SEO from '@components/seo'
import { graphql } from 'gatsby'

export const query = graphql`
    query BlogPostTemplateQuery($id: String!) {
        post: sanityBlogPost(id: { eq: $id }) {
            date(formatString: "YYYY/MM/DD")
            title
            content
        }
    }
`

function blogPost({ data }) {
    const { post } = data

    const renderers = {
        paragraph: function p({ children }) {
            return <p className="mb-4 text-base leading-loose">{children}</p>
        },
        heading: function H({ level, children }) {
            const PostHeading = `h${level}`
            const fontSizeKey = {
                1: 'text-3xl',
                2: 'text-2xl',
                3: 'text-xl',
            }

            if (level === 1) {
                return (
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{children}</h1>
                        <p className="text-gray-600 font-semibold mb-4">{post.date}</p>
                    </div>
                )
            }

            return (
                <PostHeading className={`${fontSizeKey[level]} ${level === 1 ? 'mt-0' : 'mt-8'} font-bold mb-4`}>
                    {children}
                </PostHeading>
            )
        },
        blockquote: function BQ({ children }) {
            return <blockquote className="border-l-2 pl-2 italic text-gray-600 leading-relaxed">{children}</blockquote>
        },
        inlineCode: function InlineCode({ children }) {
            return (
                <code className="bg-gray-200 px-2 py-1 rounded font-mono text-purple-800 font-semibold">
                    {children}
                </code>
            )
        },
        code: function CodeBlock({ language, value }) {
            // return (
            //     <pre className="mb-8 bg-black p-4 rounded text-white">
            //         <code>{value}</code>
            //     </pre>
            // )

            return (
                <SyntaxHighlighter language={language} style={atomDark}>
                    {value}
                </SyntaxHighlighter>
            )
        },
    }
    return (
        <Layout>
            <SEO title={post.title} />
            <ReactMarkdown source={post.content} renderers={renderers} />
        </Layout>
    )
}

export default blogPost

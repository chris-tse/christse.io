import React from 'react'
import PropTypes from 'prop-types'

// eslint-
import Layout from '@components/layout'
import SEO from '@components/seo'
import PageHeading from '@components/page-heading'
import UsesEntry from '@components/UsesEntry'
import { graphql } from 'gatsby'

export const query = graphql`
    query MyQuery {
        allUses {
            nodes {
                section
                entries {
                    name
                    items
                }
            }
        }
    }
`

function UsesPage({ data }) {
    const {
        allUses: { nodes: uses },
    } = data

    console.log(uses)

    return (
        <Layout>
            <SEO title="Uses" />

            <PageHeading>Uses</PageHeading>

            <p className="mb-8">Here is a list of all the things I use, from editor themes to PC hardware.</p>

            {uses.map(section => {
                console.log(section)
                return (
                    <section className="mb-4" key={section.section}>
                        <h2 className="text-xl font-bold mb-2 pl-1 border-b-2">{section.section}</h2>
                        {section.entries.map((entry, index) => (
                            <UsesEntry key={`${section}-entry-${index}`} {...entry} />
                        ))}
                    </section>
                )
            })}
        </Layout>
    )
}

UsesPage.propTypes = {
    data: PropTypes.object,
}

export default UsesPage

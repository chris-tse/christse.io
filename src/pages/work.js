import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeading from '../components/page-heading'
import WorkHistoryItem from '../components/work-history-item'

export const query = graphql`
    query WorkHistoryQuery {
        allWorkHistory {
            nodes {
                employer
                title
                dateRange
                description
            }
        }
    }
`

function WorkHistoryPage({ data }) {
    const {
        allWorkHistory: { nodes: workHistory },
    } = data

    return (
        <Layout>
            <SEO title="About" />

            <PageHeading>Places I&apos;ve Worked</PageHeading>

            <section className="max-w-xl">
                {workHistory.map((item, index) => (
                    <WorkHistoryItem key={`workhistory-${index}`} {...item} />
                ))}
            </section>
        </Layout>
    )
}

WorkHistoryPage.propTypes = {
    data: PropTypes.object,
}

export default WorkHistoryPage

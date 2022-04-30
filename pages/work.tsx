import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@components/layout'
import SEO from '@components/seo'
import PageHeading from '@components/page-heading'
import WorkHistoryItem from '@components/WorkHistoryItem'
import workHistory from '@data/workhistory.json'

import type { WorkHistory } from '@components/WorkHistoryItem'

type WorkHistoryProps = {
    workHistory: WorkHistory[]
}

export const getStaticProps: GetStaticProps<WorkHistoryProps> = () => {
    return {
        props: {
            workHistory: workHistory as WorkHistory[],
        }
    }
}

function WorkHistoryPage(data: WorkHistoryProps) {
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

export default WorkHistoryPage

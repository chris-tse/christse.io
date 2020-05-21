import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project-item'

export const query = graphql`
    query ProjectQuery {
        allProject {
            nodes {
                demoUrl
                description
                name
                sourceUrl
                thumbnailPath
            }
        }
    }
`

function ProjectsPage({ data }) {
    const {
        allProject: { nodes: projects },
    } = data

    return (
        <Layout>
            <SEO title="Projects" />
            <h2 className="text-2xl font-bold inline-block my-4 py-3">Things I&apos;ve Made</h2>

            {projects.map(project => {
                return <Project key={project.name} {...project} />
            })}
        </Layout>
    )
}

ProjectsPage.propTypes = {
    data: PropTypes.object,
}

export default ProjectsPage

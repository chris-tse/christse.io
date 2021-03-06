const projects = require('./data/projects.json')
const workHistory = require('./data/workhistory.json')
const uses = require('./data/uses.json')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
            },
        },
    })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    projects.forEach(Project => {
        const node = {
            name: Project.name,
            description: Project.description,
            thumbnailPath: Project.thumbnailPath,
            demoUrl: Project.demoUrl,
            sourceUrl: Project.sourceUrl,
            id: createNodeId(`Project-${Project.name}`),
            internal: {
                type: 'Project',
                contentDigest: createContentDigest(Project),
            },
        }
        actions.createNode(node)
    })

    workHistory.forEach(WorkHistory => {
        const node = {
            employer: WorkHistory.employer,
            title: WorkHistory.title,
            dateRange: WorkHistory.dateRange,
            description: WorkHistory.description,
            id: createNodeId(`WorkHistory-${WorkHistory.employer}`),
            internal: {
                type: 'WorkHistory',
                contentDigest: createContentDigest(WorkHistory),
            },
        }
        actions.createNode(node)
    })

    uses.forEach(use => {
        const node = {
            section: use.section,
            entries: use.entries,
            id: createNodeId(`Uses-${use.section}`),
            internal: {
                type: 'Uses',
                contentDigest: createContentDigest(use),
            },
        }
        actions.createNode(node)
    })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allSanityBlogPost {
                nodes {
                    date(formatString: "YYYY/MM/DD")
                    title
                    slug
                    id
                }
            }
        }
    `)

    if (result.errors) {
        throw result.errors
    }

    const blogPosts = result.data.allSanityBlogPost.nodes || []

    blogPosts.forEach(post => {
        const { id, slug } = post
        const path = `/blog/${slug}`

        reporter.info(`Creating blog post page: ${path}`)

        createPage({
            path,
            component: require.resolve('./src/templates/blogPost.js'),
            context: { id },
        })
    })
}

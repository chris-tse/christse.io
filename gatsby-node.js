const projects = require('./data/projects.json')
const workHistory = require('./data/workhistory.json')

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
}

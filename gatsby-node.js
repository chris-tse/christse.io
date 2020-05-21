const projects = require('./data/projects.json')

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
}

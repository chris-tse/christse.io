export default {
    name: 'blogPost',
    title: 'Blog post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'URL',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date Posted',
            type: 'date',
            options: {
                dateFormat: 'YYYY/MM/DD',
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'markdown',
            options: {
                minRows: 20,
            },
        },
    ],
}

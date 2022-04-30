const siteUrl = process.env.BASE_URL
const description = 'Chris Tse is a software engineer based in Oklahoma City making awesome websites.'

const meta = [
    {
        name: `description`,
        content: description,
    },
    {
        property: `og:description`,
        content: description,
    },
    {
        property: `og:type`,
        content: `website`,
    },
    {
        name: `twitter:card`,
        content: `summary`,
    },
    {
        name: `twitter:creator`,
        content: '@ChrisMTse',
    },
    {
        name: `twitter:description`,
        content: description,
    },
    {
        name: `twitter:image`,
        content: `${siteUrl}/twitterlogo.jpg`,
    },
    {
        name: 'sdf',
        property: 'sdf',
        content: 'sdf'
    }
]

export default meta
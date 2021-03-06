const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
    siteMetadata: {
        title: `Chris Tse`,
        description: `Chris Tse is a software engineer based in Oklahoma City making awesome websites.`,
        author: `@ChrisMTse`,
        siteUrl: `https://christse.io`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Chris Tse Portfolio`,
                short_name: `Chris Tse`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.purple['800'],
                display: `minimal-ui`,
                icon: `src/images/favicon-transparent.png`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
                ],
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'vl1rvekg',
                dataset: 'production',
            },
        },
    ],
}

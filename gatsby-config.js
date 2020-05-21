const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
    siteMetadata: {
        title: `Chris Tse`,
        description: `Chris Tse is a software engineer based in Oklahoma City with a focus on beautiful and performant interfaces.`,
        author: `@ChrisMTse`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.purple['700'],
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
    ],
}

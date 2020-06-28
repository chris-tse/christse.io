import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'
import { Link } from 'gatsby'

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={['html', 'css', 'javascript', 'es6', 'react', 'tailwindcss', 'gatsby']} title="Home" />

            <section>
                <img alt="bla" className="block w-1/2 mb-8" src={catAndHumanIllustration} />

                <h2 className="inline-block py-3 mb-4 text-2xl font-bold">
                    Hi, I&apos;m Chris. I&apos;m a software engineer specializing in front end development.
                </h2>

                <p className="leading-loose mb-4">
                    I love doing creating things for the web. My main choice of tools currently are React, Sass/SCSS,
                    Tailwind CSS, and Node.js. I was born and raised in Calgary, Canada and now reside in Oklahoma City
                    working at{' '}
                    <a
                        className="text-purple-800 font-bold hover:text-purple-600 hover:underline"
                        href="https://netsuite.com"
                    >
                        Oracle Netsuite
                    </a>
                    .
                </p>

                <p>
                    If you&apos;d like to get in touch, feel free to{' '}
                    <Link className="text-purple-800 font-bold hover:text-purple-600 hover:underline" to="/contact">
                        leave me a message
                    </Link>
                    .
                </p>
            </section>
        </Layout>
    )
}

export default IndexPage

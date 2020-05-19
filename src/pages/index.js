import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={['html', 'css', 'javascript', 'es6', 'react', 'tailwindcss', 'gatsby']} title="Home" />

            <section>
                <img alt="bla" className="block w-1/2 mb-8" src={catAndHumanIllustration} />

                <h2 className="inline-block py-3 mb-4 text-2xl font-bold">Hi there! Something more here. </h2>

                <p className="leading-loose mb-4">
                    Some placeholder text here pls fix{` `}
                    <a
                        className="font-bold text-purple-800 no-underline"
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tailwind CSS
                    </a>{' '}
                    future me.
                    <br />
                    lksdfjklsdjflksdf
                </p>

                <p>Some other stuff.</p>
            </section>
        </Layout>
    )
}

export default IndexPage

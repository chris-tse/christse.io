import React from 'react'

import Layout from '@components/layout'
import SEO from '@components/seo'
import PageHeading from '@components/page-heading'

function ContactPage() {
    return (
        <Layout>
            <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
            <section>
                <PageHeading>Get in touch!</PageHeading>
                <p className="mb-4 leading-normal">
                    Want to get in touch? Find me at any of the following places or fill in the form below. I will get
                    back to you as soon as I can
                </p>

                <ul className="mb-10 list-disc list-inside">
                    <li>
                        <a
                            className="text-purple-800 font-bold hover:text-purple-600 hover:underline"
                            href="https://twitter.com/ChrisMTse"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-purple-800 font-bold hover:text-purple-600 hover:underline"
                            href="https://twitch.tv/TheOtakuDev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitch
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-purple-800 font-bold hover:text-purple-600 hover:underline"
                            href="https://github.com/chris-tse"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-purple-800 font-bold hover:text-purple-600 hover:underline"
                            href="https://linkedin.com/in/chrismtse/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <form
                    name="gatsby-contact-form"
                    className="mx-auto md:w-2/3 p-8 shadow-lg rounded-md bg-gray-300"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="gatsby-contact-form" />

                    <label className="block mb-2 text-xs font-bold uppercase" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        className="w-full mb-6 form-input"
                        id="name"
                        placeholder="ex. Akira Yamada"
                        type="text"
                        name="name"
                        required
                    />

                    <label className="block mb-2 text-xs font-bold uppercase" htmlFor="name">
                        Email
                    </label>

                    <input
                        className="w-full mb-6 form-input"
                        id="email"
                        placeholder="ex. name@hey.com"
                        type="email"
                        name="email"
                    />

                    <label className="block mb-2 text-xs font-bold uppercase" htmlFor="message">
                        Message
                    </label>

                    <textarea
                        className="w-full mb-6 form-textarea"
                        id="message"
                        placeholder="Say something..."
                        rows="4"
                        name="message"
                    />

                    <button className="inline-block rounded-sm py-2 px-4 bg-purple-800 text-white">Submit</button>
                </form>
            </section>
        </Layout>
    )
}

export default ContactPage

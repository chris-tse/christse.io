import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function ContactPage() {
    return (
        <Layout>
            <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
            <section>
                <form className="mx-auto md:w-2/3" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <p className="mb-8 leading-loose">
                        Want to get in touch? Leave a message down below and I&apos;ll get back to you as soon as I can.
                    </p>
                    <input type="hidden" name="bot-field" />

                    <label className="block mb-2 text-xs font-bold uppercase" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        className="w-full mb-6 form-input"
                        id="name"
                        placeholder="Billy Bob"
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
                        placeholder="name@example.com"
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
                        rows="8"
                        name="message"
                    />

                    <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
                        Submit
                    </button>
                </form>
            </section>
        </Layout>
    )
}

export default ContactPage

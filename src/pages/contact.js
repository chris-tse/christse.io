import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function ContactPage() {
	return (
		<Layout>
			<SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
			<section>
				<form className="mx-auto md:w-1/2" method="POST" action="">
					<p className="mb-8 leading-loose">
						Replace this placeholder text{' '}
						<a
							className="font-bold text-gray-700 no-underline"
							href="https://github.com/tailwindcss/custom-forms"
							target="_blank"
							rel="noopener noreferrer"
						>
							Read the docs
						</a>
					</p>

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

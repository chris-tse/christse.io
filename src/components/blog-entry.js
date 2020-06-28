import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

function BlogEntry({ title, slug, date, description }) {
    return (
        <div>
            <Link to={`/blog/${slug}`} className="font-bold text-purple-800 no-underline">
                <h3 className="text-xl">{title}</h3>
            </Link>
            <p className="text-sm mb-2 text-gray-600">{date}</p>
            <p className="mb-4">{description}</p>
            <hr />
        </div>
    )
}

BlogEntry.propTypes = {
    title: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
}

export default BlogEntry

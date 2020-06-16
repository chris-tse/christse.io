import React from 'react'
import PropTypes from 'prop-types'

function PageHeading({ title, children, classes }) {
    let className = 'text-2xl font-bold mb-8'

    if (classes) {
        className += ` ${classes}`
    }
    return (
        <h1 title={title} className={className}>
            {children}
        </h1>
    )
}

PageHeading.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
    title: PropTypes.string,
}

export default PageHeading

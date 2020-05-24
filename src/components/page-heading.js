import React from 'react'
import PropTypes from 'prop-types'

function PageHeading({ children }) {
    return <h2 className="text-2xl font-bold mb-8">{children}</h2>
}

PageHeading.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageHeading

import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'

function Layout({ children }) {
    return (
        <div className="flex flex-col max-w-3xl mx-auto min-h-screen font-sans text-gray-800">
            <Header />

            <main className="flex-1 w-full px-4 py-8 mx-auto md:px-8 md:py-8">{children}</main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

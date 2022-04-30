import React from 'react'
import PropTypes from 'prop-types'

function UsesEntry({ name, items }) {
    return (
        <div className="pl-1">
            <p className="font-semibold mb-1">{name}</p>

            <ul className="list-inside list-disc pl-4 mb-3">
                {items.map((item, index) => {
                    return <li key={`${name}-${index}`} dangerouslySetInnerHTML={{ __html: item }}></li>
                })}
            </ul>
        </div>
    )
}

UsesEntry.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
}

export default UsesEntry

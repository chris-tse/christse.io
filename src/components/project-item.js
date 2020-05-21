import PropTypes from 'prop-types'
import React from 'react'

function Project({ name, description, thumbnailPath, demoUrl, sourceUrl }) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-4 pl-0">
                <img src={thumbnailPath} style={{ maxWidth: 350 }} alt="Pomodoro timer project thumbnail" />
            </div>
            <div className="row-span-2 p-4 pl-0">
                <h3 className="text-2xl mb-4">{name}</h3>
                <p className=" mb-8">{description}</p>

                <a className="inline-block rounded-sm py-2 px-4 bg-blue-700 text-white" href={demoUrl}>
                    Demo
                </a>
                <a className="inline-block rounded-sm py-2 px-4 bg-gray-200 ml-2" href={sourceUrl}>
                    Source
                </a>
            </div>
        </div>
    )
}

Project.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnailPath: PropTypes.string,
    demoUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
}

export default Project

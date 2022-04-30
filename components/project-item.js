import Image from 'next/image'

function Project({ name, description, thumbnailPath, demoUrl, sourceUrl }) {
    return (
        <div className="flex flex-col md:flex-row mb-8">
            <div className="m-8 ml-0 shadow-xl h-auto">
                <Image
                    width="350"
                    height="223"
                    className="rounded"
                    src={thumbnailPath}
                    alt={`${name} thumbnail`}
                    layout="fixed"
                />
            </div>
            <div className="row-span-2 p-8 pl-0">
                <h3 className="text-2xl mb-4">{name}</h3>
                <p className=" mb-8">{description}</p>

                <a
                    className="inline-block rounded-sm py-2 px-4 bg-purple-800 text-white hover:bg-purple-900"
                    href={demoUrl}
                >
                    Demo
                </a>
                <a className="inline-block rounded-sm py-2 px-4 bg-gray-200 ml-2 hover:bg-gray-100" href={sourceUrl}>
                    Source
                </a>
            </div>
        </div>
    )
}

export default Project

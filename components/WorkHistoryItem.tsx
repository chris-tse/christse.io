import React from 'react'

export type WorkHistory = {
    employer: string
    title: string
    dateRange: string
    description: string
}

function Dot() {
    return (
        <svg
            className="inline-block align-baseline fill-current"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="5" cy="5" r="4" />
        </svg>
    )
}

function WorkHistoryItem(item: WorkHistory) {
    const { employer, title, dateRange, description } = item

    return (
        <>
            <h3 className="mb-1 text-lg">
                <Dot />
                <span className="ml-2">
                    <span className="font-bold">{employer} / </span> {title}
                </span>
            </h3>
            <div className="text-lg border border-gray-500 border-r-0 border-t-0 border-b-0 pl-4 ml-1 mb-6">
                <p className="mb-2 uppercase tracking-wider text-sm text-gray-600 font-semibold">{dateRange}</p>
                <p>{description}</p>
            </div>
        </>
    )
}

export default WorkHistoryItem

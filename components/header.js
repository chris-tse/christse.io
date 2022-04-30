import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Header() {
    const [isExpanded, toggleExpansion] = useState(false)
    const router = useRouter()

    const routeList = [
        {
            route: `/work`,
            title: `Work`,
        },
        {
            route: `/projects`,
            title: `Projects`,
        },
        {
            route: `/uses`,
            title: `Uses`,
        },
        {
            route: `/blog`,
            title: `Blog`,
        },
        {
            route: `/contact`,
            title: `Contact`,
        },
    ]

    return (
        <header className="text-purple-900">
            <div className="flex flex-wrap items-center justify-between max-w-3xl p-4 mx-auto md:p-8">
                <Link href="/">
                    <span className="flex items-center no-underline">
                        {/* <span className="text-xl font-bold tracking-tight">{site.siteMetadata.title}</span> */}
                        <Image width="50" height="53" src="/mylogo.png" alt="" />
                    </span>
                </Link>

                <button
                    className="flex items-center px-3 py-2 border border-white rounded md:hidden"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                <nav
                    className={`${
                        isExpanded ? `block` : `hidden`
                    } md:flex md:items-center w-full md:w-auto md:shadow-none shadow-md p-4 md:mt-0 mt-2`}
                >
                    {routeList.map((link, index) => (
                        <Link
                            key={link.title}
                            href={link.route}
                        >
                            <a className={`mb-4 md:mb-0 block no-underline md:inline-block md:mt-0 md:ml-6 ${router.asPath === link.route ? 'font-bold' : ''}`}>{link.title}</a>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header

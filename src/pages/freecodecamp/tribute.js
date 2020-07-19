import React from 'react'

import Layout from '@components/layout'
import SEO from '@components/seo'
import PageHeading from '@components/page-heading'
import miyazaki from '../../images/miyazaki.jpg'

function TributePage() {
    return (
        <Layout>
            <SEO title="Tribute Page Project" />

            <div className="flex flex-col items-center md:flex-row overflow-hidden">
                <div className="mx-10">
                    <PageHeading classes="text-3xl md:text-5xl" title="Hayao Miyazaki">
                        宮崎駿
                    </PageHeading>
                </div>

                <img src={miyazaki} alt="Director Hayao Miyazaki of Studio Ghibli" />
            </div>

            <p className="text-center italic text-gray-600 mt-2 mb-4">
                Hayao Miyazaki. Japanese animator, filmmaker, screenwriter, cartoonist, author, and manga artist.
            </p>

            <hr />

            <div className="mt-4 text-center bg-gray-200 p-4">
                <h2 className="text-xl mb-2">Famous Works of Mr. Miyazaki</h2>
                <p className="mb-4">
                    Hayao Miyazaki has directed many amazing films from Studio Ghibli. Here are some of his best works:
                </p>
                <ul className="mb-16">
                    <li>
                        <span className="text-xl font-bold">もののけ姫</span> <br /> Princess Mononoke
                        <Separator />
                    </li>
                    <li>
                        <span className="text-xl font-bold">千と千尋の神隠し</span> <br /> Spirited Away
                        <Separator />
                    </li>
                    <li>
                        <span className="text-xl font-bold">風の谷のナウシカ</span> <br /> Naussica of the Valley of the
                        Wind
                        <Separator />
                    </li>
                    <li>
                        <span className="text-xl font-bold">となりのトトロ</span> <br /> My Neighbor Totoro
                        <Separator />
                    </li>
                    <li>
                        <span className="text-xl font-bold">魔女の宅急便</span> <br /> Kiki&apos;s Delivery Service
                    </li>
                </ul>
                If you would like to know more, you can visit his{' '}
                <a className="font-bold text-purple-800 no-underline" href="https://www.imdb.com/name/nm0594503/">
                    IMDb page
                </a>{' '}
                or take a look at his{' '}
                <a
                    className="font-bold text-purple-800 no-underline"
                    href="https://en.wikipedia.org/wiki/Hayao_Miyazaki"
                >
                    Wikipedia article
                </a>
                .
            </div>
        </Layout>
    )
}

function Separator() {
    return <div className="w-10 mx-auto my-2 border-b-2 border-gray-400"></div>
}

export default TributePage

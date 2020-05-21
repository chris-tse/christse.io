import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project-item'

// import image from '../images/pomodoro.jpg'

function ProjectsPage() {
    const projects = [
        {
            name: 'Pomodoro Timer',
            description: 'A simple pomodoro timer for working and taking breaks.',
            thumbnailPath: '../pomodoro.jpg',
            demoUrl: 'https://pomotomato.christse.io',
            sourceUrl: 'https://github.com/chris-tse/ReactHooksPomodoro',
        },
        {
            name: 'Random Quote Generator',
            description: 'A random quote generator built with React.',
            thumbnailPath: '../qwotez.png',
            demoUrl: 'https://qwotez.christse.io',
            sourceUrl: 'https://github.com/chris-tse/qwotez',
        },
        {
            name: 'Weather App',
            description: 'A weather app that shows the weather at your current location',
            thumbnailPath: '../weather.jpg',
            demoUrl: 'https://qwotez.christse.io',
            sourceUrl: 'https://github.com/chris-tse/qwotez',
        },
    ]

    console.log(projects)

    return (
        <Layout>
            <SEO title="Projects" />
            <h2 className="text-2xl font-bold inline-block my-4 py-3">Things I&apos;ve Made</h2>

            {projects.map(project => {
                return <Project key={project.name} {...project} />
            })}
        </Layout>
    )
}

export default ProjectsPage

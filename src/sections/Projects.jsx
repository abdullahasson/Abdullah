// react
import { useTranslation } from "react-i18next";
// cookies
import cookies from "js-cookie"
// components
import Title from "../components/Title"
import CardContainer from "../Layouts/CardContainer"
import ProjectCard from "../components/Cards/ProjectCard"
// img 
import { projectsPhoto } from "../assets"

const Projects = () => {
    const {t} = useTranslation()
    const lng = cookies.get("i18next")

    const projects = [
        {
            title: 'HooBank',
            text: 'figma => Multi-page website . Techs: React.js, tailwind css, aso, blur-hash',
            img: projectsPhoto.hoobank,
            hash: projectsPhoto.hoobankHash,
            projectDemo: 'https://abdullahasson.github.io/HooBank/',
            projectRepo: 'https://github.com/abdullahasson/HooBank',
        },
        {
            title: 'BrainWave',
            text: 'figma => Multi-page website . Techs: React.js, tailwind css, aso, blur-hash',
            img: projectsPhoto.brainwave,
            hash: projectsPhoto.brainwaveHash,
            projectDemo: 'https://abdullahasson.github.io/brainwave/',
            projectRepo: 'https://github.com/abdullahasson/brainwave',
        },
        {
            title: 'Hubqoute',
            text: 'Multi-page website for Ukrainian drone manufacturer - Airlogix. Techs: Next.js, next-intl, Typescript, styled-components, Sendgrid API, Vercel',
            img: projectsPhoto.hubqoute,
            hash: projectsPhoto.hubqouteHash,
            projectDemo: '',
            projectRepo: '',
        },
    ]

    return (
        <section className="flex flex-col items-center pt-16" id="projects">
            <Title 
                text={t('projectsTitle')} 
                seconderyText={t('projectsText')}
            />

            <div dir="ltr" className="mt-20 w-full">
                <CardContainer 
                    data={projects}
                    card={ProjectCard}
                    resourceName='data'
                />
            </div>
        </section>
    )
}

export default Projects

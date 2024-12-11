// react
import { useTranslation } from "react-i18next";
// cookies
import cookies from "js-cookie"
// components
import Title from "../components/Title"
import CardContainer from "../Layouts/CardContainer"
import ProjectCard from "../components/Cards/ProjectCard"
// content
import { projects } from "../constants/content";

const Projects = () => {
    const {t} = useTranslation()
    const lng = cookies.get("i18next")



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

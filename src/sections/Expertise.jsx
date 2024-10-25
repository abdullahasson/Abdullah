// react
import { useTranslation } from "react-i18next"
// cookies
import cookies from "js-cookie"
// components
import Title from "../components/Title"


function Expertise() {

    const { t } = useTranslation()
    const lng = cookies.get("i18next")

    const technologie = [
        {
            name: 'Core Frontend Tools',
            technologies: 'React / Javascript / HTML / CSS'
        },
        {
            name: 'State Managers',
            technologies: 'Redux / Context API'
        },
        {
            name: 'React Ecosystem Libraries',
            technologies: 'Axios / React Hook Form & Zod / React Router / Tanstack Router / Tanstack Query'
        },
        {
            name: 'CSS',
            technologies: 'Tailwind / SASS / Emotion/Styled Components / CSS Modules'
        },
        {
            name: 'UI',
            technologies: 'Material UI / shadcn/ui / Bootstrap'
        },
        {
            name: 'Animations',
            technologies: 'GSAP / AOS'
        },
        {
            name: 'Bundling Tools',
            technologies: 'Vite'
        },
        {
            name: 'Code Quality',
            technologies: 'ESLint / Prettier / BEM / Chrome Developer Tools / React Profiler / Git / Core Web Vitals'
        },
        {
            name: 'Unit Testing',
            technologies: 'Jest / React Testing Library'
        },
        {
            name: 'Performance Analysis Tool',
            technologies: 'GTmetrix | Lighthouse'
        },
        {
            name: 'Code Editor',
            technologies: 'Visual Studio Code'
        }
    ]

    return (
        <section className="flex flex-col items-center pt-16" id="expertise">
            <Title 
                text={t('expertiseTitle')} 
                seconderyText={t('expertiseText')}
            />

            <div dir='ltr' className="flex justify-between items-center pt-14 gap-12 max-[767px]:px-10">
                {["react" , "redux" , "javascript" , "html5" , "css3"].map((item , index) => (
                    <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={`${index + 1}00`}>
                        <i className={`bx bxl-${item} text-c2 text-9xl`} />
                        <p className="text-3xl">{item}</p>
                    </div>
                ))}
            </div>

            <h2 className="font-bold text-5xl pt-16 max-[560px]:text-center max-[560px]:text-3xl" data-aos='fade-up'>
                {t('expertiseListTitle')}
            </h2>

            <div dir="ltr" className="border-2 border-c3 border-solid divide-y-[0.5px] rounded-xl divide-solid flex flex-col mt-16 max-[767px]:mt-10 w-11/12 max-[767px]:w-full">
                {
                    technologie.map((item , index) => (
                        <div className="px-6 py-7 flex items-center justify-between max-[767px]:flex-col max-[767px]:py-4" key={item.name} data-aos="fade-up">
                            <h2 className="text-4xl max-[767px]:mb-2">{item.name}</h2>

                            <div className="flex text-2xl txt p-0">
                                {item.technologies}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Expertise
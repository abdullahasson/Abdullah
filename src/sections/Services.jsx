import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"


function Services() {

    const {t} = useTranslation()

    return (
        <>
            <section className="relative" id="services">
                <h2 className="text-center text-[3.6rem] mb-20" data-aos="fade-down">{t("My")} <span>{t("services")}</span></h2>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    <div className="flex-[1_1_30rem] bg-[color:var(--second-bg-color)] text-center border-[color:var(--bg-color)] transition-[0.5s] duration-[ease] pt-12 pb-16 px-8 rounded-[2rem] border-[0.2rem] border-solid hover:border-[color:var(--main-color)] hover:scale-[1.02]" data-aos="fade-up">
                        <i className="bx bx-code-alt text-[7rem] text-[color:var(--main-color)]" />
                        <h3 className="text-[2.6rem]">{t("services1")}</h3>
                        <p className="text-[1.6rem] mt-4 mb-12 mx-0">{t("services1caption")}</p>
                        <Link className="btn" to="/Abdullah/Services/">{t("requestServices")}</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
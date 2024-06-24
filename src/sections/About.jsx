import { Link } from "react-router-dom"
import cookies from "js-cookie"
import { useTranslation } from "react-i18next"
import MYPhoto from "../assets/MyPhoto.png"

function About() {

    const { t } = useTranslation()
    const lng = cookies.get("i18next")

    return (
        <section className="flex justify-center items-center  max-[768px]:flex-col gap-8 bg-[color:var(--second-bg-color)]" id="about">
            <div data-aos={lng == "ar" ? "zoom-in-left" : "zoom-in-right"}>
                <img className="w-[200vw] max-[767px]:w-auto" src={MYPhoto} alt />
            </div>

            <div className="about-content  max-[767px]:text-center" data-aos={lng == "ar" ? "fade-left" : "fade-right"}>
                <h2 className="text-7xl  leading-[1.2]">{t("aboutme")} <span>{t("me")}</span></h2>
                <h3 className="text-[2.6rem]">{t("job1")}</h3>
                <p className="text-[1.6rem] mt-8 mb-12 mx-0 max-[767px]:text-[12px]">{t("about")}</p>
                <Link className="btn" to={"/Abdullah/About/"}>{t("more")}</Link>
            </div>
        </section>
    )
}

export default About
// import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ProfilePhoto } from "../assets"
import { BlurhashCanvas } from "react-blurhash"

function Profile() {

    const {t} = useTranslation()

    return (
        <section className="relative bg-[color:var(--second-bg-color)]" id="portfolio">
            <h2 className="heading text-[3.6rem] text-center mb-16" data-aos="fade-down">{t("Latest")} <span>{t("Project")}</span></h2>
            <div className="grid grid-cols-[repeat(3,1fr)] items-center gap-10 max-[768px]:grid-cols-[repeat(1,1fr)]">
                <div className="relative min-h-[290px] shadow-[0_0_1rem_var(--bg-color)] overflow-hidden flex rounded-[2rem]" data-aos="fade-down">
                    <img className="w-full transition-[0.5s] duration-[ease] z-[2]" src={ProfilePhoto.hoobank} alt />
                    <BlurhashCanvas
                        hash={ProfilePhoto.hoobankHash}
                        style={{
                            position: "absolute",
                            left: '0',
                            top: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}
                    />
                </div>

                <div className="relative min-h-[290px] shadow-[0_0_1rem_var(--bg-color)] overflow-hidden flex rounded-[2rem]" data-aos="fade-down">
                    <img className="w-full transition-[0.5s] duration-[ease] z-[2]" src={ProfilePhoto.brainwave} alt />
                    <BlurhashCanvas
                        hash={ProfilePhoto.hoobankHash}
                        style={{
                            position: "absolute",
                            left: '0',
                            top: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}
                    />
                </div>

                <div className="relative min-h-[290px] shadow-[0_0_1rem_var(--bg-color)] overflow-hidden flex rounded-[2rem]" data-aos="fade-down">
                    <img className="w-full transition-[0.5s] duration-[ease] z-[2]" src={ProfilePhoto.todo} alt />
                    <BlurhashCanvas
                        hash={ProfilePhoto.hoobankHash}
                        style={{
                            position: "absolute",
                            left: '0',
                            top: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}
                    />
                </div>
            </div>

            <div className="absolute flex justify-center items-center -translate-x-2/4 left-2/4 bottom-[55px]">
                <Link className="btn" to="/Abdullah/Projects/">{t("more")}</Link>
            </div>
        </section>
    )
}

export default Profile
// import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ProfilePhoto } from "../assets"
import { Navigation , A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectShow from "../components/ProjectsShow";

function Profile() {

    const {t} = useTranslation()

    return (
        <section className="relative bg-[color:var(--second-bg-color)]" id="portfolio">
            <h2 className="heading text-[3.6rem] text-center mb-16" data-aos="fade-down">{t("Latest")} <span>{t("Project")}</span></h2>
            {/* <div className="grid grid-cols-[repeat(3,1fr)] items-center gap-10 max-[768px]:grid-cols-[repeat(1,1fr)]">
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
                    <img className="w-full transition-[0.5s] duration-[ease] z-[2]" src={ProfilePhoto.mount} alt />
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
            </div> */}

            <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{
                        width: "100%",
                        height: "350px",
                    }}
                >
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.hoobank} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.brainwave} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.automato_home} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.ISE} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.todo} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.signIn} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectShow src={ProfilePhoto.brainwave2} hash={ProfilePhoto.hoobankHash} />
                    </SwiperSlide>
                    ...
            </Swiper>

            <div className="absolute flex justify-center items-center -translate-x-2/4 left-2/4 bottom-[55px]">
                <Link className="btn" to="/Abdullah/Projects/">{t("more")}</Link>
            </div>

        </section>
    )
}

export default Profile
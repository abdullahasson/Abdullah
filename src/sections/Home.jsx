import cookies from "js-cookie"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from "react-i18next";
import MYPhoto from "../assets/MyPhoto.png"

function Home() {

    
    const {t} = useTranslation()
    const lng = cookies.get("i18next")

    return (
        <section className="flex justify-between items-center max-[768px]:flex-col" id="home">
            <div className="max-[768px]:text-center"  data-aos={lng == "ar" ? "fade-left" : "fade-right"} data-aos-delay="300">
                <h3 className="text-[3.2rem] font-bold  max-[500px]:text-[2rem]">{t("welcome")}</h3>
                <h1 className="text-[5.6rem] font-bold leading-[1.3]  max-[500px]:text-[2.5rem]">{t("name")}</h1>
                <h3 className="mb-8 text-[3.2rem] font-bold  max-[500px]:text-[2rem]">{t("And")}{" "}
                    {
                        lng == "ar" ? 
                            (                            
                                <ul>
                                    <li><span>- {t("job1")}</span></li>
                                    <li><span>- {t("job2")}</span></li>
                                </ul> 
                            )
                            : 
                            (
                                <TypeAnimation
                                sequence={[
                                    `React js Developer`,
                                    2000, 
                                    `Freelancer`,
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                                className="text-[color:var(--main-color)]"
                            />
                            )
                    }


                </h3>
                {/* {(new Date().getFullYear()) - 2006} */}
                <p className="text-[1.6rem] w-[86%]  max-[500px]:w-full  max-[500px]:text-[1rem]">{t("where and age")}</p>
                <div className="social-media">
                    <a className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-[color:var(--main-color)] text-[2rem] text-[color:var(--main-color)] ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-[color:var(--main-color)] hover:text-[color:var(--bg-color)] hover:shadow-[0_0_1rem_var(--main-color)]" href="https://www.linkedin.com/in/abdullah-hasson-b5a998268/" target="_blank"><i className="bx bxl-linkedin" /></a>
                    <a className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-[color:var(--main-color)] text-[2rem] text-[color:var(--main-color)] ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-[color:var(--main-color)] hover:text-[color:var(--bg-color)] hover:shadow-[0_0_1rem_var(--main-color)]" href="https://github.com/abdullahasson" target="_blank"><i className='bx bxl-github' ></i></a>
                </div>
                <a
                    href="#"
                    className="bg-[var(--main-color)] inline-block shadow-[0_0_1rem_var(--main-color)] text-[1.6rem] text-[color:var(--second-bg-color)] tracking-[0.1rem] font-semibold px-[2.8rem] py-4 rounded-[4rem] hover:shadow-none">
                    {t("CV")}
                </a>

            </div>

            <div className="relative">
                <img className="w-[30vw] relative image-animation max-[400px]:w-[350px]" src={MYPhoto} alt data-aos={lng == "ar" ? "fade-right" : "fade-left"} data-aos-delay="300" />
            </div>
        </section>
    )
}

export default Home
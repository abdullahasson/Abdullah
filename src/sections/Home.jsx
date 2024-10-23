// react
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from "react-i18next";
import { BlurhashCanvas } from "react-blurhash"
// cookies
import cookies from "js-cookie"
// images
import { HomePhoto } from "../assets";


function Home() {
    const {t} = useTranslation()
    const lng = cookies.get("i18next")

    return (
        <section className="flex justify-between items-center max-[768px]:flex-col relative" id="home">
            <div className="bg absolute top-0 left-0 -z-10 w-full h-screen opacity-[0.2] pointer-events-none">
                <img src={HomePhoto.bg} alt="bg" className="w-full"/>
                <BlurhashCanvas
                    hash={HomePhoto.bgHash}
                    className="absolute left-0 top-0 w-full h-full -z-10"
                />
            </div>

            <div className="max-[768px]:text-center"  data-aos={lng == "ar" ? "fade-left" : "fade-right"} data-aos-delay="300">

                <h3 className="text-[3.2rem] font-bold  max-[500px]:text-[2rem]">{t("welcome")}</h3>

                <h1 className="text-[5.6rem] font-bold leading-[1.3]  max-[500px]:text-[2.5rem]">{t("name")}</h1>

                <h3 className="mb-8 text-[3.2rem] font-bold  max-[500px]:text-[2rem]">{t("And")}{" "}
                    <TypeAnimation
                        sequence={[
                            'Front End Developer',
                            2000, 
                            'Freelancer',
                            2000,
                            'React Js Developer',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h3>

                <p className="txt text-start p-0 w-[57%] text-4xl leading-snug">
                    {t("where and age")}
                </p>

                <div>
                    <a className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://wa.me/963932680992"><i className="bx bxl-whatsapp" /></a>
                    <a className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://t.me/abdullahasson"><i className="bx bxl-telegram" /></a>
                    <a className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://github.com/abdullahasson"><i className='bx bxl-github' ></i></a>
                </div>

            </div>

            <div className="relative w-[210px] h-[210px] rounded-[16px] border-[4px] border-c2 border-solid">
                <BlurhashCanvas
                    hash={HomePhoto.myphotoHash}
                    className="absolute left-0 top-0 w-full h-full rounded-[16px] -z-10"
                />
                <span className={`absolute w-full h-full -z-20 rounded-[16px] ${lng=='ar' ? '-right-14 -top-14': '-left-14 -bottom-14'} border-[4px] border-c3 border-solid`}></span>
                <img 
                    className="w-full h-full rounded-[16px] z-10" 
                    src={HomePhoto.myphoto} 
                    alt='my-photo' 
                    data-aos='zoom-in'
                    data-aos-delay="300" 
                />
            </div>

            <a href="#expertise" className="absolute left-1/2 bottom-7 -translate-x-1/2 text-[4rem] text-c2">
                <i className='bx bx-chevrons-down'></i>
            </a>
        </section>
    )
}

export default Home
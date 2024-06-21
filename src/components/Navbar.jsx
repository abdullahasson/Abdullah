import { useEffect } from "react";
import cookies from "js-cookie"
import { useTranslation } from "react-i18next";
import ChangeLng from "./ChangeLng";

export const Navbar = () => {
  const {t} = useTranslation()
  const lng = cookies.get("i18next")

  // Active link
  useEffect(() => {
    let sections = document.querySelectorAll(`section`);
    let navlink = document.querySelectorAll(`header nav a`);

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if (top >= offset && top < offset + height) {
          navlink.forEach(links => {
            links.classList.remove(`active`);
            document.querySelector(`header nav a[href *= ${id}]`).classList.add(`active`)
          })
        }
      });

      let header = document.querySelector(`header`)

      header.classList.toggle(`sticky`, window.onscroll > 100);
    }
  })

    return (
        <header className="fixed w-full bg-[#33333300] backdrop-blur-[22px] flex justify-center items-center z-[999] -translate-x-2/4 p-5 left-2/4 top-0">
            <i className="bx bx-menu text-[3.6rem] text-[color:var(--text-color)] cursor-pointer opacity-0 hidden" id="menu-icon" />
            <nav className="navbar flex justify-center gap-[60px]">
                <a data-aos="fade-down" data-aos-delay={lng == "ar" ? "100" : "500"} href="#home" className=" text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5 hover:bg-[#686c9e] hover:rounded-[50px]">{t("nav1")}</a>
                <a data-aos="fade-down" data-aos-delay={lng == "ar" ? "200" : "400"} href="#about" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5 hover:bg-[#686c9e] hover:rounded-[50px]">{t("nav2")}</a>
                <a data-aos="fade-down" data-aos-delay={lng == "ar" ? "300" : "300"} href="#services" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5 hover:bg-[#686c9e] hover:rounded-[50px]">{t("nav3")}</a>
                <a data-aos="fade-down" data-aos-delay={lng == "ar" ? "400" : "200"} href="#portfolio" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5 hover:bg-[#686c9e] hover:rounded-[50px]">{t("nav4")}</a>
                <a data-aos="fade-down" data-aos-delay={lng == "ar" ? "400" : "100"} href="#contact" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5 hover:bg-[#686c9e] hover:rounded-[50px]">{t("nav5")}</a>
            </nav>

            <ChangeLng />
        </header>
    )
}

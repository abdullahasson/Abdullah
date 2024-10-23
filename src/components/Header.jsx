// react
import { useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie"
// components
import ChangeLng from "./ChangeLng";
import Menu from "../assets/SVG/Menu_icon";
// svg 
import Logo from "../assets/SVG/Logo";

const Header = () => {
  const {t} = useTranslation()
  const lng = cookies.get("i18next")

  const [openNav , setopenNav] = useState(false)

  const mobileStyleNav =  
  `
      max-[768px]:w-full 
      max-[768px]:p-[20px] 
      max-[768px]:overflow-hidden 
      max-[768px]:absolute 
      max-[768px]:top-full 
      max-[768px]:left-0 
      max-[768px]:flex-col 
      max-[768px]:bg-[#323649] 
      max-[768px]:backdrop-blur-[22px]
    `

    return (
        <header className="max-[768px]:p-8 max-[768px]:justify-between fixed w-full py-6 px-64 bg-[#050505a9] backdrop-blur-[22px] flex justify-between items-center z-[999] -translate-x-2/4 p-5 left-2/4 top-0">
            <a href="#home" className="logo">
              <Logo />
            </a>

            <div 
              className="max-[768px]:flex min-[769px]:hidden text-[3.6rem] text-[color:var(--text-color)] cursor-pointer" 
              id="menu-icon"
              onClick={() => {setopenNav(!openNav)}}
            >
              <Menu />
            </div>

            <nav 
              className={`navbar flex justify-center gap-[60px] max-[768px]:hidden ${openNav && mobileStyleNav}`} 
              style={{display : openNav && window.innerWidth <= 768 ? "flex" : null }}
            >
              {
                ['#home' , '#expertise' , '#projects' , '#contact'].map((link , index) => (
                  <a 
                    key={link}
                    onClick={() => {setopenNav(false)}}
                    data-aos="fade-down" 
                    data-aos-delay={lng == "ar" ? `${index + 1}00` : `${5 - index}00`} 
                    href={link} 
                    className=" text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5 hover:rounded-[50px]">{t(`nav${index + 1}`)}
                  </a>
                ))
              }
            </nav>

            <ChangeLng />
        </header>
    )
}


export default Header
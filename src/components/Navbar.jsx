import { useState } from "react"

export const Navbar = () => {

    const [bgColor, setBgColor] = useState(false)

    function newBg() {
        setTimeout(() => {
            setBgColor(!bgColor)
        }, 300);
    }

    return (
        <header className="fixed w-6/12 backdrop-blur-[22px] flex justify-center items-center z-[999] -translate-x-2/4 mt-[18px] p-4 rounded-[50px] left-2/4 top-0" style={{ backgroundColor: bgColor ? "#444f7c82" : "transparent", transition: "0.5s" }}>
            <i className="bx bx-menu text-[3.6rem] text-[color:var(--text-color)] cursor-pointer opacity-0 hidden" id="menu-icon" />
            <nav className="navbar flex justify-center gap-[60px]">
                <a onClick={newBg} data-aos="fade-down" data-aos-delay="500" href="#home" className="active text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5     hover:bg-[#686c9e] hover:rounded-[50px]">Home</a>
                <a onClick={newBg} data-aos="fade-down" data-aos-delay="400" href="#about" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5     hover:bg-[#686c9e] hover:rounded-[50px]">About</a>
                <a onClick={newBg} data-aos="fade-down" data-aos-delay="300" href="#services" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5     hover:bg-[#686c9e] hover:rounded-[50px]">Services</a>
                <a onClick={newBg} data-aos="fade-down" data-aos-delay="200" href="#portfolio" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5     hover:bg-[#686c9e] hover:rounded-[50px]">Portfolio</a>
                <a onClick={newBg} data-aos="fade-down" data-aos-delay="100" href="#contact" className="text-[1.7rem] text-[color:var(--text-color)] text-center transition-[1s] px-[9px] py-1.5     hover:bg-[#686c9e] hover:rounded-[50px]">Contact</a>
            </nav>
        </header>
    )
}

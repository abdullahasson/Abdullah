export const Navbar = () => {
    return (
        <header className="header">
            <i className="bx bx-menu" id="menu-icon" />
            <nav className="navbar">
                <a data-aos="fade-down" data-aos-delay="500" href="#home" className="active">Home</a>
                <a data-aos="fade-down" data-aos-delay="400" href="#about" className>About</a>
                <a data-aos="fade-down" data-aos-delay="300" href="#services" className>Services</a>
                <a data-aos="fade-down" data-aos-delay="200" href="#portfolio" className>Portfolio</a>
                <a data-aos="fade-down" data-aos-delay="100" href="#contact" className>Contact</a>
            </nav>
        </header>
    )
}

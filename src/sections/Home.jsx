// import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
// import ContactInfo from "../components/ContactInfo"
import MYPhoto from "../assets/MyPhoto.png"

function Home() {

    // const [open, setOpen] = useState(false)

    return (
        <section className="home" id="home">

            {/* {open && <ContactInfo setOpen={setOpen} />} */}

            <div className="home-content" data-aos="fade-right" data-aos-delay="300">
                <h3>Hello, It`s Me</h3>
                <h1>Abdullah Hasson</h1>
                <h3>And I`m a{" "}

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'React js Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Freelancer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h3>
                <p>from syria , I am {(new Date().getFullYear()) - 2006} years old </p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/abdullah-hasson-b5a998268/" target="_blank"><i className="bx bxl-linkedin" /></a>
                    <a href="https://github.com/abdullahasson" target="_blank"><i className='bx bxl-github' ></i></a>
                    {/* <a onClick={() => {
                        setOpen(!open)
                    }}><i className='bx bxs-phone'></i></a> */}
                </div>
                <a href="#" className="btn">Download CV</a>
            </div>
            <div className="home-img">
                <img className="" src={MYPhoto} alt data-aos="fade-left" data-aos-delay="1000" />
            </div>
        </section>
    )
}

export default Home
import { Link } from "react-router-dom"


function Services() {
    return (
        <>
            <section className="relative" id="services">
                <h2 className="text-center text-[3.6rem] mb-20" data-aos="fade-down">My <span>services</span></h2>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    <div className="flex-[1_1_30rem] bg-[color:var(--second-bg-color)] text-center border-[color:var(--bg-color)] transition-[0.5s] duration-[ease] pt-12 pb-16 px-8 rounded-[2rem] border-[0.2rem] border-solid hover:border-[color:var(--main-color)] hover:scale-[1.02]" data-aos="fade-up">
                        <i className="bx bx-code-alt text-[7rem] text-[color:var(--main-color)]" />
                        <h3 className="text-[2.6rem]">Web Development</h3>
                        <p className="text-[1.6rem] mt-4 mb-12 mx-0">
                            Are you looking for distinct development solutions that exceed your expectations? Look no further! I am a skilled and experienced developer here to bring your ideas to life. Whether you need web development, mobile app development, or custom software solutions, I have you covered.

                            I pride myself on my dedication to providing innovative, high-quality development services that not only meet your needs, but exceed them. With my personal approach and attention to detail, I ensure each project is completed to perfection.

                            Donّt settle for normal. Choose my freelance services for exceptional development solutions that will impress your clients and keep them coming back for more. Let me help you take your business to the next level today!
                        </p>
                        <Link className="btn" to="/Abdullah/Services/">Request the service</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
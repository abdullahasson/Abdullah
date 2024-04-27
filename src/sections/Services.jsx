import { Link } from "react-router-dom"


function Services() {
    return (
        <>
            <section className="services" id="services">
                <h2 className="heading" data-aos="fade-down">My <span>services</span></h2>
                <div className="services-container">
                    <div className="services-box" data-aos="fade-up">
                        <i className="bx bx-code-alt" />
                        <h3>Web Development</h3>
                        <p>
                            Are you looking for distinct development solutions that exceed your expectations? Look no further! I am a skilled and experienced developer here to bring your ideas to life. Whether you need web development, mobile app development, or custom software solutions, I have you covered.

                            I pride myself on my dedication to providing innovative, high-quality development services that not only meet your needs, but exceed them. With my personal approach and attention to detail, I ensure each project is completed to perfection.

                            Donّt settle for normal. Choose my freelance services for exceptional development solutions that will impress your clients and keep them coming back for more. Let me help you take your business to the next level today!
                        </p>
                        <Link className="btn" to="/Abdullah/Services-request/">Request the service</Link>
                    </div>
                    {/* <div className="services-box" data-aos="fade-up" data-aos-delay="300">
                        <i className="bx bxs-paint" />
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio optio quo nisi, repellat modi vitae in nulla, harum illo, laudantium incidunt cum dicta dolorem quidem inventore ipsam maiores quam.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                    <div className="services-box" data-aos="fade-up" data-aos-delay="600">
                        <i className="bx bx-bar-chart-alt" />
                        <h3>Data automation</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio optio quo nisi, repellat modi vitae in nulla, harum illo, laudantium incidunt cum dicta dolorem quidem inventore ipsam maiores quam.</p>
                        <a href="#" className="btn">Read More</a>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Services
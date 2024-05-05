import { Link } from "react-router-dom"
import MYPhoto from "../assets/MyPhoto.png"

function About() {
    return (
        <section className="about" id="about">
            <div data-aos="zoom-in-right" className="about-img">
                <img src={MYPhoto} alt />
            </div>
            <div className="about-content">
                <h2 data-aos="fade-right" className="heading">About <span>Me</span></h2>
                <h3 data-aos="fade-right">Front End Developer</h3>
                <p data-aos="fade-right">An extremely enthusiastic, ultimately dedicated, failure-motivated, and constantly learning web designer and tech-head. I love creating tech that make a difference with beautiful designs. In order to achieve that, I look into every detail that would hook the users to engage and get thrilled about their experience with the products I build. What I love the most and always get excited about is how I get to turn an empty canvas of open, creative space of ideas into something that serves a meaningful purpose using design, web (or any) technologies, and critical thinking. Additionally, I have a very nerdy habit of constantly trying to bring and incorporate things into the web to make them interactive and easy to use. Simply, I love creating; technology and design are how I do it.</p>
                <Link className="btn" to={"/Abdullah/About/"}>More</Link>
            </div>
        </section>
    )
}

export default About
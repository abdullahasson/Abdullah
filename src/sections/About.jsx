import { Link } from "react-router-dom"
import MYPhoto from "../assets/MyPhoto.png"

function About() {
    return (
        <section className="flex justify-center items-center gap-8 bg-[color:var(--second-bg-color)]" id="about">
            <div data-aos="zoom-in-right">
                <img className="w-[200vw]" src={MYPhoto} alt />
            </div>

            <div className="about-content" data-aos="fade-right">
                <h2 className="text-7xl text-left leading-[1.2]">About <span>Me</span></h2>
                <h3 className="text-[2.6rem]">React js Developer</h3>
                <p className="text-[1.6rem] mt-8 mb-12 mx-0">An extremely enthusiastic, ultimately dedicated, failure-motivated, and constantly learning web designer and tech-head. I love creating tech that make a difference with beautiful designs. In order to achieve that, I look into every detail that would hook the users to engage and get thrilled about their experience with the products I build. What I love the most and always get excited about is how I get to turn an empty canvas of open, creative space of ideas into something that serves a meaningful purpose using design, web (or any) technologies, and critical thinking. Additionally, I have a very nerdy habit of constantly trying to bring and incorporate things into the web to make them interactive and easy to use. Simply, I love creating; technology and design are how I do it.</p>
                <Link className="btn" to={"/Abdullah/About/"}>More</Link>
            </div>
        </section>
    )
}

export default About
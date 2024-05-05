// import { useState } from "react"
import { BlurhashCanvas } from "react-blurhash"
import { Link } from "react-router-dom"
import { ProfilePhoto } from "../assets"


function Profile() {

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading" data-aos="fade-down">Latest <span>Project</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box" data-aos="fade-down">
                    <img src={ProfilePhoto.hoobank} alt />
                    <BlurhashCanvas
                        hash={ProfilePhoto.hoobankHash}
                        style={{
                            position: "absolute",
                            left: '0',
                            top: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}
                    />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quibusdam ipsa</p>
                        <a href="#"><i className="bx bx-link-external" /></a>
                    </div>
                </div>
                <div className="portfolio-box" data-aos="fade-down">
                    <img src={ProfilePhoto.brainwave} alt />
                    <BlurhashCanvas
                        hash={ProfilePhoto.hoobankHash}
                        style={{
                            position: "absolute",
                            left: '0',
                            top: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}
                    />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quibusdam ipsa</p>
                        <a href="#"><i className="bx bx-link-external" /></a>
                    </div>
                </div>
                <div className="portfolio-box" data-aos="fade-down">
                    <img src={ProfilePhoto.hoobank} alt />
                    <BlurhashCanvas
                        hash={ProfilePhoto.hoobankHash}
                        style={{
                            position: "absolute",
                            left: '0',
                            top: "0",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}
                    />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quibusdam ipsa</p>
                        <a href="#"><i className="bx bx-link-external" /></a>
                    </div>
                </div>
            </div>

            <div className="more">
                <Link className="btn" to="/Abdullah/Projects/">More</Link>
            </div>

        </section>
    )
}

export default Profile
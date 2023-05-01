import React from "react";
import "./about.css"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import Me from "../../assets/sheriff2.jpeg"




const About = () => {
    return (<section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={Me} alt="about_me" />

                </div>

            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>Experience</h5>
                        <small>3+ Years </small>
                    </article>

                    <article className="about_card">
                        <FiUsers className="about_icon" />
                        <h5>Clients</h5>
                        <small>5+</small>
                    </article>

                    <article className="about_card">
                        <VscFolderLibrary className="about_icon" />
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>

                </div>

                <p>I am a passionate developer who loves teamwork and is always ready to collaborate
                    and share ideas with others. I help small and large-scale businesses gain visibility and connectivity through developing
                    professional websites that communicate their brand's expertise.</p>

                <a href="#contact" class="btn btn-primary">Let's Talk</a>
            </div>
        </div>

    </section>)
}


export default About;
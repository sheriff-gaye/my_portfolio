import React from "react";
import "./services.css"
import { BiCheck } from "react-icons/bi"


const Services = () => {
    return (<section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
            <article className="service">
                <div className="service_head">
                    <h3>Software Development</h3>

                </div>
                <ul className="service_list">

                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Fullstack Web Apps</p>

                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Project Collaboration</p>

                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>App Feature</p>

                    </li>

                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>App Optimization</p>

                    </li>
                </ul>

            </article>

            <article className="service">
                <div className="service_head">
                    <h3>Web Development</h3>

                </div>
                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Web development & maintenance</p>

                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Web Design</p>

                    </li>

                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Web Hosting</p>

                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Web Optimization</p>

                    </li>

                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Web Content & SEO</p>

                    </li>
                </ul>

            </article>


            <article className="service">
                <div className="service_head">
                    <h3>Digital Marketing</h3>

                </div>
                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Flyer and Banner Design</p>

                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Video Editing</p>

                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Content Creation</p>

                    </li>


                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>SEO</p>

                    </li>

                </ul>

            </article>


        </div>

    </section>);
}

export default Services;
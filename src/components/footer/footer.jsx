import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io"
import {FaGithub} from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai";


const Footer=()=>{
    return (<footer id="footer">
        <a href="#footer" className="footer_logo">SHERIFF GAYE</a>
        
        
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>

        <div className="footer_social">
            <a href="https://instagram.com/gaye.tech"><FiInstagram/></a>
            <a href="https://www.twitter.com/gaye_sheriff"><IoLogoTwitter/></a>
            <a href="https://www.linkedin.com/in/sheriff-gaye-283772211/"><AiFillLinkedin/></a>
            <a href="https://github.com/sheriff-gaye"><FaGithub /></a>
         
            
        </div>

        <div className="footer_copyright">
            <small>&copy; Sheriff Gaye 2023</small>
            
        </div>

        123
        
    </footer>);
}

export default Footer;
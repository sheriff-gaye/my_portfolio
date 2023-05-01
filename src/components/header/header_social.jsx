import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import { FiInstagram } from "react-icons/fi";




const Social=()=>{
    return(
        <div className="header_social">
            <a href="https://www.linkedin.com/in/sheriff-gaye-283772211/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/sheriff-gaye" target="_blank"><FaGithub/></a>
            <a href="https://instagram.com/gaye.tech" target="_blank"><FiInstagram/></a>
        </div>

    );
}

export default Social;
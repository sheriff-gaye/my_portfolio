import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";




const Social=()=>{
    return(
        <div className="header_social">
            <a href="https://www.linkedin.com/in/sheriff-gaye-283772211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/sheriff-gaye" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://instagram.com/gaye.tech" target="_blank" rel="noreferrer"><FiInstagram/></a>
            <a href="https://www.twitter.com/gaye_sheriff" target="_blank" rel="noreferrer"><BsTwitterX/></a>
        </div>

    );
}

export default Social;
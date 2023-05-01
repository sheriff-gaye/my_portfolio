import React from "react";
import "./header.css"
import CTA from "./cta";
import Social from "./header_social";
import Me from "../../assets/sheriff.png";



const Header=()=>{
    return (<header>
        
        <div className="container header_container">
            <h5>Hello I  am </h5>
            <h1>Sheriff Gaye</h1>
            <h5 className="text-light">Software Developer</h5>
            <CTA/>
            <Social/>
        
            
            <br/>

            <div className="me">
                <img src={Me} alt="profile_picture"/>
            </div>

            <a href="#contact" className="scroll_down">Scroll Down </a>
           
          
        </div>
    </header>);
}

export default Header;
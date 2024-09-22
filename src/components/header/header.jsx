import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import CTA from "./cta";
import Me from "../../assets/sheriff.png";
import BackgroundVideo from "./videoplayer";
import AllFavTechs from "./AllFavTechs";

const Header = () => {
  return (
    <header>
      <BackgroundVideo />
      <div className="container header_container">
        <div className="header_left">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Hello, I am
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Sheriff  <span>&#123;Gaye&#125;</span>
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              background: "var(--color-bg-variant)",
              color: "var(--color-primary)",
              padding: "10px 10px",
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block", 
              border: "2px solid var(--color-primary)", 
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)" 
            }}
          >
            Software Engineer, ML Engineer, Graphic Designer
          </motion.h5>
          <motion.p>
            I am a Software Engineer, Machine Learning Engineer, and Artificial
            Intelligence Engineer. I specialize in crafting dynamic applications
            that empower small and medium businesses to enhance visibility and
            connectivity, effectively communicating their brand's expertise.
          </motion.p>
          <CTA />
          <AllFavTechs />
        </div>

        <div className="header_right">
          <div className="me">
            <img src={Me} alt="profile_picture" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

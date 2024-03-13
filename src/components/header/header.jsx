import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import CTA from "./cta";
import Social from "./header_social";
import Me from "../../assets/sheriff.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="container header_container">
        <motion.h5
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Hello I am
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Sheriff Gaye
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-light"
        >
          Software Craftsman
        </motion.h5>
        <CTA />
        <Social />
        <br />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="me"
        >
          <img src={Me} alt="profile_picture" />
        </motion.div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          href="#contact"
          className="scroll_down"
        >
          Scroll Down
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;

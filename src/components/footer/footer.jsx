import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const new_year = new Date();

  const new_num = new_year.getFullYear();

  return (
    <footer id="footer">
      <a href="#footer" className="footer_logo">
        SHERIFF GAYE
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <a href="/leetcode">LeetCode</a>
        </li>
      </ul>

      <div className="footer_social">
        <a href="https://instagram.com/gaye.tech">
          <FiInstagram />
        </a>
        <a href="https://www.twitter.com/gaye_sheriff">
          <BsTwitterX />
        </a>
        <a href="https://www.linkedin.com/in/sheriff-gaye-283772211/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/sheriff-gaye">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/@cleancode_hub">
          <BsYoutube />
        </a>

       
      </div>

      <div className="footer_copyright">
        <small>&copy;Gaye Tech {new_num} all rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

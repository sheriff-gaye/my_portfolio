import React from "react";
import "./project.css";
import { BiArrowBack } from "react-icons/bi";
import Portfolio from "../portfolio/portfolio";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="header">
          <a href="/">
            <BiArrowBack />
          </a>
          <h2>My Projects</h2>
        </div>
        <p>
          In my pursuit of learning to code and entering the tech industry, I've
          encountered numerous challenges and embarked on various projects.
          While they may not represent the pinnacle of perfection, each holds
          significance in my journey. These endeavors have been instrumental in
          honing my skills, often demanding days and hours of dedication to
          bring them to fruition.
        </p>
        <br />
        <p>
          They stand as testaments to my perseverance and growth, showcasing the
          progress I've made along the way. Despite the obstacles faced, I'm
          proud of these projects, as they embody the determination and passion
          I've poured into mastering the craft of coding. They serve as
          reminders of the journey I've undertaken, continually pushing myself
          to excel and evolve in this dynamic field.
        </p>
      </div>

      <Portfolio />
    </section>
  );
};

export default Projects;

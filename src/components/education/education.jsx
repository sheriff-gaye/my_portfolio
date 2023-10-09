/* eslint-disable array-callback-return */
import React from "react";
import "./education.css";
import { educationData } from "./data";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";

const education = () => {
  return (
    <section id="education">
      <h5>My journey</h5>
      <h2>Qualification</h2>

      <div className="education_container container">
        <article className="education">
          <h2>
            Education{" "}
            <span>
              <FaGraduationCap />
            </span>
          </h2>
          {educationData.map((item) => {
            if (item.category === "education") {
              return (
                <>
                  <li key={item.id} className="line">
                    <BsPatchCheckFill  className="top"/>

                    <time className="date">{item.date}</time>

                    <h3 className="title">{item.title}</h3>
                    <p className="place">{item.place}</p>
                    <p className="desc">{item.desc}</p>
                  </li>
                </>
              );
            }
          })}
        </article>

        <article className="education">
          <h2>
            Experience{" "}
            <span>
              <BsFillBriefcaseFill />
            </span>
          </h2>
          {educationData.map((item) => {
            if (item.category === "work") {
              return (
                <>
                  <li key={item.id} className="line">
                    <BsPatchCheckFill className="top" />

                    <time className="date">{item.date}</time>

                    <h3 className="title">{item.title}</h3>
                    <p className="place">{item.place}</p>
                    <p className="desc">{item.desc}</p>
                  </li>
                </>
              );
            }
          })}
        </article>
      </div>
    </section>
  );
};

export default education;

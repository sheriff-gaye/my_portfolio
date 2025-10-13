import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import HomeBlog from "./components/blog/HomeBlog";
import Banner from "./banner/banner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <HomeBlog />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;

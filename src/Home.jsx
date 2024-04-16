
import React from 'react'
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";

const Home = () => {
  return (
    <div>

<Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Education />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
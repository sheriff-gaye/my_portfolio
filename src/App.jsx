import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

import Projects from "./components/projects/projects";
import Home from "./Home";

const App = () => {
  return (
    <>
     
      <SpeedInsights />
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
  
    </>
  );
};

export default App;

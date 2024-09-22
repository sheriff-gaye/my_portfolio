import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
import Home from "./Home";
import Blog from "./components/blog/blog";
import BlogDetails from "./components/blog/blog-details";
import LeetCode from "./leetcode/leetcode";

const App = () => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/leetcode" element={<LeetCode />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

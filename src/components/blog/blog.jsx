import React from "react";
import "./blog.css";
import { BiArrowBack } from "react-icons/bi";
import { BlogCard } from "./card";
import blogData from "./data";

const Blog = () => {
  return (
    <section>
      <div className="container blog_container">
        <div className="back">
          <a href="/">
            <BiArrowBack />
          </a>
          <h3>Blog Page</h3>
        </div>

        <small className="badge">{blogData.length} Posts Published</small>
        <p>
          These are my own words, shaped by my own experiences. If you find
          something confusing, wrong, or misleading, please let me know. If you
          find anything helpful, please consider sharing it with your friends.
        </p>

        <BlogCard blogs={blogData} />
      </div>
    </section>
  );
};

export default Blog;
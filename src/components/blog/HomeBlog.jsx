import React from "react";
import { BlogCard } from "./card";
import { ArrowRight } from "lucide-react";
import blogData from "./data";

const HomeBlog = () => {
  const recentBlogs = blogData.slice(-3).reverse();

  return (
    <section id="blog" className="home-blog-section">
      <div className="container">
        <div className="section-header">
          <h5 className="section-subtitle">My Blog</h5>
          <h2 className="section-title">
            My <span className="highlight">&#123;Blog&#125;</span>
          </h2>
        </div>

        <div className="blog_container">
          <BlogCard blogs={recentBlogs} />
          
          <div className="blog-cta">
            <a href="/blog" className="btn btn-primary lg">
              See More Articles
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;


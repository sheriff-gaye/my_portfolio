import React from "react";
import { BlogCard } from "./card";
import { ArrowRight } from "lucide-react";
import blogData from "./data"; // Import your blog data

const HomeBlog = () => {
  // Get the last three blogs
  const recentBlogs = blogData.slice(-3).reverse(); // Get the last three and reverse to show most recent first

  return (
    <section id="blog">
      <h5>My Blog</h5>
      <h2>
        My <span>&#123;Blog&#125;</span>
      </h2>

      <div className="blog_container container">
        <BlogCard blogs={recentBlogs} /> {/* Pass recent blogs to BlogCard */}

        <div>
          <a href="/blog" className="btn btn-primary lg">
            See More of Blogs
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
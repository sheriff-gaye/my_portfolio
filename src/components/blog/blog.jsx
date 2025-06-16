import React, { useState } from "react";
import "./blog.css";
import { ArrowLeft, Search } from "lucide-react";
import { BlogCard } from "./card";
import blogData from "./data";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredBlogs(blogData);
    } else {
      const filtered = blogData.filter(blog =>
        blog.title.toLowerCase().includes(term.toLowerCase()) ||
        blog.content.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-header">
          <div className="back-navigation">
            <a href="/" className="back-btn">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </a>
          </div>
          
          <div className="blog-title-section">
            <h1>Blog & Articles</h1>
            <p className="blog-description">
              These are my thoughts and experiences in tech. If you find
              something confusing or helpful, I'd love to hear from you.
            </p>
          </div>

          <div className="blog-stats">
            <span className="posts-badge">
              {filteredBlogs.length} Article{filteredBlogs.length !== 1 ? 's' : ''} Published
            </span>
          </div>

          <div className="blog-search">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>

        <BlogCard blogs={filteredBlogs} />
        
        {filteredBlogs.length === 0 && (
          <div className="no-results">
            <p>No articles found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

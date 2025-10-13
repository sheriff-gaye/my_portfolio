import React, { useState } from "react";
import "./blog.css";
import { ArrowLeft, Search, } from "lucide-react";
import { BlogCard } from "./card";
import { Link } from "react-router-dom";
import blogData from "./data";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [activeView, setActiveView] = useState('all');

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredBlogs(blogData);
    } else {
      const filtered = blogData.filter(blog =>
        blog.title.toLowerCase().includes(term.toLowerCase()) ||
        blog.content.toLowerCase().includes(term.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleViewChange = (view) => {
    setActiveView(view);
    switch(view) {
      case 'recent':
        setFilteredBlogs([...blogData].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)));
        break;
      case 'popular':
        // You can implement popularity logic based on views, likes, etc.
        setFilteredBlogs([...blogData].sort((a, b) => b.id - a.id)); // For now, just by ID
        break;
      default:
        setFilteredBlogs(blogData);
    }
  };

  return (
    <section className="blog-page enhanced">
      <div className="container">
        <div className="blog-header">
          <div className="back-navigation">
            <Link to="/" className="back-btn">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="blog-title-section">
            <h1>Blog & Articles</h1>
            <p className="blog-description">
              Insights, tutorials, and thoughts on technology, software development, 
              and my journey in the tech industry. Join me as I share experiences 
              and lessons learned along the way.
            </p>
          </div>

          <div className="blog-stats">
            <span className="posts-badge">
              {filteredBlogs.length} Article{filteredBlogs.length !== 1 ? 's' : ''} Published
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="view-tabs">
          <button 
            className={`tab-btn ${activeView === 'all' ? 'active' : ''}`}
            onClick={() => handleViewChange('all')}
          >
            All Posts
          </button>
          <button 
            className={`tab-btn ${activeView === 'recent' ? 'active' : ''}`}
            onClick={() => handleViewChange('recent')}
          >
            Recent
          </button>
          <button 
            className={`tab-btn ${activeView === 'popular' ? 'active' : ''}`}
            onClick={() => handleViewChange('popular')}
          >
            Popular
          </button>
        </div>

        {/* Search */}
        <div className="blog-search">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles, tags, or topics..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="section-header-small">
          <h2 className="section-subtitle-small">
            {activeView === 'all' ? 'All Articles' : 
             activeView === 'recent' ? 'Recent Articles' : 'Popular Articles'}
          </h2>
          <div className="section-line"></div>
        </div>

        <BlogCard blogs={filteredBlogs} />
        
        {filteredBlogs.length === 0 && (
          <div className="no-results">
            <p>No articles found matching your search criteria.</p>
            <button 
              onClick={() => {
                handleSearch('');
                setActiveView('all');
              }}
              className="btn btn-primary"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
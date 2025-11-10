import React from "react";
import { BlogCard } from "./card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import blogData from "./data";

const HomeBlog = () => {
  const featuredPost = blogData.find(blog => blog.featured) || blogData[0];
  const recentBlogs = blogData
    .filter(blog => blog.id !== featuredPost.id)
    .slice(-3)
    .reverse();

  const getReadingTime = (content) => {
    return Math.ceil(content.split(' ').length / 200);
  };

  return (
    <section id="blog" className="home-blog-section">
      <div className="container">
        <div className="section-header">
          <h5 className="section-subtitle">Latest Articles</h5>
          <h2 className="section-title">
            My <span className="highlight">&#123;Blog&#125;</span>
          </h2>
          <p className="section-description">
            Exploring technology, sharing insights, and documenting my journey 
            in software development and beyond.
          </p>
        </div>

        <div className="featured-section">
          <div className="section-header-small">
            <h2 className="section-subtitle-small">Featured Article</h2>
            <div className="section-line"></div>
          </div>

          <div className="featured-grid">
            <Link to={`/blog/${featuredPost.title}`} className="featured-card main-featured">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-overlay"></div>
                <span className="featured-badge">Featured</span>
              </div>
              
              <div className="featured-content">
                <div className="featured-tags">
                  {featuredPost.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="featured-tag">{tag}</span>
                  ))}
                </div>
                
                <h2 className="featured-title">{featuredPost.title}</h2>
                
                <p className="featured-excerpt">
                  {featuredPost.content.substring(0, 200).replace(/<[^>]*>/g, '')}...
                </p>
                
                <div className="featured-meta">
                  <div className="featured-meta-left">
                    <div className="featured-date">
                      <Calendar size={16} />
                      <span>{featuredPost.dateCreated}</span>
                    </div>
                    <div className="featured-read-time">
                      <Clock size={16} />
                      <span>{getReadingTime(featuredPost.content)} min read</span>
                    </div>
                  </div>
                  
                  <div className="featured-read-more">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="section-header-small" style={{ marginTop: '4rem' }}>
          <h2 className="section-subtitle-small">Recent Articles</h2>
          <div className="section-line"></div>
        </div>

        <div className="blog-container">
          <BlogCard blogs={recentBlogs.slice(0, 3)} />
          
          <div className="blog-cta">
            <Link to="/blog" className="btn btn-primary lg enhanced">
              Explore All Articles
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
import { Calendar, Clock, ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ blogs }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const truncateContent = (content, maxLength = 140) => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    return cleanContent.substring(0, maxLength) + "...";
  };

  const getReadingTime = (content) => {
    return Math.ceil(content.split(' ').length / 200);
  };

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <article
          className="blog-card enhanced"
          key={blog.id}
          onClick={() => handleCardClick(blog.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardClick(blog.id);
            }
          }}
        >
          <div className="blog-card-image">
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
            />
            <div className="blog-card-overlay"></div>
            
            {/* Hover Overlay */}
            <div className="blog-hover-overlay">
              <div className="blog-hover-content">
                <button className="hover-read-more">
                  <ArrowRight size={16} />
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
          
          <div className="blog-card-content">
            {/* Tags */}
            <div className="blog-card-tags">
              {blog.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="blog-tag">
                  {tag}
                </span>
              ))}
              {blog.tags.length > 2 && (
                <span className="blog-tag">
                  +{blog.tags.length - 2}
                </span>
              )}
            </div>

            <h3 className="blog-card-title">{blog.title}</h3>
            
            <p className="blog-card-excerpt">
              {truncateContent(blog.content)}
            </p>
            
            <div className="blog-card-meta">
              <div className="blog-meta-left">
                <div className="blog-date">
                  <Calendar size={14} />
                  <span>{blog.dateCreated}</span>
                </div>
                <div className="blog-read-time">
                  <Clock size={14} />
                  <span>{getReadingTime(blog.content)} min</span>
                </div>
              </div>
              
              <div className="read-more">
                Read More →
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
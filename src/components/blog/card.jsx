import {  Calendar } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ blogs }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const truncateContent = (content, maxLength = 120) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <article
          className="blog-card"
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
          </div>
          
          <div className="blog-card-content">
            <h3 className="blog-card-title">{blog.title}</h3>
            
            <p className="blog-card-excerpt">
              {truncateContent(blog.content.replace(/<[^>]*>/g, ''))}
            </p>
            
            <div className="blog-card-meta">
              <div className="blog-date">
                <Calendar size={16} />
                <span>{blog.dateCreated}</span>
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

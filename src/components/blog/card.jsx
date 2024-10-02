import { TimerReset } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const BlogCard = ({ blogs }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog2_container">
      {blogs.map((blog) => (
        <article
          className="blog_item"
          key={blog.id}
          onClick={() => handleCardClick(blog.id)}
          style={{ cursor: "pointer" }}
        >
          <h3>{blog.title}</h3>

          <div className="top">
            <Link
              to={`/blog/${blog.id}`}
              className="blog_link"
              onClick={(e) => e.stopPropagation()}
            >
              Read More
            </Link>
            <p className="timer">
              <TimerReset /> {blog.dateCreated}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

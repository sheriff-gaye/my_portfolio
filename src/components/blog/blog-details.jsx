import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { Eye, TimerResetIcon } from "lucide-react";
import blogData from "./data"; // Import your blog data
import "./blog.css"; // Ensure your styles are being imported
import Comment from "./comment";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogData.find((item) => item.id === parseInt(id)); // Find the blog by ID

  // If the blog is not found, return a fallback UI
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <section>
      <div className="container blog_container">
        <div className="back">
          <Link to="/blog">
            <BiArrowBack />
          </Link>
          <h3>Blog Page</h3>
        </div>

        <div className="blogdetails">
          <h1>{blog.title}</h1>

          <div className="liner">
            <p> Written By Gaye Tech </p>

            <p>
              <TimerResetIcon /> {blog.dateCreated}
            </p>
           
          </div>

          <hr />

          <p className="blog_text">{blog.content}</p>

          <div className="images">
            <img src={blog.image} alt={blog.title} />
          </div>

          <Comment />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;

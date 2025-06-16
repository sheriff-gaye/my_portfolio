import { ArrowLeft, Calendar, User, Share2, BookOpen } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import blogData from "./data";
import "./blog.css";
import Comment from "./comment";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-not-found">
        <div className="container">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const readingTime = Math.ceil(blog.content.split(' ').length / 200);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="blog-details-page">
      <div className="container">
        <nav className="blog-navigation">
          <Link to="/blog" className="back-btn">
            <ArrowLeft size={20} />
            <span>All Articles</span>
          </Link>
        </nav>

        <header className="blog-details-header">
          <h1 className="blog-details-title">{blog.title}</h1>
          
          <div className="blog-details-meta">
            <div className="meta-item">
              <User size={16} />
              <span>Gaye Tech</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>{blog.dateCreated}</span>
            </div>
            <div className="meta-item">
              <BookOpen size={16} />
              <span>{readingTime} min read</span>
            </div>
          </div>

          <div className="blog-actions">
            <button onClick={handleShare} className="share-btn">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </header>

        <div className="blog-details-content">
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className="blog-text" 
               dangerouslySetInnerHTML={{ __html: blog.content.replace(/br/g, '<br>') }}>
          </div>

          <div className="blog-footer">
            <div className="tags">
              <span className="tag">Web Development</span>
              <span className="tag">Technology</span>
            </div>
          </div>

          <Comment />
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
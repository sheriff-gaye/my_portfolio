import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import blogData from "./data";
import "./blog.css";
import Comment from "./comment";

// Reading progress hook
const useReadingProgress = () => {
  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('.blog-details-content');
      const progressFill = document.querySelector('.progress-fill');
      
      if (!article || !progressFill) return;
      
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      const articleBottom = articleTop + articleHeight;
      const windowBottom = scrollTop + windowHeight;
      
      let progress = 0;
      
      if (scrollTop >= articleTop) {
        if (windowBottom >= articleBottom) {
          progress = 100;
        } else {
          const totalReadableHeight = articleHeight - windowHeight;
          const readableScrolled = scrollTop - articleTop;
          progress = Math.min((readableScrolled / totalReadableHeight) * 100, 100);
        }
      }
      
      progressFill.style.width = `${Math.max(0, progress)}%`;
    };
    
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress();
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);
};

const BlogDetails = () => {
  const { title } = useParams();
  const blog = blogData.find((item) => item.title === title);
  
  useReadingProgress();

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




  const relatedPosts = blogData
    .filter(post => post.id !== blog.id)
    .slice(0, 3);

  return (
    <article className="blog-details-page enhanced">
      <div className="container">
        {/* Enhanced Navigation */}
        <nav className="blog-navigation enhanced">
          <Link to="/blog" className="back-btn enhanced">
            <ArrowLeft size={20} />
            <span>All Articles</span>
          </Link>
          <div className="blog-breadcrumb">
            <span>Blog</span> / <span>{blog.title.length > 30 ? blog.title.substring(0, 30) + '...' : blog.title}</span>
          </div>
        </nav>

        {/* Enhanced Header */}
       

        {/* Enhanced Content */}
        <div className="blog-details-content enhanced">
            <h1 className="blog-details-title">{blog.title}</h1>
          <div className="blog-image enhanced">
            <img src={blog.image} alt={blog.title} />
            <div className="image-caption">
              Featured image for "{blog.title}"
            </div>
          </div>

          <div className="blog-content-wrapper">
            <div className="lead-paragraph">
              {blog.content.split('\n')[0].substring(0, 200)}...
            </div>
            
            <div className="blog-text enhanced content-block">
              <div dangerouslySetInnerHTML={{ 
                __html: blog.content
                  .split('\n')
                  .slice(1)
                  .map(paragraph => `<p>${paragraph.trim()}</p>`)
                  .join('') 
              }}>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="blog-footer enhanced">
            <div className="tags-section">
              <h3 className="tags-title">
                <Tag size={18} />
                Topics
              </h3>
              <div className="tags enhanced">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag enhanced">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h2 className="related-title">More Articles You Might Like</h2>
              <div className="related-grid">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.id}`}
                    className="related-card"
                  >
                    <div className="related-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="related-content">
                      <span className="related-tag">{post.tags[0]}</span>
                      <h3 className="related-card-title">{post.title}</h3>
                      <div className="related-meta">
                        <Calendar size={14} />
                        <span>{post.dateCreated}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Comment />
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
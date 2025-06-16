import React, { useState } from "react";
import "./portfolio.css";
import { portfolio_data } from "./info";
import { ArrowRight, ExternalLink, Filter, Github,  } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isNotProject] = useState(true);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'education', label: 'Education' }
  ];

  // Filter data
  const filteredData = portfolio_data.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  const displayData = isNotProject 
    ? filteredData.slice(0, 6) 
    : filteredData;
  return (
    <section id="portfolio">
         

      <h5>My Recent Works</h5>
      <h2>Featured <span>&#123;Projects&#125;</span></h2>

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
          >
            <Filter size={16} />
            {category.label}
          </button>
        ))}
      </div>


      <div className="container portfolio_container">
        {displayData.map(
          ({ id, image, title, desc, demo_url, git_url, stack }) => {
            return (
              <article className="portfolio_item" key={id}>
                <div className="portfolio_item-image">
                  <img src={image} alt="portfolio_image" />
                </div>
                <h3>{title}</h3>

                <p>{desc}</p>

                <div className="stack-container">
                  {stack.split(',').map((tech, index) => (
                    <span key={index} className="stack-tag">
                      {tech.trim()}
                    </span>
                  ))}
                </div>


                <div className="portfolio_item-cta">
                  {git_url && (
                    <a
                      href={git_url}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github/>
                      Github
                    </a>
                  )}
                  {demo_url && (
                    <a
                      href={demo_url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          }
        )}

        {isNotProject && (
          <div>
            <a href="/projects" className="btn btn-primary lg">
              See More of My Projects
              <ArrowRight/>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

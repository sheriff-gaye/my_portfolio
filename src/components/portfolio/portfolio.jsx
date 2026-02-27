import React, { useState } from "react";
import "./portfolio.css";
import { portfolio_data } from "./info";
import { ArrowRight, ExternalLink, Github, Layers } from "lucide-react";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "education", label: "Education" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const isPreview = true; 

  const filteredData = portfolio_data.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const displayData = isPreview ? filteredData.slice(0, 3) : filteredData;

  return (
    <section id="portfolio">
      <h2>
        Featured <span>&#123;Projects&#125;</span>
      </h2>

      {/* Filters */}
      <div className="filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
          >
            <Layers size={12} />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="container portfolio_container">
        {displayData.length === 0 ? (
          <p className="portfolio-empty">No projects in this category yet.</p>
        ) : (
          displayData.map(
            ({ id, image, title, desc, demo_url, git_url, stack, category }, index) => (
              <article className="portfolio_item" key={`${id}-${index}`}>
                {/* Image */}
                <div
                  className="portfolio_item-image"
                 
                >
                  <img src={image} alt={title} />
                  <span className="category-badge">{category}</span>
                </div>

                {/* Body */}
                <div className="portfolio_item-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>

                  {/* Stack Tags */}
                  <div className="stack-container">
                    {stack.split(",").map((tech, i) => (
                      <span key={i} className="stack-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="portfolio_item-cta">
                  {git_url && (
                    <a
                      href={git_url}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${title} GitHub repository`}
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {demo_url && (
                    <a
                      href={demo_url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${title} live demo`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            )
          )
        )}

        {/* See More */}
        {isPreview && (
          <div className="see-more-wrapper">
            <a href="/projects" className="btn btn-primary">
              See All Projects
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
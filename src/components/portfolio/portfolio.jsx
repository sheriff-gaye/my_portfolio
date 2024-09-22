import React from "react";
import { useLocation } from "react-router-dom";
import "./portfolio.css";
import { portfolio_data } from "./info";
import { ArrowRight, ExternalLink, Github,  } from "lucide-react";

const Portfolio = () => {
  const router = useLocation();

  const isNotProject = router.pathname !== "/projects";

  const displayData = isNotProject
    ? portfolio_data.slice(0, 6)
    : portfolio_data;
  return (
    <section id="portfolio">
         

      <h5>My Recent Works</h5>
      <h2>My <span>&#123;Portfolio&#125;</span></h2>
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

                <p className="stack">{stack}</p>

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

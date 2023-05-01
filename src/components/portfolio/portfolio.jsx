import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/p1.jpg"
import IMG2 from "../../assets/p2.jpg"
import IMG3 from "../../assets/p3.jpg"
import IMG4 from "../../assets/p4.jpg"
import IMG5 from "../../assets/p5.jpg"
import IMG6 from "../../assets/p6.jpg"


const Portfolio = () => {
    return (<section id="portfolio">
        <h5>My Recent Works</h5>
        <h2>My Portfolio</h2>
        <div className="container portfolio_container">
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="portfolio_image" />

                </div>
                <h3>This is a porfolio item title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quam exercitationem tempora minus quod dolores ad sunt reiciendis distinctio rerum id?
                </p>
                <div className="portfolio_item-cta">
                    <a href="" className="btn" target="_blank">Github</a>
                    <a href="" className="btn btn-primary" target="_blank">Live Demo</a>

                </div>
            </article>

            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG2} alt="portfolio_image" />

                </div>
                <h3>This is a porfolio item title</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quam exercitationem tempora minus quod dolores ad sunt reiciendis distinctio rerum id?
                </p>

                <div className="portfolio_item-cta">
                    <a href="" className="btn" target="_blank">Github</a>
                    <a href="" className="btn btn-primary" target="_blank">Live Demo</a>

                </div>

            </article>

            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG3} alt="portfolio_image" />

                </div>
                <h3>This is a porfolio item title</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quam exercitationem tempora minus quod dolores ad sunt reiciendis distinctio rerum id?
                </p>

                <div className="portfolio_item-cta">
                    <a href="" className="btn" target="_blank">Github</a>
                    <a href="" className="btn btn-primary" target="_blank">Live Demo</a>

                </div>

            </article>

            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG4} alt="portfolio_image" />

                </div>
                <h3>This is a porfolio item title</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quam exercitationem tempora minus quod dolores ad sunt reiciendis distinctio rerum id?
                </p>

                <div className="portfolio_item-cta">
                    <a href="" className="btn" target="_blank">Github</a>
                    <a href="" className="btn btn-primary" target="_blank">Live Demo</a>

                </div>

            </article>

            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG5} alt="portfolio_image" />

                </div>
                <h3>This is a porfolio item title</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quam exercitationem tempora minus quod dolores ad sunt reiciendis distinctio rerum id?
                </p>

                <div className="portfolio_item-cta">
                    <a href="" className="btn" target="_blank">Github</a>
                    <a href="" className="btn btn-primary" target="_blank">Live Demo</a>

                </div>

            </article>

            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG6} alt="portfolio_image" />

                </div>
                <h3>This is a porfolio item title</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quam exercitationem tempora minus quod dolores ad sunt reiciendis distinctio rerum id?
                </p>
                
                <div className="portfolio_item-cta">
                    <a href="" className="btn" target="_blank">Github</a>
                    <a href="" className="btn btn-primary" target="_blank">Live Demo</a>

                </div>

            </article>

        </div>

    </section>);
}

export default Portfolio;
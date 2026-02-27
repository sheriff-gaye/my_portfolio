import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./cta.css";
import Me from "../../assets/IMG_2099.jpeg";

const traits = [
  { title: "Ships Fast", desc: "Idea to deployed product — no drag." },
  { title: "Full Ownership", desc: "I treat your project like it's mine." },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const HireCTA = () => {
  return (
    <section id="hire-cta">
      <h2 className="cta-section-title">
        The Developer You <span>Actually Need</span>
      </h2>

      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* LEFT: IMAGE */}
          <div className="cta-image-panel">
            <img src={Me} alt="Sheriff Gaye" />
            <div className="availability-badge">
              <span className="dot" />
              Available for work
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="cta-content-panel">
            <motion.div
              className="cta-intro"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              
              <h3>
                I don't just write code —<br />
                I <span>solve problems</span> that matter.
              </h3>
            </motion.div>

            <div className="traits-grid">
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  className="trait-item"
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="trait-icon">{trait.icon}</span>
                  <div className="trait-text">
                    <p className="trait-title">{trait.title}</p>
                    <p className="trait-desc">{trait.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="cta-actions"
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <a href="#contact" className="btn-hire">
                <ArrowRight size={14} />
                Let's Build Together
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireCTA;
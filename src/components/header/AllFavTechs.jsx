import React from "react";
import { motion } from "framer-motion";
import {
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

const AllFavTechs = () => {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <div >
      <motion.ul
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
        className="fav-tech-list"
      >
        <motion.li variants={animation}>
          <SiNextdotjs className="tech-icon" />
        </motion.li>
        <motion.li variants={animation}>
          <SiReact className="tech-icon" />
        </motion.li>
        <motion.li variants={animation}>
          <SiTypescript className="tech-icon" />
        </motion.li>
        <motion.li variants={animation}>
          <SiTailwindcss className="tech-icon" />
        </motion.li>
        <motion.li variants={animation}>
          <SiNodedotjs className="tech-icon" />
        </motion.li>
        <motion.li variants={animation}>
          <SiRedux className="tech-icon" />
        </motion.li>
        <motion.li variants={animation}>
          <SiGraphql className="tech-icon" />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default AllFavTechs;

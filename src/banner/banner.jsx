import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="banner">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
         Crafting Solutions, One <span>&#123;Code&#125;</span> at a Time
      </motion.h1>
    </div>
  );
};

export default Banner;
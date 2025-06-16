import {  FileText, Send } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/1XEZsbvFV7dSTp8yofD6utUbl9WyOQpAl/view?usp=sharing" className="btn" download >
        Download CV
        <FileText />
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
        <Send />
      </a>
    </div>
  );
};

export default CTA;

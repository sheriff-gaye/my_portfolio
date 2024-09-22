import {  FileText, Send } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a href="/index.pdf" className="btn" download>
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

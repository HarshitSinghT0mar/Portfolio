import React from "react";

const Card = ({ image, desc, title, code, site } = props) => {
  return (
    <div className="project-card">
      <div className="project-card-img-box">
        <img loading="lazy" src={image} />
      </div>
      <div className="project-card-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{desc}</p>
        <div className="project-card-links">
          <a className="project-link" href={site} target="_blank">
            Visit Site
          </a>
          <a className="project-link" href={code} target="_blank">
            Visit Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

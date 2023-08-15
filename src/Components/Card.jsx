import React from "react";
import { Blurhash } from "react-blurhash";

const Card = ({ image, desc, title, code, site } = props) => {
  return (
    <div className="project-card">
      <div className="project-card-img-box">
      {/* <Blurhash hash="LNR,KqX-}7xT;]sjJCN|+ca#E*nh"  /> */}
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

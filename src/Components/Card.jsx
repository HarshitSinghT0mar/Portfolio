import React, { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

const Card = ({ image, desc, title, code, site, hashValue } = props) => {
  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    const newImage = new Image();
    newImage.src = image;
    newImage.onload = () => {
      return setLoadImage(true);
    };
  }, []);
  return (
    <div className="project-card">
      <div className="project-card-img-box">
        {loadImage ? (
          <img loading="lazy" src={image} />
        ) : (
          <BlurhashCanvas hash={hashValue} className="blurhash-canvas" />
        )}
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

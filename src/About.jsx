import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section-para">
        <h2
          className="about-section-heading heading"
          style={{ fontSize: "2.5rem", marginBottom: "3px" }}
        >
          Hey,I'm <br />
          Harshit Singh Tomar,
        </h2>
        <p>
          a frontend developer specializing in React. With a strong eye for
          design and a knack for problem-solving, I'm committed to delivering
          captivating user experiences. I excel in transforming complex concepts
          into elegant, user-friendly interfaces that captivate visitors.
        </p>
      </div>
      <div className="about-section-image-container">
        <img loading="lazy" src="./assets/HarshitPic.png" />
      </div>
    </section>
  );
};

export default About;

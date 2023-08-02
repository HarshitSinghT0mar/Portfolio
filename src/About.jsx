import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section-para">
        <h2 style={{ fontSize: "2.5rem" }}>Hey,I'm Harshit Singh Tomar, a frontend developer </h2>
        <p>
         specializing in React. With a strong eye for
          design and a knack for problem-solving, I'm committed to delivering
          captivating user experiences. I excel in transforming complex concepts
          into elegant, user-friendly interfaces that captivate visitors.
        </p>
      </div>
      <div className="about-section-image-container">
        <img loading="lazy" src="./assets/HarshitPic.jpeg" />
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

const About = () => {
  const [loaded, setLoaded] = useState(false);


  useEffect (() => {
    const image= new Image();
    image.src="./assets/HarshitPic.png";
image.onload= ()=>setLoaded(true);
  },[])

  return (
    <section className="about-section">
      {/* <Navbar /> */}
      <div className="about-section-para">
        <h2
          className="about-section-heading heading  "
          style={{ fontSize: "2.5rem", marginBottom: "3px" }}
        >
          Hi,I'm <br />
          Harshit Singh Tomar,
        </h2>
        <p>
          a Frontend Developer driven by a deep love for crafting beautiful user
          interfaces. With a strong foundation in React and an eye for detail, I
          transform complex ideas into elegant, user-friendly experiences. I
          thrive on the challenge of marrying design and code to create
          interfaces that captivate and delight users. Let's collaborate to
          bring seamless, visually stunning digital journeys to life.
        </p>
      </div>

      <div className="about-section-image-container">
        {loaded ? (
          <img
            loading="lazy"
            src="./assets/HarshitPic.png"
          
          />
        ) : (
          <BlurhashCanvas
            hash="LrM%sHt7_NRj?bofofaeo#WBITof"
            className="profile-image"
          />
        )}
      </div>
    </section>
  );
};

export default About;

import React from "react";



const About = () => {
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
        a Frontend Developer driven by a deep love for crafting beautiful user interfaces. With a strong foundation in React and an eye for detail, I transform complex ideas into elegant, user-friendly experiences. I thrive on the challenge of marrying design and code to create interfaces that captivate and delight users. Let's collaborate to bring seamless, visually stunning digital journeys to life.
        </p>
        {/* <div className="socials-container">
       
          <a href="https://github.com/HarshitSinghT0mar" target="_black" rel={`noopener noreferrer ${uuidv4()}`}><GitHubIcon sx={{fontSize:30}}/></a>
          <a href="https://www.linkedin.com/in/harshitsinghtomar/" target="_black" rel={`noopener noreferrer ${uuidv4()}`}><LinkedInIcon sx={{fontSize:30}}/></a>
         
        </div> */}
      </div>
      
      <div className="about-section-image-container">
        <img loading="lazy" src="./assets/HarshitPic.png" />
      </div>
    </section>
  );
};

export default About;

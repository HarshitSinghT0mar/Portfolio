import React from "react";
import Card from "./Card";
import projectData from "../ProjectData";

const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <h2 className="heading">My Projects</h2>
        <div className="project-card-section">
          {projectData.map((project) => {
            const { id, description, image, name, siteLink, codeLink } =
              project;
            return (
              <Card
                key={id}
                title={name}
                image={image}
                desc={description}
                site={siteLink}
                code={codeLink}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;

import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>{project.due_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;

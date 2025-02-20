import React, { useEffect, useState } from "react";
import { getProjects, createProject } from "../api/api";
import ProjectList from "../components/ProjectList";
import ProjectForm from "../components/ProjectForm";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleCreateProject = async (projectData) => {
    const newProject = await createProject(projectData);
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ProjectForm onCreateProject={handleCreateProject} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectsPage;

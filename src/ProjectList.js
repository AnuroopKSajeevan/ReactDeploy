import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://springapplications-hfffhgcuaqfzdbbh.southindia-01.azurewebsites.net/api/projects"
        );
        setProjects(response.data);
      } catch (error) {
        setError("Error fetching projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      {error && <p>{error}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.project_id}>
            <h3>{project.project_name}</h3>
            <p>Description: {project.project_description}</p>
            <p>Start Date: {project.start_date}</p>
            <p>Deadline: {project.deadline}</p>
            <p>Client ID: {project.client_id}</p>
            {project.tasks.length > 0 ? (
              <ul>
                {project.tasks.map((task) => (
                  <li key={task.id}>
                    <h4>{task.task_name}</h4>
                    <p>Description: {task.description}</p>
                    <p>Start Date: {task.start_date}</p>
                    <p>End Date: {task.end_date}</p>
                    <p>Status: {task.status}</p>
                    <p>Project ID: {task.project_id}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tasks assigned</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

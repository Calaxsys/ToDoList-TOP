import { populateTasksDisplay } from "./UI";
import { projects } from "./projects";
import { saveProjects } from "./localStorage";

function deleteTask(projectId, taskIndex) {
  const project = projects.find((proj) => proj.id === projectId);
  if (project) {
    project.tasks.splice(taskIndex, 1);
    populateTasksDisplay();
  }
  saveProjects(projects);
}

export { deleteTask };

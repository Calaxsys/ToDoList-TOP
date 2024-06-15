import { populateTasksDisplay, populateDefaultProjectsList } from "./UI";
let selectedProjectId = null;

function selectProject(projectId) {
  const previouslySelected = document.querySelector(".selected-project");
  if (previouslySelected) {
    previouslySelected.classList.remove("selected-project");
  }

  const selectedProject = document.querySelector(
    `[data-project-id='${projectId}']`
  );
  if (selectedProject) {
    selectedProject.classList.add("selected-project");
  }
  selectedProjectId = projectId;
  populateTasksDisplay();
}

function getSelectedProjectId() {
  return selectedProjectId;
}

export { getSelectedProjectId, selectProject };

import { Project, projects } from "./projects";
import { selectedProjectId } from "./selectProject";
import { Task } from "./tasks";
import { saveProjects } from "./localStorage";
import { populateProjectsList } from "./UI";

function handleProjectFormSubmit(e) {
  e.preventDefault();
  const projectNameInput = document.getElementById("project-name");
  const projectName = projectNameInput.value.trim();
  if (projectName) {
    const project = new Project(Date.now().toString(), projectName, []);

    //push project to array
    projects.push(project);

    //Save to local storage
    saveProjects(projects);

    populateProjectsList();

    //Reset and close the form
    projectNameInput.value = "";
    document.getElementById("project-form-popup").style.display = "none";
  }
}

function handleTaskFormSubmit(e) {
  e.preventDefault();
  const taskNameInput = document.getElementById("task-name");
  const taskName = taskNameInput.value.trim();
  if (taskName) {
    const task = new Task(taskName);
    task.name = taskName;

    //Find the currently selected project object to push the task to
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    if (selectedProject) {
      selectedProject.addTask(task);

      saveProjects(projects);
    }

    //Clear and close the form popup
    taskNameInput.value = "";
    document.getElementById("task-form-popup").style.display = "none";
  }
}

export { handleProjectFormSubmit, handleTaskFormSubmit };

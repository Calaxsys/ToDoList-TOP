import { Project, projects } from "./projects";
import { getSelectedProjectId } from "./selectProject";
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
    const selectedProjectId = getSelectedProjectId();
    if (selectedProjectId) {
      const project = projects.find((proj) => proj.id === selectedProjectId);
      if (project) {
        const task = new Task(taskName);
        task.title = taskName;
        project.tasks.push(task);

        //Save to local storage
        saveProjects(projects);
      }
    }
    //Clear and close the form popup
    taskNameInput.value = "";
    document.getElementById("task-form-popup").style.display = "none";
  }
}

export { handleProjectFormSubmit, handleTaskFormSubmit };

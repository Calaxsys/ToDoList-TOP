import { getProjects, saveProjects } from "./localStorage";
import { displayProject } from "./UI";

let projects = getProjects();

class Project {
  constructor(id, name, tasks) {
    this.id = id;
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

function handleProjectFormSubmit(e) {
  e.preventDefault();
  const projectNameInput = document.getElementById("project-name");
  const projectName = projectNameInput.value.trim();
  if (projectName) {
    const project = new Project(projectName);
    project.id = Date.now().toString();
    project.name = projectName;
    displayProject(project);

    //Save to local storage
    const projects = getProjects();
    projects.push(project);
    saveProjects(projects);

    //Reset and close the form
    projectNameInput.value = "";
    document.getElementById("project-form-popup").style.display = "none";
  }
}

export { projects, Project, handleProjectFormSubmit };

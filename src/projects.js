import { getProjects, saveProjects } from "./localStorage";
import { populateProjectsList } from "./UI";

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

export { projects, Project, handleProjectFormSubmit };

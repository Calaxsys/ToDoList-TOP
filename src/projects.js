import { getProjects } from "./localStorage";

let projects = getProjects();
let defaultProjects = [
  {
    id: Date.now().toString(),
    name: "Inbox",
    tasks: [],
  },
  {
    id: Date.now().toString() + 1,
    name: "Today",
    tasks: [],
  },
  {
    id: Date.now().toString() + 2,
    name: "This Week",
    tasks: [],
  },
];

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

function openProjectForm() {
  document.getElementById("project-form-popup").style.display = "block";
  document.getElementById("project-name").focus(); //Auto focus on the title when opening form
}

function cancelProjectForm() {
  document.getElementById("project-form-popup").style.display = "none";
  document.getElementById("project-name").value = ""; // Clear input field
}

console.log(projects);
export {
  defaultProjects,
  projects,
  Project,
  openProjectForm,
  cancelProjectForm,
};

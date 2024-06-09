import { projects, handleProjectFormSubmit } from "./projects";
import { openTaskForm, cancelTaskForm } from "./tasks";
import { selectProject } from "./selectProject";

function initialLoad() {
  const sidebarNavDisplay = document.querySelector("#nav");
  sidebarNavDisplay.innerHTML = ""; // Clear existing content
  sidebarNavDisplay.innerHTML = `        
      <h1 id="home-tab">Home</h1>
      <h3 id="inbox-tab">Inbox</h3>
      <h3 id="today-tab">Today</h3>
      <h3 id="important-tab">Important</h3>
      <div id="projects-section">
        <h2>Projects</h2>
        <ul id="projects-list"></ul>
        <button id="add-project-btn">Add Project</button>
      </div>
    `;

  const formDisplays = document.querySelector("#main-body");
  formDisplays.innerHTML = `
      <!-- Project Popup Form -->
      <div id="project-form-popup" class="popup">
        <form id="project-form" class="popup-content">
          <label for="project-name">Title:</label>
          <input type="text" id="project-name" name="project-name" required>
          <button type="submit">Add Project</button>
          <button type="button" id="cancel-project">Cancel</button>
        </form>
      </div>

      <!-- Task Popup Form --> 
      <div id="task-form-popup" class="popup">
        <form id="task-form" class="popup-content">
          <label for"task-name">Title:</label>
          <input type="text" id="task-name" name="task-name" required>
          <button type="submit">Add Task</button>
          <button type="button" id="cancel-task">Cancel</button>
        </form>
      </div>
  `;

  populateProjectsList();
  setupEventListeners();
}

function openProjectForm() {
  document.getElementById("project-form-popup").style.display = "block";
  document.getElementById("project-name").focus(); //Auto focus on the title when opening form
}

function cancelProjectForm() {
  document.getElementById("project-form-popup").style.display = "none";
  document.getElementById("project-name").value = ""; // Clear input field
}

function displayProjectsFromStorage(projects) {
  projects.forEach((project) => {
    populateProjectsList(project);
  });
}

function populateProjectsList() {
  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = ""; // Clear existing projects

  projects.forEach((project) => {
    const createProjectItem = document.createElement("li");
    createProjectItem.textContent = project.name;
    createProjectItem.dataset.projectId = project.id;
    createProjectItem.addEventListener("click", () => {
      selectProject(project.id);
    });
    projectsList.appendChild(createProjectItem);
  });
}

function setupEventListeners() {
  // Event listeners for adding a project and form submission/cancellation
  document.getElementById("add-project-btn").addEventListener("click", () => {
    if ((document.getElementById("task-form-popup").style.display = "block")) {
      cancelTaskForm();
    }
    openProjectForm();
  });

  document
    .getElementById("project-form")
    .addEventListener("submit", handleProjectFormSubmit);
  document
    .getElementById("cancel-project")
    .addEventListener("click", cancelProjectForm);

  //Event listeners for adding a task and form submission/cancellation
  document.getElementById("add-task-btn").addEventListener("click", () => {
    if (
      (document.getElementById("project-form-popup").style.display = "block")
    ) {
      cancelProjectForm();
    }
    openTaskForm();
  });

  document
    .getElementById("cancel-task")
    .addEventListener("click", cancelTaskForm);

  //Display projects from local storage
  displayProjectsFromStorage(projects);
}

export { initialLoad, populateProjectsList };

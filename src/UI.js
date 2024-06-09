import { projects, handleProjectFormSubmit } from "./projects";
import { openTaskForm, cancelTaskForm } from "./tasks";

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

function openProjectForm() {
  document.getElementById("project-form-popup").style.display = "block";
  document.getElementById("project-name").focus();
}

function cancelProjectForm() {
  document.getElementById("project-form-popup").style.display = "none";
  document.getElementById("project-name").value = ""; // Clear input field
}

function displayProjectsFromStorage(projects) {
  projects.forEach((project) => {
    displayProject(project);
  });
}

function displayProject(project) {
  const projectsListDisplay = document.getElementById("projects-list");
  const createProjectDisplayElement = document.createElement("li");
  createProjectDisplayElement.textContent = project.name;
  projectsListDisplay.appendChild(createProjectDisplayElement);
}

export { initialLoad, displayProject };

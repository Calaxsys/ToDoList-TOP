import { projects, handleProjectFormSubmit } from "./projects";

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
      <!-- Popup Form -->
      <div id="project-form-popup" class="popup">
        <form id="project-form" class="popup-content">
          <label for="project-name">Title:</label>
          <input type="text" id="project-name" name="project-name" required>
          <button type="submit">Add Project</button>
          <button type="button" id="cancel">Cancel</button>
        </form>
      </div>
  `;

  // Event listeners for adding a project and form submission/cancellation
  document
    .getElementById("add-project-btn")
    .addEventListener("click", openProjectForm);
  document
    .getElementById("project-form")
    .addEventListener("submit", handleProjectFormSubmit);
  document
    .getElementById("cancel")
    .addEventListener("cancel", cancelProjectForm);

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

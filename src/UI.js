import { projects, Project, handleProjectFormSubmit } from "./projects";

function initialLoad() {
  const sidebarNavElementsDisplay = document.querySelector("#nav");
  sidebarNavElementsDisplay.innerHTML = ""; // Clear existing content
  sidebarNavElementsDisplay.innerHTML = `        
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

  //Event Listener for opening the form to add a project
  document.getElementById("add-project-btn").addEventListener("click", () => {
    document.getElementById("project-form-popup").style.display = "block";
    document.getElementById("project-name").focus();
  });

  //Event listeners for form submission and cancellation
  document
    .getElementById("project-form")
    .addEventListener("submit", handleProjectFormSubmit);

  document.getElementById("cancel").addEventListener("click", () => {
    document.getElementById("project-form-popup").style.display = "none";
    //Clear text input field on cancel
    document.getElementById("project-name").value = "";
  });

  //Display projects from localStorage
  displayProjectsFromStorage(projects);
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

export { initialLoad };

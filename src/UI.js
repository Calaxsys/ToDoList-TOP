import { projects, Project } from "./projects";

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
        <div id="projects-list"></div>
        <button id="add-project">Add Project</button>
      </div>
  `;
}

export { initialLoad };

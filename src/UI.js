import { projects, openProjectForm, cancelProjectForm } from "./projects";
import {
  handleProjectFormSubmit,
  handleTaskFormSubmit,
} from "./formSubmittals";
import { openTaskForm, cancelTaskForm } from "./tasks";
import { selectProject, getSelectedProjectId } from "./selectProject";

function initialLoad() {
  const sidebarNavDisplay = document.querySelector("#nav");
  sidebarNavDisplay.innerHTML = ""; // Clear existing content
  sidebarNavDisplay.innerHTML = `  
      <div id="default-projects">
        <h1 id="home-tab">Home</h1>
        <li id="inbox-tab">Inbox</li>
        <li id="today-tab">Today</li>
        <li id="week-tab">This Week</li>
      </div>
      <div id="projects-section">
        <h1>Projects</h1>
        <ul id="projects-list"></ul>
      </div>
      <button id="add-project-btn">Add Project</button>
    `;

  const formDisplays = document.querySelector("#main-body");
  formDisplays.innerHTML = `
  <div id="task-container">
      <h2 data-task-title-element id="task-title"></h2>
      <ul id="task-display"></ul>
  </div>
      
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
          <label for="task-name">Title:</label>
          <input type="text" id="task-name" name="task-name" required>

          <label for="task-description">Description:</label>
          <input type="text" id="task-description">

          <label for"due-date">Due Date:</label>
          <input type="date" id="due-date">

          <span>Priority Level:</span>
          <div id="priority-container">
            <input type="radio" id="high-priority" name="priority-level" value="high-priority">
            <label for="high-priority">High</label>

            <input type="radio" id="standard-priority" name="priority-level" value="standard-priority">
            <label for="standard-priority">Standard</label>
        
            <input type="radio" id="low-priority" name="priority-level" value="low-priority">
            <label for="low-priority">Low</label>
          </div>
            <button type="submit" class="popup-btns">Add Task</button>
            <button type="button" id="cancel-task" class="popup-btns">Cancel</button>
        </form>
      </div>
  `;
  setupEventListeners();
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

function populateTasksDisplay() {
  const taskTitleDisplay = document.querySelector("[data-task-title-element]");
  taskTitleDisplay.innerHTML = "";

  const taskDisplay = document.getElementById("task-display");
  taskDisplay.innerHTML = "";

  const selectedProjectId = getSelectedProjectId();
  if (selectedProjectId) {
    const project = projects.find((proj) => proj.id === selectedProjectId);
    if (project) {
      taskTitleDisplay.textContent = project.name;
      project.tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-card");

        const taskCardLeftDisplay = document.createElement("div");
        taskCardLeftDisplay.classList.add("task-card-left");

        const toggleComplete = document.createElement("input");
        toggleComplete.type = "checkbox";

        const taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;

        taskCardLeftDisplay.appendChild(toggleComplete);
        taskCardLeftDisplay.appendChild(taskTitle);

        taskElement.appendChild(taskCardLeftDisplay);

        const rightCardDisplay = document.createElement("div");
        rightCardDisplay.classList.add("task-card-right");

        const dueDateElement = document.createElement("div");
        const priorityDisplay = document.createElement("div");
        const editTaskBtn = document.createElement("button");
        const deleteTaskBtn = document.createElement("button");

        dueDateElement.textContent = task.date;
        priorityDisplay.textContent = task.priority;

        editTaskBtn.textContent = "Edit Task";
        editTaskBtn.id = "edit-task-btn";

        deleteTaskBtn.textContent = "Delete";
        deleteTaskBtn.id = "delete-task-btn";

        rightCardDisplay.appendChild(dueDateElement);
        rightCardDisplay.appendChild(priorityDisplay);
        rightCardDisplay.appendChild(editTaskBtn);
        rightCardDisplay.appendChild(deleteTaskBtn);
        taskElement.appendChild(rightCardDisplay);

        taskDisplay.appendChild(taskElement);
      });
    }
  }
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

  document
    .getElementById("task-form")
    .addEventListener("submit", handleTaskFormSubmit);

  //Event listeners for tasks
  document
    .getElementById("delete-task-btn")
    .addEventListener("click", deleteTask);
  //Display projects from local storage
  populateProjectsList();
}

export { initialLoad, populateProjectsList, populateTasksDisplay };

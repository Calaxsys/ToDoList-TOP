import { Project, projects } from "./projects";
import { getSelectedProjectId } from "./selectProject";
import { Task } from "./tasks";
import { saveProjects } from "./localStorage";
import { populateProjectsList, populateTasksDisplay } from "./UI";

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
  //Retrieve values from the form element for the task
  const taskNameInput = document.getElementById("task-name");
  const taskName = taskNameInput.value.trim();

  const taskDescriptionInput = document.getElementById("task-description");
  const taskDescription = taskDescriptionInput.value.trim();

  const taskDueDateInput = document.getElementById("due-date");
  const dueDate = taskDueDateInput.value;

  const taskPriority = document.querySelector(
    "input[name=priority-level]:checked"
  ).value;

  if ((taskName, taskDescription, dueDate, taskPriority)) {
    const selectedProjectId = getSelectedProjectId();
    if (selectedProjectId) {
      const project = projects.find((proj) => proj.id === selectedProjectId);
      if (project) {
        const task = new Task(taskName, taskDescription, dueDate);
        task.title = taskName;
        task.description = taskDescription;
        task.priority = taskPriority;

        project.tasks.push(task);

        //Save to local storage
        saveProjects(projects);

        populateTasksDisplay();
      }
    }
    //Clear and close the form popup
    taskNameInput.value = "";
    document.getElementById("task-form-popup").style.display = "none";
  }
}

export { handleProjectFormSubmit, handleTaskFormSubmit };

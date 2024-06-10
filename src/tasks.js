import { projects, Project } from "./projects";
import { selectedProjectId } from "./selectProject";

class Task {
  constructor(title, description, date, priority, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = id || Date.now().toString();
  }
}

function handleTaskFormSubmit(e) {
  e.preventDefault();
  const taskNameInput = document.getElementById("task-name");
  const taskName = taskNameInput.value.trim();
  if (taskName) {
    const task = new Task(taskName);
    task.name = taskName;

    taskNameInput.value = "";
    document.getElementById("task-form-popup").style.display = "none";
  }
}

function openTaskForm() {
  document.getElementById("task-form-popup").style.display = "block";
  document.getElementById("task-name").focus();
}

function cancelTaskForm() {
  document.getElementById("task-form-popup").style.display = "none";
  document.getElementById("task-name").value = ""; // Clear input field
}

export { Task, handleTaskFormSubmit, openTaskForm, cancelTaskForm };

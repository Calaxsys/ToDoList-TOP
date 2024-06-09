import { projects, Project } from "./projects";

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

function handleTaskFormSubmit(e) {
  e.preventDefault();
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

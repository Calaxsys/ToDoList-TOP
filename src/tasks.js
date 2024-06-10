class Task {
  constructor(title, description, date, priority, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = id || Date.now().toString();
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

export { Task, openTaskForm, cancelTaskForm };

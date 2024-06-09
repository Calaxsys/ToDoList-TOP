let projects = [];

class Project {
  constructor(id, name, tasks) {
    this.id = id;
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

export { projects, Project };

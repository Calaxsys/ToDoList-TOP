function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function getProjects() {
  const projectsString = localStorage.getItem("projects");
  return JSON.parse(projectsString) || [];
}

export { saveProjects, getProjects };

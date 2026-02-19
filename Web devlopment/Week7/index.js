async function loadProjects() {
  try {
    const res = await fetch("data/projects.json");
    const data = await res.json();
    displayProjects(data);
  } catch (err) {
    console.error("Error loading data");
  }
}

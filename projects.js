// Sample project data, replace with your actual projects
const projectsData = [
    { name: "Project 1", technology: "Java" },
    { name: "Project 2", technology: "C#" },
    { name: "Project 3", technology: "Node.js" },
    // Add more projects as needed
];

// Function to filter and display projects
function filterProjects() {
    const filterValue = document.getElementById("technologyFilter").value.toLowerCase();
    const projectsContainer = document.querySelector(".projects");

    // Clear existing projects
    projectsContainer.innerHTML = "";

    // Filter and display projects
    projectsData.forEach(project => {
        if (project.technology.toLowerCase().includes(filterValue) || filterValue === "") {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");
            projectItem.textContent = project.name + " - " + project.technology;
            projectsContainer.appendChild(projectItem);
        }
    });
}

// Attach the filterProjects function to the input event
document.getElementById("technologyFilter").addEventListener("input", filterProjects);

// Initial projects display
filterProjects();

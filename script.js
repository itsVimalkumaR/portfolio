document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded!");

    const projects = document.querySelectorAll(".project-card");
    projects.forEach((project, index) => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "0.3s";
        });
        project.addEventListener("mouseout", () => {
            project.style.transform = "scale(1)";
        });
    });
});

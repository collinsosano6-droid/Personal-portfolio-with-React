import ProjectCard from "./ProjectCard";

// Receives an array of projects and shows a card for each one
function ProjectList({ projects }) {
  // If the array is empty, tell the user instead of showing a blank space
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <ul className="project-list">
      {/* .map() turns each project into a ProjectCard. "key" must be unique. */}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
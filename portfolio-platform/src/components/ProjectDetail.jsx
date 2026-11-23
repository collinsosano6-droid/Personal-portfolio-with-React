import { useParams, Link } from "react-router-dom";

function ProjectDetail({ projects }) {
  // useParams reads the :id part of the URL (/projects/3 gives id = "3")
  const { id } = useParams();

  // URL values are always strings, so convert each project id to a string too
  const project = projects.find((p) => String(p.id) === id);

  // If no project matches the id, show a friendly message
  if (!project) {
    return (
      <main className="container">
        <p>Project not found.</p>
        <Link to="/">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <article className="card">
        <Link to="/">← Back to projects</Link>
        <h2>{project.title}</h2>
        {project.image && <img src={project.image} alt={project.title} />}
        <p>{project.description}</p>
        {/* Only show the link if the project has one */}
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer">
            Visit project
          </a>
        )}
      </article>
    </main>
  );
}

export default ProjectDetail;
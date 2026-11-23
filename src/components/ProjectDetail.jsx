import { useParams, Link } from "react-router-dom";

function ProjectDetail({ projects }) {
  // Read the :id part of the URL
  const { id } = useParams();

  // URL values are strings, so compare as strings
  const project = projects.find((p) => String(p.id) === id);

  // If no project matches, show a friendly message
  if (!project) {
    return (
      <main className="container">
        <p>Project not found.</p>
        <Link to="/" className="back-link">
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/" className="back-link">
        ← Back to projects
      </Link>

      <article className="detail">
        {project.image ? (
          <img src={project.image} alt={project.title} className="detail-image" />
        ) : (
          <div className="detail-image placeholder" aria-hidden="true">
            {project.title.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="detail-body">
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {/* Only show the button if the project has a link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Project
            </a>
          )}
        </div>
      </article>
    </main>
  );
}

export default ProjectDetail;
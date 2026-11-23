import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <li className="project-card">
      {/* Image on top. If there is no image, show a coloured box with a letter */}
      {project.image ? (
        <img src={project.image} alt={project.title} className="thumb" />
      ) : (
        <div className="thumb placeholder" aria-hidden="true">
          {project.title.charAt(0).toUpperCase()}
        </div>
      )}

      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Link to the detail page, e.g. /projects/1 */}
        <Link to={`/projects/${project.id}`} className="card-link">
          View project →
        </Link>
      </div>
    </li>
  );
}

export default ProjectCard;
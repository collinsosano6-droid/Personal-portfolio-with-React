import { Link } from "react-router-dom";

// Shows ONE project. The "project" object comes in through props.
function ProjectCard({ project }) {
  return (
    <li className="project-card">
      {/* If the project has an image, show it. Otherwise show a grey box. */}
      {project.image ? (
        <img src={project.image} alt={project.title} className="thumb" />
      ) : (
        <div className="thumb placeholder">No image</div>
      )}

      <div>
        {/* This link goes to the detail page, e.g. /projects/1 */}
        <h3>
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;
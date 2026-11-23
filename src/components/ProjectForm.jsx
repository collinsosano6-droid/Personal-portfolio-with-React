import { useState } from "react";

function ProjectForm({ onAdd }) {
  // One piece of state for each input box
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    // Stop the browser from reloading the page
    event.preventDefault();

    // Simple validation: don't allow an empty title or description
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill in the title and description.");
      return;
    }

    // Send the new project up to App
    onAdd({
      title: title.trim(),
      description: description.trim(),
      image: image.trim(),
    });

    // Clear the form so it is ready for the next project
    setTitle("");
    setDescription("");
    setImage("");
  }

  return (
    // id="add-project" is the target of the "Add a Project" button in the hero
    <form id="add-project" className="card" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="image">Image URL (optional)</label>
      <input
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default ProjectForm;
import { useState } from "react";
import ProjectForm from "./ProjectForm";
import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList";

function Home({ projects, onAdd }) {
  // The search text lives here because only Home and its children need it
  const [search, setSearch] = useState("");

  // Keep only projects whose title contains the search text
  const visibleProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      {/* id="projects" is the target of the "View My Work" button */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <SearchBar value={search} onChange={setSearch} />
        <ProjectList projects={visibleProjects} />
      </section>

      <ProjectForm onAdd={onAdd} />
    </main>
  );
}

export default Home;
import { useState } from "react";
import ProjectForm from "./ProjectForm";
import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList";

function Home({ projects, onAdd }) {
  // The search text lives here because only Home and its children need it
  const [search, setSearch] = useState("");

  // Keep only the projects whose title contains the search text.
  // toLowerCase() makes the search ignore capital letters.
  const visibleProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <ProjectForm onAdd={onAdd} />

      <section className="card">
        <SearchBar value={search} onChange={setSearch} />
        <ProjectList projects={visibleProjects} />
      </section>
    </main>
  );
}

export default Home;
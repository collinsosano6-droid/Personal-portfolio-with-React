import ProjectList from "./ProjectList";

function Home({ projects }) {
  return (
    <main className="container">
      <section className="card">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}

export default Home;
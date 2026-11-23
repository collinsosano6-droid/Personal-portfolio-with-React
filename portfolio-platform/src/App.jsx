import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import { initialProjects } from "./data";

function App() {
  // State: the list of all projects. It starts with the data from data.js.
  const [projects, setProjects] = useState(initialProjects);

  // Called by the form (Step 7) when someone adds a new project
  function addProject(newProject) {
    // Give the new project a unique id using the current time in milliseconds
    const projectWithId = { ...newProject, id: Date.now() };

    // Make a NEW array: all old projects + the new one.
    // (React needs a new array to notice the change. Never use push on state.)
    setProjects([...projects, projectWithId]);
  }

  return (
    <div>
      <Header />

      {/* Routes shows ONE page depending on the URL */}
      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} onAdd={addProject} />}
        />
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;
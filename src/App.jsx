import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import { initialProjects } from "./data";

function App() {
  // State: the list of all projects. It starts with the data from data.js.
  const [projects, setProjects] = useState(initialProjects);

  // Called by the form when someone adds a new project
  function addProject(newProject) {
    // Give the new project a unique id using the current time
    const projectWithId = { ...newProject, id: Date.now() };

    // Make a NEW array: all old projects + the new one
    setProjects([...projects, projectWithId]);
  }

  return (
    // The "app" class lets the footer stick to the bottom of the screen
    <div className="app">
      {/* We pass the number of projects so the header can show it */}
      <Header projectCount={projects.length} />

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

      <Footer />
    </div>
  );
}

export default App;
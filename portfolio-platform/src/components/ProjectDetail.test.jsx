import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const fakeProjects = [
  { id: 1, title: "Brand Site", description: "A website", image: "", link: "" },
];

// Pretend the browser is at the given URL
function renderAt(url) {
  render(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={fakeProjects} />}
        />
      </Routes>
    </MemoryRouter>
  );
}

test("shows the details of the right project", () => {
  renderAt("/projects/1");
  expect(screen.getByText("Brand Site")).toBeInTheDocument();
  expect(screen.getByText("A website")).toBeInTheDocument();
});

test("shows a message when the project does not exist", () => {
  renderAt("/projects/99");
  expect(screen.getByText(/project not found/i)).toBeInTheDocument();
});
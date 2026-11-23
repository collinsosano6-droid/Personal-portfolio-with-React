import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Home from "./Home";

// Fake data so the tests don't depend on data.js
const fakeProjects = [
  { id: 1, title: "Brand Site", description: "A website", image: "" },
  { id: 2, title: "Mobile App", description: "An app", image: "" },
];

// MemoryRouter is needed because ProjectCard uses <Link>
function renderHome(onAdd = vi.fn()) {
  render(
    <MemoryRouter>
      <Home projects={fakeProjects} onAdd={onAdd} />
    </MemoryRouter>
  );
}

test("shows all projects at first", () => {
  renderHome();
  expect(screen.getByText("Brand Site")).toBeInTheDocument();
  expect(screen.getByText("Mobile App")).toBeInTheDocument();
});

test("search hides projects that do not match", async () => {
  renderHome();
  await userEvent.type(screen.getByLabelText(/search projects/i), "mobile");
  expect(screen.getByText("Mobile App")).toBeInTheDocument();
  expect(screen.queryByText("Brand Site")).not.toBeInTheDocument();
});

test("submitting the form calls onAdd with the new project", async () => {
  const onAdd = vi.fn(); // a fake function that records how it was called
  renderHome(onAdd);

  await userEvent.type(screen.getByLabelText(/^title/i), "New Work");
  await userEvent.type(screen.getByLabelText(/^description/i), "Cool stuff");
  await userEvent.click(screen.getByRole("button", { name: /add/i }));

  expect(onAdd).toHaveBeenCalledWith({
    title: "New Work",
    description: "Cool stuff",
    image: "",
  });
});
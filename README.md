# Personal Portfolio Platform

A simple portfolio website built with React. It lets a freelancer or creative agency show off their past work, add new projects, and view the details of each project.

## Features

- **Project list:** the home page shows all projects as cards
- **Add a project:** a form lets you add new projects to the list
- **Search:** type in the search box to filter projects by title
- **Project details:** click a project to see its own page
- **Responsive design:** works on phones, tablets and desktops

## Built With

- [React](https://react.dev/) for building the user interface
- [Vite](https://vite.dev/) for running and building the project
- [React Router](https://reactrouter.com/) for moving between pages
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/) for testing

## Getting Started

### What you need first

- [Node.js](https://nodejs.org/) installed on your computer
- [Git](https://git-scm.com/) installed on your computer

### Steps

1. Clone the project:
   ```bash
   git clone [your-repository-url]
   ```
2. Go into the project folder:
   ```bash
   cd portfolio-platform
   ```
3. Install the packages:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```
5. Open the link shown in the terminal (usually `http://localhost:5173`).

## How to Use the App

1. **Browse:** scroll through the project cards on the home page.
2. **Search:** type a project title in the search box to filter the list.
3. **Add:** fill in the title and description (the image URL is optional), then click **Add**.
4. **View details:** click a project title to open its page. Click **Back to projects** to return.

> **Note:** New projects are stored in React state, so they disappear when you refresh the page.

## Running the Tests

```bash
npm test
```

Press `q` to quit. To run the tests once without watch mode, use:

```bash
npx vitest run
```

## Project Structure

```
portfolio-platform/
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Starts the app and sets up the router
    ├── App.jsx               # Holds the projects state and the routes
    ├── App.css               # All the styles
    ├── data.js               # The starting list of projects
    ├── setupTests.js         # Test setup
    └── components/
        ├── Header.jsx        # Site title
        ├── Home.jsx          # Home page (form, search and list)
        ├── SearchBar.jsx     # Search input
        ├── ProjectForm.jsx   # Add-project form
        ├── ProjectList.jsx   # Shows all project cards
        ├── ProjectCard.jsx   # Shows one project
        ├── ProjectDetail.jsx # Page for a single project
        └── *.test.jsx        # Tests
```

## How It Works

- `data.js` holds the starting projects.
- `App.jsx` loads them into state with `useState` and passes them down to the other components as props.
- `ProjectForm` sends a new project up to `App`, which adds it to the list.
- React Router shows `Home` at `/` and `ProjectDetail` at `/projects/:id`.

## Editing the Projects

Open `src/data.js` and change or add objects like this:

```js
{
  id: 4,
  title: "My New Project",
  description: "What this project is about.",
  image: "",   // optional image URL
  link: "",    // optional link to the live project
}
```

Each project needs a unique `id`.

## Ideas for Improvement

- Save projects in `localStorage` so they stay after a refresh
- Add edit and delete buttons
- Add categories or tags and filter by them
- Connect to a real backend API

## Author

[Collins Osano](https://github.com/[collinsosano6-droid])